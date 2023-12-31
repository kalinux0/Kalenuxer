function kalenuxOnoff(a) {
    var b, c, d, e, f, g, h, j, i;
    e = document.createElement('div');
    e.className = 'kalenux-onoff-bar';
    f = document.createElement('input');
    f.className = a.className.replace('kalenux-onoffs', 'kalenux-onoff');
    if (a.id) {
        f.id = a.id;
    }

    if (a.dataset.value == 1) {
        f.dataset.value = 1;
    }

    g = Object.keys(a.dataset);
    for (h in g) {
        j = g[h];
        f.dataset[j] = a.dataset[j];
    }

    f.type = 'checkbox';
    g = document.createElement('div');
    g.className = 'kalenux-onoff-toggle';
    b = a.parentNode;
    e.appendChild(g);
    b.appendChild(f);
    b.appendChild(e);
    if (a.className.indexOf('kalenux-change') != -1) {
        f.className = 'kalenux-onoff kalenux-change';
    }

    if (a.onchange && a.onchange.toString().indexOf('onchange') != -1) {
        e = a.outerHTML.split('onchange="')[1];
        e = e.split('"')[0];
    } else {
        e = '';
    }

    a.remove();

    f = b.firstElementChild;

    if (typeof setChanged !== 'undefined') {
        f.outerHTML = f.outerHTML.replace('data-value', 'onchange = "setChanged(this);' + e + '" data-value')
    } else if (e) {
        f.outerHTML = f.outerHTML.replace('data-value', 'onchange = "' + e + '" data-value')
    }

}

function tableSwitch(a) {
    if (a.checked && a.dataset.value == 1) {
        a.dataset.value = "0";
        a.checked = false;
        kalenuxSelectOnOffUpdateTable(a);
        return
    }
    if (a.checked) {
        a.dataset.value = "1";
    } else {
        a.dataset.value = "0";
    }
    kalenuxSelectOnOffUpdateTable(a);
}

function kalenuxSelectOnOffUpdateTable(a) {
    data = {
        id: a.dataset.id,
    }
    data[a.dataset.name] = a.dataset.value;

    postJSON(
        user_api_url + a.dataset.url,
        function(a, b) {
            if (a.result === 1) {
                good();
            } else {
                error("Bir hata oluştu!");
            }
        },
        data
    );
}


function kalenuxSelectOnoff(a, b) {
    a = document.getElementById(a);
    if (b === 1) {
        a.checked = true;
        a.value = 1;
        a.dataset.value = 0
    } else {
        a.checked = false;
        a.value = 0;
        a.dataset.value = 1;
    }
}

function kalenuxSingleCheckbox(a, b) {
    var b, c, d, e, f, g, h, j, k, l, m, i;

    a.className = a.className.replace('kalenux-single-checkboxes', 'kalenux-single-checkbox');
    if (a.dataset.default) {
        h = parseInt(a.dataset.default);
    } else {
        h = '';
    }
    d = a.dataset.texts;
    if (d) {
        d = JSON.parse(d);
    }

    e = document.createElement('input');
    e.type = 'hidden';
    e.id = a.dataset.id;
    e.value = h;

    g = Object.keys(a.dataset);
    for (h in g) {
        j = g[h];
        delete a.dataset[j];
    }
    a.appendChild(e);
    for (f in d) {
        j = d[f];
        c = document.createElement('div');
        c.className = 'kalenux-checkbox-inner';
        g = document.createElement('button');
        g.className = 'kalenux-checkbox-holder';
        k = document.createElement('input');
        k.className = 'kalenux-checkbox-input';
        k.type = 'checkbox';
        e = j.value;
        if (e === h) {
            k.checked = true;
        }
        k.value = e;
        k.onchange = kalenuxSingleCheck.bind(null, k);
        l = document.createElement('span');
        l.className = 'kalenux-checkbox';
        m = document.createElement('p');
        m.className = 'kalenux-checkbox-text';
        m.innerHTML = j.text;
        g.appendChild(k);
        g.appendChild(l);
        g.appendChild(m);
        c.appendChild(g);
        a.appendChild(c);
    }
}

function kalenuxSingleCheck(a) {
    var b, c, d, i;
    b = a.parentNode.parentNode.parentNode;
    b.firstElementChild.value = a.value;
    c = b.getElementsByClassName('kalenux-checkbox-input');
    d = c.length;
    for (i = 0; i < d; i++) {
        c[i].checked = false;
    }
    a.checked = true;
}

firer.push(function() {
    setElems('kalenux-onoffs', kalenuxOnoff);
    setElems('kalenux-single-checkboxes', kalenuxSingleCheckbox);
});