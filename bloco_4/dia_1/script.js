function adicao() {
  let a = 5;
  let b = 10;
  alert('function adicao() {\n  let a = 5;\n  let b = 10;\n  a + b = ' + (a + b) + '\n}');
}

function subtracao() {
  let a = 10;
  let b = 5;
  alert('function subtracao() {\n  let a = 10;\n  let b = 5;\n  a - b = ' + (a - b) + '\n}');
}

function multiplicacao() {
  let a = 10;
  let b = 5;
  alert('function multiplicacao() {\n  let a = 10;\n  let b = 5;\n  a * b = ' + (a * b) + '\n}');
}

function divisao() {
  let a = 10;
  let b = 5;
  alert('function divisao() {\n  let a = 10;\n  let b = 5;\n  a / b = ' + (a / b) + '\n}');
}

function modulo() {
  let a = 10;
  let b = 5;
  alert('function modulo() {\n  let a = 10;\n  let b = 5;\n  a % b = ' + (a % b) + '\n}');
}

function maiorDeDois() {
  let maior;
  let a = 10;
  let b = 5;
  if (a > b) {
    maior = a;
  } else {
    maior = b;    
  }
  alert('function maiorDeDois() {\n  let maior;\n  let a = 10;\n  let b = 5;\n\n  if (a > b) {\n    let maior = a;\n  } else {\n    let maior = b;\n  }\n  console.log(\'O maior número entre ' + a +  ' e ' + b + ' é o ' + maior + '\'\);\n}');
}

function maiorDeTres() {
  let maior;
  let a = 10;
  let b = 5;
  let c = 8;
  
  if (a > b && a > c) {
    maior = a;
  } else if (b > c) {
    maior = b;
  } else {
    maior = c;
  }
  alert('function maiorDeTres() {\n  let maior;\n  let a = 10;\n  let b = 5;\n  let c = 8;\n\n  if (a > b && a > c) {\n    maior = a;\n  } else if (b > c) {\n    maior = b;\n  } else {\n    maior = c;\n  }\n  console.log(\'O maior número entre \' + a + \' , \' + b + \' e \' + c + \' é o \' + maior);\n}\n console... O maior número entre 10 , 5 e 8 é o ' + maior);
}

function positiveNegativeZero() {
  let number = 10;
  let returnNum = 'zero';
  if (number > 0) {
    returnNum = 'positive';
  } else if (number < 0) {
    returnNum = 'negative';
  }
  alert('function positiveNegativeZero() {\n  let number = 10;\n  let returnNum = \'zero\';\n\n  if (number > 0) {\n    returnNum = \'positive\';\n  } else if (number < 0) {\n    returnNum = \'negative\'\n  }\n  console.log(\'O número é \' + returnNum);\n}\n console... O número é' + returnNum);
}

function triangulo() {
  let ang1 = 90;
  let ang2 = 45;
  let ang3 = 45;
  let triangulo = false;
  let soma = ang1 + ang2 + ang3;

  if (soma == 180) {
    triangulo = true;
  }
  alert('function triangulo() {\n  let ang1 = 90;\n  let ang2 = 45;\n  let ang3 = 45;\n  let triangulo = false;\n  let soma = ang1 + ang2 + ang3;\n\n  if (soma == 180) {\n      triangulo = true;\n    }\n    conaole.log(triangulo)\n}\n console... ' + triangulo);
}
