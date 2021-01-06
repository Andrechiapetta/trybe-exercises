const selectEstado = document.getElementById('estado');
const data = document.getElementById('data');
const botaoEnviar = document.getElementById('enviar');
function createOptions() {
  const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const nomeEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let index = 0; index < estados.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = nomeEstados[index];
    option.value = estados[index];
    selectEstado.appendChild(option);
  }
}
createOptions();

function verificarData() {
  let resposta = false;
  const arrayData = data.value.split('/');
  if (arrayData.length < 3) {
    data.value = "";
    alert('Preencha com o formato de data por exemplo 15/01/1988.');
  }

  if (arrayData[0] < 0 || arrayData[0] > 31 || !isNaN(arrayData[0]) === false) {
    data.value = "";
    alert('Preencha com o formato de data por exemplo 15/01/1988.');
  } else if (arrayData[1] < 0 || arrayData[1] > 12 || !isNaN(arrayData[1]) === false) {
    data.value = "";
    alert('Preencha com o formato de data por exemplo 15/01/1988.');
  } else if (arrayData[2] <= 0 || !isNaN(arrayData[2]) === false) {
    data.value = "";
    alert('Preencha com o formato de data por exemplo 15/01/1988.');
  } else {
    resposta = true;
  }
  return resposta;
};

function dados() {
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelector('#resumo');
  const states = document.querySelector('#estado');
  const insertedData = document.querySelector('#inserted-data');
  const radio = document.querySelector('input[type="radio"]:checked').value;
  const paragraph = document.createElement('p');
  paragraph.innerText = `
    Olá ${inputs[0].value}, vamos conferir seus dados.\n
    E-mail: ${inputs[1].value}\n
    CPF: ${inputs[2].value}\n
    Endereço: ${inputs[3].value}\n
    Cidade: ${inputs[4].value}\n
    Estado: ${states.value}\n
    Moradia: ${radio}\n
    \n
    Agora os dados profissionais.\n
    Resumo do currículo: ${textareas.value}\n
    Cargo: ${inputs[7].value}\n
    Descrição do cargo: ${inputs[8].value}\n
    Data de início: ${inputs[9].value}
  `;
  insertedData.appendChild(paragraph);
}

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
   if (verificarData()) {
     dados();
   }
});