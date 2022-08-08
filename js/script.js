
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleCalculateImc);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  // inputWeight.addEventListener('input', handleCalculateImc);
  // inputHeight.addEventListener('input', handleCalculateImc);

  


function handleCalculateImc() {
  var inputWeight = Number(document.querySelector('#input-weight').value);
  var inputHeight = Number(document.querySelector('#input-height').value);

  var imc = calculateImc(inputWeight, inputHeight);

  var resultImc = document.querySelector('#imc-result');
  resultImc.textContent = imc.toFixed(2).replace('.', ',');

  current(imc);

}

function calculateImc(weight, height) {
  return weight / (height * height);

 
}


function current (imc) {

  var currentImc = document.querySelector('#imc-current');

    var invalido = 16;
    var muitoabaixoPeso = 16.9;
    var abaixoPeso = 18.4;
    var pesoNormal = 24.9;
    var acimaDopeso = 29.9;
    var obesidadeUm = 34.9;
    var obesidadeDois = 40;
    // var obesidadeTres = 40;

  
  if(imc < invalido){
    currentImc.textContent = "Valor Inválido"
  }  
  else if(imc > invalido && imc <= muitoabaixoPeso)
  {
    currentImc.textContent = " Muito Abaixo do Peso"
  }
  else if(imc > muitoabaixoPeso && imc <= abaixoPeso)
  {
    currentImc.textContent = " Abaixo do Peso"
  }
  else if(imc > abaixoPeso && imc <= pesoNormal)
  {
    currentImc.textContent = "Peso Normal"
  }
  else if(imc > pesoNormal && imc <= acimaDopeso)
  {
    currentImc.textContent = "Acima do Peso"
  }
  else if(imc > acimaDopeso && imc <= obesidadeUm)
  {
    currentImc.textContent = "Obesidade grau I"
  }
  else if(imc > obesidadeUm && imc <= obesidadeDois ){
    currentImc.textContent = "Obesidade grau II"
  }
  else if(imc > obesidadeDois){
    currentImc.textContent = "Obesidade grau III"
  }

}








