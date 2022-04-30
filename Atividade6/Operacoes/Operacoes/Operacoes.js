var num1, num2;

num1 = prompt ("Digite o número 1: ");
num2 = prompt ("Digite o número 2: ");

alert("SOMA = " + (parseInt(num1, 10) + parseInt(num2, 10)) +
      "\nPRODUTO = " + (parseInt(num1, 10) * parseInt(num2, 10)) +
      "\nDIVISÃO DO PRIMEIRO PELO SEGUNDO NÚMERO = " + (parseFloat(num1) / parseFloat(num2)) +
      "\nRESTO DA DIVISÃO DO PRIMEIRO PELO SEGUNDO NÚMERO = " + (parseFloat(num1) % parseFloat(num2)));

