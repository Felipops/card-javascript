
function product(nome,preco,descricao,imagem,disponivel,avaliacao,caracteristica,tags,desconto){
  this.nome = nome;
  this.preco = preco;
  this.descricao = descricao;
  this.imagem = imagem;
  this.disponivel = disponivel;
  this.avaliacao = avaliacao;
  this.caracteristica = caracteristica;
  this.tags = tags;
  this.desconto = desconto;

  this.aplicaDesconto = function(){
    if(this.desconto > 0){
      let Desconto = this.preco * (this.desconto / 100);
      this.preco -= Desconto;
    }

  };

}

let produto = new product("Iphone 11", 399.99, "Telefone de ultima geracao e com qualidade", "./imagens/iphone.jpg", true, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", " Eletronicos"], 10);
let produto2 = new product("Iphone 12", 499.99, "Telefone de ultima geracao e com qualidade", "./imagens/iphone.jpg", false, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", " Eletronicos"], 10);
let produto3 = new product("Iphone 13", 599.99, "Telefone de ultima geracao e com qualidade", "./imagens/iphone.jpg", true, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", "Eletronicos"], 15);


function createHtmlCard(product){
  let container = document.createElement("div");
  container.id = "container";
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let span = document.createElement("span");

  p3.classList.add("preco");

  container.appendChild(h1);
  container.appendChild(h2);
  container.appendChild(h3);
  container.appendChild(img);
  container.appendChild(p);
  container.appendChild(p2);
  container.appendChild(p3);
  container.appendChild(span);
  h1.appendChild(document.createTextNode(this.nome));
  h2.appendChild(document.createTextNode(this.descricao));
  h3.appendChild(document.createTextNode(this.disponivel ? "Disponivel" : "Indisponivel"));
  img.src = "./imagens/iphone.jpg";
 if(typeof this.tags !== 'number'){

 }
  p.appendChild(document.createTextNode(this.tags));
  p2.appendChild(document.createTextNode(this.caracteristica));
  this.aplicaDesconto();
  p3.appendChild(document.createTextNode(`R$ ${this.preco.toFixed(2)}`));
  if(this.desconto > 0){
    this.desconto = `  Desconto ${this.desconto}%`;
  }
  span.appendChild(document.createTextNode(this.desconto));

  document.body.appendChild(container);
 
}

// createHtmlCard(product);
createHtmlCard.call(produto);
createHtmlCard.call(produto2);
createHtmlCard.call(produto3);

// let arrayCards = []
// arrayCards.push (produto,produto2,produto3)

// console.log(arrayCards)

// function generateCardList(arrayCards){
//   arrayCards.forEach( card=> {
//         createHtmlCard(card)
//   });
// }

// generateCardList(arrayCards)
// localStorage.setItem('Produtos', JSON.stringify(arrayCards));
const container =document.querySelector('container')
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
function setTheme() {
const currentTheme = body.classList.contains('active') ? 'active' : 'inactive';
localStorage.setItem('theme', currentTheme);
}
function setTheme() {
  const currentTheme = container.classList.contains('active') ? 'active' : 'inactive';
  localStorage.setItem('theme', currentTheme);
  }

function loadTheme() {
const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'active') {
      body.classList.add('active');
      container.classList.add('active');
      toggle.classList.add('active');
          } else {
        body.classList.remove('active');
        container.classList.remove('active');
        toggle.classList.remove('active');
  }
}

  toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  container.classList.toggle('active');
  setTheme();
  }

    loadTheme();