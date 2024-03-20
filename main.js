const textInput = document.querySelector("#textToEncrypt");
const textEncrypt = document.querySelector("#textEncrypt");
const info = document.querySelector("#info");

const regex = /^[a-z]+$/;

const arrayEncrypt = [
    ['e', 'enter'],
    ['i', 'in'],
    ['o', 'old'],
    ['a', 'all'],
    ['u', 'under']
];

function btnEncrypt () {
    const text = textInput.value;
    validateEncrypt(text);    
};

function btnDecrypt () {
    const text = textInput.value;
    validateDecrypt(text);
};

function validateEncrypt (text) {
    info.value = '';
    if (!text) {
        textEncrypt.value = 'Ningún mensaje fue encontrado'
    } else if (!regex.test(text)){
        info.value = 'Solo letras minúsculas y sin acentos'
        textInput.value = '';
        textEncrypt.value = '';
    } else {
        textEncrypt.value = encrypt(textInput.value);
        textInput.value = '';
    }
};

function validateDecrypt(text) {
    info.value = ''
    if (!text) {
        textEncrypt.value = 'Ningún mensaje fue encontrado'
    } else if (!regex.test(text)){
        info.value = 'Solo letras minúsculas y sin acentos'
        textInput.value = ''
        textEncrypt.value = ''
    } else {
        const textDecrypted = decrypt(textInput.value);
        textEncrypt.value = textDecrypted;
    }
};

function encrypt (text) {
    for (let i = 0; i < arrayEncrypt.length; i++) {
        const element = arrayEncrypt[i][0];
        if (text.includes(element)){
            text= text.replaceAll(
                element,
                arrayEncrypt[i][1]
            )
        }        
    }
    return text
};

function decrypt (text) {
    for (let i = 0; i < arrayEncrypt.length; i++) {
        const element = arrayEncrypt[i][0];
        if (text.includes(element)){
            text= text.replaceAll(
                arrayEncrypt[i][1],
                element
            )
        }        
    }
    return text
};