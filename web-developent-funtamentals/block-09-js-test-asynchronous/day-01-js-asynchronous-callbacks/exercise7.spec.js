const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

/**  - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

it('Transforma a string para letras maiúsculas', (done) => {
  uppercase('ola mundo!', (str) => {
    try {
      expect(str).toBe('OLA MUNDO!');
      done();
    } catch (error) {
      done(error)
    }
  });
});
