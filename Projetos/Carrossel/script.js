var balls = document.querySelector(".balls");
var quant = document.querySelectorAll(".slides .images");
var atual = 0;
var imagem = document.getElementById("first");
var next = document.getElementById("right");
var back = document.getElementById("left");

for (let i = 0; i < quant.length; i++) {
  var div = document.createElement("div");
  div.id = i;
  balls.appendChild(div);
}

document.getElementById("0").classList.add("firstImg");

var position = document.querySelectorAll(".balls div");

for (let i = 0; i < position.length; i++) {
  position[i].addEventListener("click", () => {
    atual = position[i].id;
    slide();
  });
}

back.addEventListener("click", () => {
  atual--;
  slide();
});

next.addEventListener("click", () => {
  atual++;
  slide();
});

function slide() {
  if (atual >= quant.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = quant.length -1;
  }
  document.querySelector(".firstImg").classList.remove("firstImg");
  imagem.style.marginLeft = -700 * atual + "px";
  document.getElementById(atual).classList.add("firstImg");
}
slide();

setInterval(() => {
    atual++
    slide()
}, 4000);
