function isEmpty(text) {
    return Boolean(text.length == 0);
}
function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function validate(formularz) {
    // if(isWhiteSpaceOrEmpty(formularz.elements["f_imie"].value)){
    //     alert("Podaj imię!");
    //     return false;
    // }
    // return true;
    if(checkStringAndFocus(formularz.elements["f_imie"],"Podaj imię!")&&
        checkStringAndFocus(formularz.elements["f_nazwisko"],"Podaj nazwisko!")&&
        checkStringAndFocus(formularz.elements["f_ulica"],"Podaj ulicę!")&&
        checkStringAndFocus(formularz.elements["f_miasto"],"Podaj miasto!")&&
    checkStringAndFocus(formularz.elements["f_email"],"Podaj dobry e-mail"))
    return true;
    else return false;
}

function checkString(str, mess) {
    if(isWhiteSpaceOrEmpty(str)){
        alert(mess);
        return false;
    }
    return true;

}
function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    let strname = obj.name;
    if(strname == "f_email"){
        if(isEmailInvalid(str)){
            document.getElementById(errorFieldName).style.display = "none";
            return true;
        }else{
            document.getElementById(errorFieldName).innerHTML = msg;
            obj.focus();
            return false;
        }
    }else {

        if (isWhiteSpaceOrEmpty(str)) {
            document.getElementById(errorFieldName).innerHTML = msg;
            obj.focus();
            return false;
        } else {
            document.getElementById(errorFieldName).style.display = "none";
            return true;
        }
    }

}

function isEmailInvalid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        return false;
    }
}

function showElement() {
    document.getElementById("NazwiskoPanienskie").style.visibility = 'visible';
}
function hideElement() {
    document.getElementById("NazwiskoPanienskie").style.visibility = 'collapse';
}
function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

