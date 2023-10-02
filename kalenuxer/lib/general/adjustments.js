export function logKalenuxer(info) {
    console.info('Info:' + info);
}

export function errorKalenuxer(error) {
    console.error('Error:' + error);
}

export function exitKalenuxer(error) {
    if (error) {
        errorKalenuxer(error);
    }
    process.exit(1);
}

export function closeKalenuxer(log) {
    if (log) {
        logKalenuxer(log)
    };
    process.exit(1);
}

export function stopKalenuxer() {

}

export function resumeKalenuxer() {

}