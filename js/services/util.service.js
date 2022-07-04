export const utilService = {
    getRandom,
    makeLorem,
    makeId,
    createWord,
    getFormattedDate,
    getFormattedHour,
    getRandomColor,
    getFormattedNowDate
}


let words = []
_populateWords()

//The maximum is exclusive and the minimum is inclusive
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
// Returns a lorem with 'length' chars.
function makeLorem(length) {
    var randStr = '';
    while (randStr.length < length) {
        var word = words[getRandom(1, 28)];
        randStr += word + ' ';
    }
    randStr = randStr[0].toUpperCase() + randStr.substr(1)
    return randStr;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getFormattedHour(timestamp) {
    const time = new Date(timestamp)
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const ampm = (hours >= 12) ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = hours + ':' + minutes + ' ' + ampm;
    return timeStr
}

function getFormattedDate(timestamp) {
    const time = new Date(timestamp)
    // Replacing '.' with '/'
    return time.toLocaleString().split(',')[0].replace(/\./g, '/');
}

function createWord(length) {
    var word = '';
    while (word.length < length) {
        var randChar = _getRandChar();
        word += randChar;
    }
    return word;
}

function getFormattedNowDate() {
    const date = new Date();
    const year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    return year + '-' + month + '-' + day
}

//Private

function _getRandChar() {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var randIndex = parseInt(Math.random() * LETTERS.length)
    return LETTERS.charAt(randIndex);
}

function _populateWords() {
    words[1] = "escapology"
    words[2] = "brightwork"
    words[3] = "verkrampte"
    words[4] = "protectrix"
    words[5] = "nudibranch"
    words[6] = "grandchild"
    words[7] = "newfangled"
    words[8] = "flugelhorn"
    words[9] = "mythologer"
    words[10] = "pluperfect"
    words[11] = "jellygraph"
    words[12] = "quickthorn"
    words[13] = "rottweiler"
    words[14] = "technician"
    words[15] = "cowpuncher"
    words[16] = "middlebrow"
    words[17] = "jackhammer"
    words[18] = "triphthong"
    words[19] = "wunderkind"
    words[20] = "dazzlement"
    words[21] = "jabberwock"
    words[22] = "witchcraft"
    words[23] = "pawnbroker"
    words[24] = "thumbprint"
    words[25] = "motorcycle"
    words[26] = "cryptogram"
    words[27] = "torchlight"
    words[28] = "bankruptcy"
}
