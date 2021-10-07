const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const customerName = Object.entries(order)[0][1];
  const customerPhone = Object.entries(order)[1][1];
  const deliveryPerson = Object.entries(order.order.delivery)[0][1];
  const customerAddress = Object.entries(order)[2][1]
  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, ${customerAddress.street}, Nº: ${customerAddress.number}, AP: ${customerAddress.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = Object.values(order)[0] = 'Luiz Andrade';
  const pizzas = Object.keys(order.order.pizza);
  const newTotal = Object.entries(order.payment)[0][1] = '50';
  const drinks = Object.entries(order.order.drinks.coke)[0][1];

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00`);
}

orderModifier(order);

const objectArray = Object.entries(order);

objectArray.forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});
