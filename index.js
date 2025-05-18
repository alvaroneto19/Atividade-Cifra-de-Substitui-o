const alfabeto =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,;._#*"-+';
var tamanho_alfabeto = alfabeto.length;
var mensagem = prompt('Digita sua mensagem que deseja criptografar: ');

var mensagem_criptografada = '';
var mensagem_descriptografada = '';
var resultado_validação;
var chave = prompt('Escreva uma chave para criptografar a sua  mensagem: ');

function validacao_de_caracteres(msg) {
  for (let i = 0; i < msg.length; i++) {
    let caractere = msg[i];
    if (!alfabeto.includes(caractere)) {
      return false;
    }
  }
  return true;
}

function cifrar(mensagem, chave) {
  console.log('\n');
  for (var i = 0; i < mensagem.length; i++) {
    var caratecere = mensagem[i];
    var caractere_chave = chave[i % chave.length];
    var posicao = alfabeto.indexOf(caratecere);
    var posicao_chave = alfabeto.indexOf(chave[i % chave.length]);
    var posicao_final = (posicao + posicao_chave) % tamanho_alfabeto;
    var valor_atual_alfabeto = alfabeto.charAt(posicao_final);

    console.log(
      'Posicao do caracter  [' +
        caratecere +
        '] e igual a ' +
        posicao +
        ' |    Posicao do caractere da chave [' +
        caractere_chave +
        '] e igual a ' +
        posicao_chave
    );

    console.log(
      'O valor atual do alfabeto é ' +
        valor_atual_alfabeto +
        ' e seu valor é ' +
        posicao_final
    );

    mensagem_criptografada = mensagem_criptografada + valor_atual_alfabeto;
  }
}

function decifrar(mensagem_criptografada, chave) {
  for (var i = 0; i < mensagem_criptografada.length; i++) {
    var caratecere = mensagem_criptografada[i];
    var caractere_chave = chave[i % chave.length];
    var posicao = alfabeto.indexOf(caratecere);
    var posicao_chave = alfabeto.indexOf(chave[i % chave.length]);
    var posicao_final =
      (posicao - posicao_chave + tamanho_alfabeto) % tamanho_alfabeto;
    var valor_atual_alfabeto = alfabeto.charAt(posicao_final);

    console.log(
      'Posicao do caracter  [' +
        caratecere +
        '] e igual a ' +
        posicao +
        ' |    Posicao do caractere da chave [' +
        caractere_chave +
        '] e igual a ' +
        posicao_chave
    );

    var valor_atual_alfabeto = alfabeto.charAt(posicao_final);
    console.log(
      'O valor atual do alfabeto é ' +
        valor_atual_alfabeto +
        ' e seu valor é ' +
        posicao_final
    );

    mensagem_descriptografada =
      mensagem_descriptografada + valor_atual_alfabeto;
  }
}

if (validacao_de_caracteres(mensagem) && validacao_de_caracteres(chave)) {
  cifrar(mensagem, chave);
  console.log('\n');
  console.log('Mensagem cifrada: ' + mensagem_criptografada);
  console.log('=========================================================');
  console.log('\n');
  decifrar(mensagem_criptografada, chave);
  console.log('\n');
  console.log('Mensagem decifrada: ' + mensagem_descriptografada);
  console.log('=========================================================');
  console.log('\n');
  console.log('mensagem original: ' + mensagem);
  console.log('mensagem-com cirptografia: ' + mensagem_criptografada);
} else if (validacao_de_caracteres(mensagem) == false) {
  console.log('Erro: um dos caracteres da sua mensagem não e valido');
} else if (validacao_de_caracteres(chave) == false) {
  console.log('Erro: um dos caracteres da sua chave não e valido');
}

/**
a = 0
b = 1
c = 2
d = 3
e = 4
f = 5
g = 6
h = 7
i = 8
j = 9
k = 10
l = 11
m = 12
n = 13
o = 14
p = 15
q = 16
r = 17
s = 18
t = 19
u = 20
v = 21
w = 22
x = 23
y = 24
z = 25
A = 26
B = 27
C = 28
D = 29
E = 30
F = 31
G = 32
H = 33
I = 34
J = 35
K = 36
L = 37
M = 38
N = 39
O = 40
P = 41
Q = 42
R = 43
S = 44
T = 45
U = 46
V = 47
W = 48
X = 49
Y = 50
Z = 51
0 = 52
1 = 53
2 = 54
3 = 55
4 = 56
5 = 57
6 = 58
7 = 59
8 = 60
9 = 61
  = 62
, = 63
; = 64
. = 65
_ = 66
# = 67
* = 68
" = 69
- = 70
+ = 71
*/
//validacao_de_caracteres(mensagem)
//var chave = prompt("Escreva uma chave para criptografar a mensagem:")
