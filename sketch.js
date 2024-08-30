let xBolinha = 360;
let yBolinha = 200;
let diametro = 40;
let raio = diametro/2;

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas (600, 400);
}

function draw() {
  background("purple");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete (xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}


function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x, y) {
  rect( x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ) {
      velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente () {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente (){
  if (xBolinha + raio > xRaqueteOponente + raqueteComprimento -10 ) {
      velocidadeXBolinha *= -1;
  }
}

function incluirPlacar () {
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0))
  rect(150,10,40,20)
    fill (255);
    text (meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(430,10,40,20)
  fill(255);
  text (pontosOponente, 450, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    }
  if (xBolinha < 20){
    pontosOponente += 1 ;
  }
}