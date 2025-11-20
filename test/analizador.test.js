const { contarPalabras, esPregunta } = require('../src/analizador');

describe('Pruebas del Analizador de Texto', () => {
    
    test('Debe contar correctamente las palabras simple', () => {
        expect(contarPalabras('Hola mundo')).toBe(2);
    });

    test('Debe retornar 0 si el texto está vacío', () => {
        expect(contarPalabras('')).toBe(0);
    });

    test('Debe detectar si es una pregunta', () => {
        expect(esPregunta('¿Cómo estás?')).toBe(true);
    });

    test('Debe retornar false si no es pregunta', () => {
        expect(esPregunta('Hola mundo')).toBe(false);
    });
});