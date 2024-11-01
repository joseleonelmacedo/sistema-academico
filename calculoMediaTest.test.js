const { calcularMedia } = require('../sistema-academico/calculoMedia');

describe("Testar o módulo de cálculo de média", () => {
    test("Se a média for maior que 6, deveria ser aprovado", () => {
        expect(calcularMedia(6, 6)).toBe("Aprovado por média");
    });

    test("Se a média for menor que 4, deveria ser reprovado", () => {
        expect(calcularMedia(4, 1)).toBe("Reprovado por média");
    });

    test("Se a média for menor que 6 e maior que 4, deveria esta na final devendo tirar X nota", () => {
        expect(calcularMedia(5, 5)).toBe("Aguardando a final, nota necessária será 7.00");
    });
});
