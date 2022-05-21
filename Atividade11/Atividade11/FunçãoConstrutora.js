alert("Função Contrutora ------------>" +
      "\nPressione 'OK' para avançar...");

class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcArea() {
        return this.base * this.altura;
    }
}


var base, altura;
base = prompt("Digite o valor da base: ");
altura = prompt("Digite o valor da altura: ");

objRetangulo = new Retangulo(base, altura);
alert("O cálculo da área é: " + objRetangulo.calcArea());

//----------------------------------------------------------------- Teyser ---------------------------------------------------------------//

alert("Função Conta ------------>" +
     "\nPressione 'OK' para avançar...");

function Conta() {
    var nomeCorrentista, banco, numConta, saldo;
    this.getNomeCorrentista = function () {
        return nomeCorrentista;
    }
    this.getBanco = function () {
        return banco;
    }
    this.getNumConta = function () {
        return numConta;
    }
    this.getSaldo = function () {
        return saldo;
    }
    this.setNomeCorrentista = function (value) {
        nomeCorrentista = value;
    }
    this.setBanco = function (value) {
        banco = value;
    }
    this.setNumConta = function (value) {
        numConta = value;
    }
    this.setSaldo = function (value) {
        saldo = value;
    }
}

function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }
    this.setSaldoEspecial = function (value) {
        saldoEspecial = value;
    }
}

function Poupanca() {
    var juros, dataVencimento;
    this.getJuros = function () {
        return juros;
    }
    this.getDataVencimento = function () {
        return dataVencimento;
    }
    this.setJuros = function (value) {
        juros = value;
    }
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("Leonardo Maurício Gomes");
contaCorrente.setBanco("Nubank");
contaCorrente.setNumConta("16931814-9");
contaCorrente.setSaldo(5100);
contaCorrente.setSaldoEspecial(1500);

contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Leonardo Maurício Gomes");
contaPoupanca.setBanco("C6 Bank");
contaPoupanca.setNumConta("4953688-5");
contaPoupanca.setSaldo(1100);
contaPoupanca.setJuros(0.1);
contaPoupanca.setDataVencimento("05");

alert("CONTA CORRENTE:" +
    "\nNome Correntista: " + contaCorrente.getNomeCorrentista() +
    "\nBanco: " + contaCorrente.getBanco() +
    "\nN° Conta: " + contaCorrente.getNumConta() +
    "\nSaldo: " + contaCorrente.getSaldo() +
    "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());

alert("CONTA POUPANÇA:" +
    "\nNome Correntista: " + contaPoupanca.getNomeCorrentista() +
    "\nBanco: " + contaPoupanca.getBanco() +
    "\nN° Conta: " + contaPoupanca.getNumConta() +
    "\nSaldo: " + contaPoupanca.getSaldo() +
    "\nJuros: " + contaPoupanca.getJuros() +
    "\nData Vencimento: Todo dia " + contaPoupanca.getDataVencimento());







