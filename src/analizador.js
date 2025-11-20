function contarPalabras(texto) {
    if (!texto || texto.trim() === '') {
        return 0;
    }
    return texto.trim().split(/\s+/).length;
}

function esPregunta(texto) {
    if (!texto) return false;
    return texto.trim().endsWith('?');
}


module.exports = {
    contarPalabras,
    esPregunta
};