const selectForm = document.querySelector('#formulario');
const selectMain = document.querySelector('#main');
const selectStats = document.querySelector('#estados');
const selectInputDescCargo = document.querySelector("#desc-cargo");
const selectDadosForm = document.querySelector('#personal').children;
const selectDadosJob = document.querySelector('#lastjob').children;
// const selectInputName = document.querySelector('#name');
// const selectInputEmail = document.querySelector('#email');
// const selectInputCpf = document.querySelector('#cpf');
// const selectInputEnd = document.querySelector('#endereco');
// const selectInputCid = document.querySelector('#cidade');
// const selectInputTipoCs = document.querySelector('#casa');
// const selectInputTipoApt = document.querySelector('#apartamento');
// const selectInputResumo = document.querySelector('#resumo');
// const selectInputCargo = document.querySelector('#cargo');
// const selectInputData = document.querySelector('#data-ini');
const selectButtonSubmit = document.querySelector('#enviar');
const selectButtonClear = document.querySelector('#limpar');
const states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

window.onload = ()=> {
  for (let key in states) {
    const createOption = document.createElement('option');
    createOption.value = key;
    createOption.innerHTML = states[key];
    selectStats.appendChild(createOption);
  }
};

selectButtonSubmit.addEventListener('click', (event)=> {
  event.preventDefault();
  const createDivPersonal = document.createElement('div')
  const createDivFirstJob = document.createElement('div')
  createDivPersonal.classList.add('printuser');
  createDivPersonal.innerHTML = `<h2>Dados Pessoais</h2>`;
  for (let index = 0; index < selectDadosForm.length - 5; index += 2) {
    createDivPersonal.innerHTML += `<p>${selectDadosForm[index].innerHTML} ${selectDadosForm[index + 1].value}</p>`;
  }
  // createDivPersonal.innerHTML += `<p>Nome: ${selectInputName.value}</p>`;
  // createDivPersonal.innerHTML += `<p>Email: ${selectInputEmail.value}</p>`;
  // createDivPersonal.innerHTML += `<p>CPF: ${selectInputCpf.value}</p>`;
  // createDivPersonal.innerHTML += `<p>Endereço: ${selectInputEnd.value}</p>`;
  // createDivPersonal.innerHTML += `<p>Cidade: ${selectInputCid.value}</p>`;
  // createDivPersonal.innerHTML += `<p>Estado: ${selectStats.value}</p>`;
  createDivFirstJob.classList.add('printuser');
  createDivFirstJob.innerHTML = `<h2>Último Emprego</h2>`;
  for (let index = 0; index < selectDadosJob.length; index += 2) {
    createDivFirstJob.innerHTML += `<p>${selectDadosJob[index].innerHTML} ${selectDadosJob[index + 1].value}</p>`;
  }
  // createDivFirstJob.innerHTML += `<p>Resumo: ${selectInputResumo.value}</p>`;
  // createDivFirstJob.innerHTML += `<p>Cargo: ${selectInputCargo.value}</p>`;
  // createDivFirstJob.innerHTML += `<p>Descrição do Cargo: ${selectInputDescCargo.value}</p>`;
  // createDivFirstJob.innerHTML += `<p>Data de Inicio: ${selectInputData.value}</p>`;
  // if (!createDivPersonal.innerHTML === '') {
    selectMain.appendChild(createDivPersonal);
    selectMain.appendChild(createDivFirstJob);
  // } else {
  //   alert('O formúlario está vazio!');
  // }
});
