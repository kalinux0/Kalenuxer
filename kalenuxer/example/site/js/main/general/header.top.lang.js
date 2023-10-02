var main_api_url = api_url + "main/";

function clearValues(a) {
    var b;
    b = a.length;
    for (i = 0; i < b; i++) {
        a[i].value = '';
    }
}

function preload() {
    function imagesLoaded() {
        document.getElementById("firstopen").dataset.state = "closed";
    }

    function imageLoaded() {
        loaded_images++;
        if (loaded_images >= image_count) {
            imagesLoaded();
        }
    }

    var a,
        images = document.images,
        loaded_images = 0,
        image_count = images.length;

    for (a in images) {
        a = images[a];
        if (a.complete) {
            imageLoaded();
        } else if (a.src !== "") {
            a.onload = imageLoaded;
        } else {
            imageLoaded();
        }
    }
}

function setWriter(a, b) {
    if (a == 1) {
        return '/egitmen/' + b;
    } else {
        return '/yazar/' + b;
    }
}

function setBounds(a) {
    var b, c, d;
    b = a.lastElementChild.children;
    a = a.firstElementChild.children;
    c = a.length;
    for (i = 0; i < c; i++) {
        d = a[i];
        console.log(d, b[i], i)
        d.onclick = boundOpener.bind(null, d, b[i]);
    }
}

function boundOpener(a, b) {
    var c, d;
    c = a.parentNode.children;
    d = c.length;
    for (i = 0; i < d; i++) {
        if (!c[i].classList) {
            continue;
        }
        c[i].classList.remove('selected');
    }
    c = b.parentNode.children;
    d = c.length;
    for (i = 0; i < d; i++) {
        if (!c[i].classList) {
            continue;
        }
        c[i].classList.remove('selected');
    }
    a.classList.add('selected');
    b.classList.add('selected');
}

function judge(e) {
    0 != e.value.length ?
        (e.nextElementSibling.style = "top: -20px;font-weight:bold") :
        ((e.style = ""), (e.nextElementSibling.style = ""));
}

function acceptCookie() {
    document.getElementById("cookie").dataset.state = "";
    setCookie(site + "_cookie_accepted", 1);
}

function cp(e) {
    document.getElementById("htbleft").setAttribute("src", "/img/" + e.firstElementChild.innerHTML + ".png");
    for (var t = document.getElementsByClassName("htb"), n = 0; n < t.length; n++)
        t[n].removeAttribute("style"),
        t[n].firstElementChild.removeAttribute("style");
    (e.style = "background: linear-gradient(to left, #855f02 0, #dc9d00 100%);"),
    (e.firstElementChild.style = "color: black;font-weight: bold;");
}

function d(e) {
    var t = e.nextElementSibling;
    "none" == t.style ?
        (t.style = "display:flex;z-index:99;") :
        (t.style = "none");
}

function clearVisitorElems() {
    var a, b, c;
    a = document.getElementsByClassName("visitor");
    b = a.length;
    for (c = 0; c < b; c++) {
        a[c].remove();
    }
}

function openDown(e) {
    var t = e.nextElementSibling;
    "none" == t.style ?
        (t.style = "display:flex;z-index:99;") :
        (t.style = "none");
}

function mainHeaderMenu(data, holder) {
    var a, b, c, d, e, f, g, h, i;
    a = document.createElement("div");
    a.className = "header-menu";
    b = document.createElement("div");
    b.className = "header-menu-down";
    c = document.createElement("span");
    c.className = "icon-arrow-point-to-right";
    d = document.createElement("a");
    d.className = "header-action selected";
    d.onclick = openDown;
    d.innerHTML = "Panel";
    e = document.createElement("div");
    e.className = "optis";
    f = document.createElement("div");
    f.className = "optis-bg";

    a.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    e.appendChild(f);

    function getHeaderAction(a) {
        var g = document.createElement("a");
        g.className = "header-action";
        g.href = a.url;
        g.innerHTML = a.text;
        return g;
    }

    for (i in data) {
        i = getHeaderAction(data[i]);
        e.appendChild(i);
    }

    g = document.createElement("button");
    g.className = "header-action";
    g.onclick = logout;
    g.innerHTML = "Çıkış Yap";
    e.appendChild(g);
    holder = document.getElementById(holder);
    if (holder) {
        holder.appendChild(a);
    }
}

function loadImage(a) {
    var b = a.dataset.src;
    if (b) {
        a.removeAttribute('data-src');
        if (a.nodeName == 'IMG') {
            a.setAttribute('src', b);
        } else {
            a.setAttribute('style', 'background-image:url(' + b + ')');
        }
    }
};

function elementInViewport(a) {
    if (!a) {
        return false;
    }
    var b, c;
    a = a.getBoundingClientRect();
    b = a.x;
    c = a.y;
    return (
        c >= 0 &&
        (b >= 0 || b + a.width >= 0) &&
        c <= (window.innerHeight || document.documentElement.clientHeight)
    )
};

function processScroll() {
    var a, b, c, i;
    a = document.getElementsByClassName('defer');
    b = a.length;
    for (i = 0; i < b; i++) {
        c = a[i];
        if (elementInViewport(c)) {
            loadImage(c);
        }
    }
    if (document.getElementById('header') !== null) {
        if (document.documentElement.scrollTop !== 0) {
            document.getElementById('header').dataset.state = "open";
        } else {
            document.getElementById('header').dataset.state = "";
        }
    }
};

function moveNav() {

}

function getToTheList(event, form) {
    event.preventDefault();
    var data = {
        email: form.email.value,
        phone: form.phone.value,
    }

    if (!form.join_mail_list_agreement.checked) {
        setStatus("footer_state", errors.agreement, false);
        return false;
    }

    if (!form.join_kvkk_agreement.checked) {
        setStatus("footer_state", errors.agreement, false);
        return false;
    }

    postJSON(main_api_url + 'add/subscriber', function(a, d) {
        var result, valid,
            message = false;
        result = a.result;
        switch (result) {
            case 1:
                valid = true;
                message = valids.gotten_to_the_list;
                var e = Array.prototype.slice.call(d.form.getElementsByTagName('input'));
                if (e.length) {
                    var f = Array.prototype.slice.call(d.form.getElementsByTagName('textarea'));
                    if (f.length) {
                        e = e.concat(f);
                    }
                    clearValues(e);
                }
                break;
            case -1:
                message = errors.duplicate_user;
                break;
            case -2:
                message = errors.time_limit;
                break;
            case -3:
                message = errors.time_limit_exceed;
                break;
            default:
                message = errors.try_again;
                break;
        }
        setStatus('footer_state', message, valid);
    }, data, { form: form });
    return false;
}

function putJoin(event, form) {
    event.preventDefault();
    var data = {
        name: form.name.value,
        surname: form.surname.value,
        email: form.email.value,
        phone: form.phone.value,
    }

    if (!form.name.value) {
        setStatus("join_state", errors.fill, false);
        return false;
    }

    if (!form.surname.value) {
        setStatus("join_state", errors.fill, false);
        return false;
    }

    if (!form.email.value && form.phone.value) {
        setStatus("join_state", errors.fill, false);
        return false;
    }

    if (!form.join_mail_list_agreement.checked) {
        setStatus("join_state", errors.agreement, false);
        return false;
    }

    postJSON(main_api_url + 'add/subscriber', function(a, d) {
        var result, valid,
            message = false;
        result = a.result;
        switch (result) {
            case 1:
                valid = true;
                message = valids.gotten_to_the_list;
                var e = Array.prototype.slice.call(d.form.getElementsByTagName('input'));
                if (e.length) {
                    var f = Array.prototype.slice.call(d.form.getElementsByTagName('textarea'));
                    if (f.length) {
                        e = e.concat(f);
                    }
                    clearValues(e);
                }
                break;
            case -1:
                message = errors.duplicate_user;
                break;
            case -2:
                message = errors.time_limit;
                break;
            case -3:
                message = errors.time_limit_exceed;
                break;
            default:
                message = errors.try_again;
                break;
        }
        setStatus('join_state', message, valid);
    }, data, { form: form });
    return false;
}

function flagged(elem) {
    var a, b, c, d;
    a = elem.nextElementSibling;
    b = a.nextElementSibling.getElementsByClassName('kalenux-option-selected')[0];
    c = document.createElement('div');
    c.className = 'selected-flag';
    c.innerHTML = b.firstElementChild.outerHTML;
    a.replaceWith(c);
    if (b && b.dataset.value) {
        setCookie(site + '_language', b.dataset.value);
    } else {
        setCookie(site + '_language', 'en');
    }
    location.href = '/' + b.dataset.value + '/';
}

firer.push(function() {
    if (typeof user_rank === "undefined") {
        return;
    }
    if (user_id) {
        clearVisitorElems();
    }
});