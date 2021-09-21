new window.JustValidate('.js-form', {
  // options here
});

new window.JustValidate('.your-form', {
  Rules: {
    email: {
        required: true,
        email: true
    },
    checkbox: {
        required: true
    },
    name: {
        required: true,
        minLength: 3,
        maxLength: 15
    },
    text: {
        required: true,
        maxLength: 300,
        minLength: 5
    },
    password: {
        required: true,
        password: true,
        minLength: 4,
        maxLength: 8
    },
    zip: {
        required: true,
        zip: true
    },
    phone: {
        phone: true
    }
}
});

new window.JustValidate('.your-form', {
  Messages: {
    required: 'Esté Campo é obrigatório!',
    email: 'Por Favor, Digite um email válido!',
    maxLength: 'O campo deve conter no máximo caracteres de valor',
    minLength: 'O campo deve conter no mínimo caracteres de valor',
    password: 'Senha inválida',
    remote: 'Email já existente'
  },
});

new window.JustValidate('.your-form', {
  colorWrong: "#B81111"
});

new window.JustValidate('.your-form', {
  rules: {
    email: {
      required: true,
      email: true,
      remote: {
        url: 'REMOTE URL',
        sendParam: 'email',
        successAnswer: 'OK',
        method: 'GET'
      }
    }
  }
});

