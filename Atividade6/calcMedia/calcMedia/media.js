   var nome, nota1, nota2, nota3, media;

    nome = prompt ("Digite seu nome: ");
    nota1 = prompt ("Digite a Nota 01");
    nota2 = prompt ("Digite a Nota 02"); 
    nota3 = prompt ("Digite a Nota 03");

    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    alert("Media é igual: " + media);
    

