var aluno1 = new Object();

//Primeira forma de criar Objeto
aluno1.ra = "0030482021019";
aluno1.nome = "Leonardo Maurício Gomes";
alert("PRIMEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


//Segunda forma de criar Objeto
aluno1["ra"] = "00304820210**";
aluno1["nome"] = "Teyser";
alert("SEGUNDA FORMA:" +
      "\n\nNome: " + aluno1["nome"] + 
      "\nRA: " + aluno1["ra"]);


//Terceira forma de criar Objeto
var ra = "ra", nome = "nome"
aluno1[ra] = "00304820210**";
aluno1[nome] = "Alfred";
alert("TERCEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


//----------------------------------------By Teyser----------------------------------------------//      