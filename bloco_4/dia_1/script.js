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

function xadrez() {
  let piece = 'cavalos';

  switch (piece.toLowerCase()) {
    case 'peão':
    case 'peões':
      alert('Peça escolhida = (' + piece + ') Se movimenta uma casa para frente, caso seja o primeiro movimento, pode se mover duas casas, seu ataque deve ser feito na diagonal.');
      break;
    case 'torre':
    case 'torres':
      alert('Peça escolhida = (' + piece + ') Se movimenta na vertical ou horizontal, sem restrição de quantidade de casas.');
    break;
    case 'cavalo':
    case 'cavalos':
      alert('Peça escolhida = (' + piece + ') Se movimenta duas casas nas vertical ou horizontal, e uma casa no sentido perpendicular àquele.');
      break;
    case 'bispo':
    case 'bispos':
      alert('Peça escolhida = (' + piece + ') Se movimenta no sentido diagonal, sem restrição de quantidade de casas.');
    break;
    case 'dama':
    case 'rainha':
      alert('Peça escolhida = (' + piece + ') Se movimenta de forma livre, sem restrição de direção ou quantidade de casas.');
      break;
    case 'rei':
      alert('Peça escolhida = (' + piece + ') Se movimenta uma casa em qualquer direção.');
    break;
    default:
    alert(`Erro a peça (` + piece + ') não existe.');
  }
}

function porcentagemEmConceitos() {
  let notaPorcentagem = 90;
  let notaLetras = ['A' , 'B' , 'C' , 'D' , 'E' , 'F'];
  let notaBase = 90;

  for (let i = 0; i < notaLetras.length; i += 1) {
    if (notaPorcentagem >= notaBase) {
      alert('let notaPorcentagem = 90\nlet notaLetras = [\'A\', \'B\' , \'C\' , \'D\' , \'E\' , \'F\']\nlet notaBase = 90;\n\nfor (let i = 0; i < notaLetras.length; i += 1) {\n  if (notaPorcentagem >= notaBase) {\n    console.log(notaLetras[i]);\n    break;\n  }\n  notaBase -= 10;\n}\n console... ' + notaLetras[i]);
      break;
    }
    notaBase -= 10;
  }
}

function verificaSeTemPar() {
  let num1 = 1;
  let num2 = 2;
  let num3 = 3;
  let temPar = false;

  if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    temPar = true;
  }
  console.log(temPar);
  alert('let num1 = 1;\nlet num2 = 2;\nlet num3 = 3;\nlet temPar = false;\n\nif (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {\n  temPar = true;\n}\nconsole.log(temPar);\n console... ' + temPar);
}
