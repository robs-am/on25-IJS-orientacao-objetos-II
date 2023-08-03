class Ingresso {
  preco = 70;

  mostrarPreco() {
    console.log(`o preço do ingresso é R$ ${this.preco}`);
  }
}

// const ingresso1 = new Ingresso();

// ingresso1.mostrarPreco(70);

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
  preco = 100;
}

const ingressoNormal1 = new IngressoNormal();
const ingressoVip1 = new IngressoVip();

ingressoNormal1.mostrarPreco();
ingressoVip1.mostrarPreco();
