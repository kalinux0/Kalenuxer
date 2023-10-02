import fse from "fs-extra";
import fs from "fs";
import path from "path";

import { closeKalenuxer, exitKalenuxer } from "./lib/general/adjustments.js";
import { processKalenuxer } from "./lib/prepare/main.js";
import { releaseKalenuxer } from "./lib/release/main.js";

async function kalenuxer() {
    var args = process.argv.slice(2);
    var project = args[0];
    if (!project) {
        exitKalenuxer('Project did not defined');
    }
    var current_dir = path.resolve().split('\\').join('/');

    if (project !== 'main') {
        var project_dir = current_dir.split('/').slice(0, current_dir.length).join('/') + '/websites/' + project + '/';
    } else {
        var project_dir = current_dir.split('/').slice(0, current_dir.length).join('/') + '/controller/';
    }
    console.log(project_dir);
    var method, base, obfuscate, arg;

    obfuscate = false;
    base = 'test';

    arg = args[1];
    switch (arg) {
        case 'release':
            method = 'release';
            break;
        case 'prepare':
            method = 'prepare';
            break;
        case 'upload':
            method = 'upload';
            break;
        case 'backup':
            fse.copySync(project_dir, 'backups/all/' + project + '/' + new Date().getTime()) + '/';
            closeKalenuxer('All files backuped');
        default:
            exitKalenuxer('Command is not exist');
    }

    arg = args[2];
    switch (arg) {
        case 'test':
            base = 'test';
            break;
        case 'release':
            base = 'release';
            break;
        default:
            base = 'test';
            break;
    }

    var i, args_len = args.length;
    for (i = 3; i < args_len; i++) {
        arg = args[i];
        switch (arg) {
            case 'obf':
                obfuscate = true;
                break;
            case 'new':
                var time, times;
                times = ['css', 'js', 'html', 'schemes', 'template', 'api'];
                for (time in times) {
                    time = times[time];
                    if (fs.existsSync(project_dir + '/store/times/' + base + '/' + time + '.json')) {
                        fs.unlinkSync(project_dir + '/store/times/' + base + '/' + time + '.json');
                    }
                }
                break;
            case '--new':
                var the_time, time, times;
                times = ['css', 'js', 'html', 'schemes', 'template', 'api'];
                the_time = args[i + 1];
                if (!the_time) {
                    exitKalenuxer('Specify a time type');
                }
                for (time in times) {
                    time = times[time];
                    if (the_time === time) {
                        if (fs.existsSync(project_dir + '/store/times/' + base + '/' + time + '.json')) {
                            fs.unlinkSync(project_dir + '/store/times/' + base + '/' + time + '.json');
                        }
                    }
                }
                i += 1;
                break;
            default:
                exitKalenuxer('Unknown command at argument ' + i);
        }
    }

    global.options_dir = project_dir + '/settings.json';

    var options = JSON.parse(fs.readFileSync(options_dir));

    global.options = options;
    global.project = project;
    global.base = base;

    global.languages = options.languages;
    global.obfuscate = obfuscate;
    global.method = method;

    global.project_dir = project_dir;

    switch (method) {
        case 'release':
            await processKalenuxer();
            await releaseKalenuxer();
            break;
        case 'prepare':
            await processKalenuxer();
            break;
        case 'upload':
            await releaseKalenuxer();
            break;
        default:
            exitKalenuxer('Command is not exist');
    }
}

kalenuxer();