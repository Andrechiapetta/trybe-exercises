function adicao () {
  let a = 5;
  let b = 10;
  alert('function adicao () {\n  let a = 5;\n  let b = 10;\n  a + b = ' + (a + b) + '\n}');
}

function subtracao () {
  let a = 10;
  let b = 5;
  alert('function subtracao () {\n  let a = 10;\n  let b = 5;\n  a - b = ' + (a - b) + '\n}');
}

function multiplicacao () {
  let a = 10;
  let b = 5;
  alert('function multiplicacao () {\n  let a = 10;\n  let b = 5;\n  a * b = ' + (a * b) + '\n}');
}

function divisao () {
  let a = 10;
  let b = 5;
  alert('function divisao () {\n  let a = 10;\n  let b = 5;\n  a / b = ' + (a / b) + '\n}');
}

function modulo () {
  let a = 10;
  let b = 5;
  alert('function modulo () {\n  let a = 10;\n  let b = 5;\n  a % b = ' + (a % b) + '\n}');
}

function maiorDeDois () {
  let maior;
  let a = 10;
  let b = 5;
  if (a > b) {
    maior = a;
  } else {
    maior = b;    
  }
  alert('function maiorDeDois () {\n  let maior;\n  let a = 10;\n  let b = 5;\n\n  if (a > b) {\n    let maior = a;\n}  else {\n    let maior = b;\n}\nO maior número entre ' + a +  ' e ' + b + ' é o ' + maior);
}

function maiorDeTres () {
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
  alert('function maiorDeTres () {\n  let maior;\n  let a = 10;\n  let b = 5;\n  let c = 8;\n\n  if (a > b && a > c) {\n    maior = a;\n  } else if (b > c) {\n    maior = b;\n} else {\n  maior = c;\n}\nO maior número entre ' + a + ', ' + b + ' e ' + c + ' é o ' + maior);
}
