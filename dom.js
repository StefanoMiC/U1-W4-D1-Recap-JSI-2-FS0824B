// _________________________________________ DOM _________________________________________

// 1) SELEZIONE (getElement(s)by...., querySelector(), querySelectorAll())
// 2) MANIPOLAZIONE (innerText, innerHTML, style, classList, ecc...)
// 3) CREARE (document.createElement())
// 4) INTERAZIONE (eventi)

console.dir(document);
// 1) SELEZIONE
// const img = document.getElementsByTagName("img")[0];
const img = document.querySelector("img");
console.dir(img);

// 2) MANIPOLAZIONE
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/640px-DOM-model.svg.png";
img.style.width = "30%";

setTimeout(() => {
  img.classList.add("dom-image");
}, 1500);

setTimeout(() => {
  img.classList.add("dom-image-border-2");
}, 3000);

// 3) INTERAZIONE
img.onclick = function () {
  img.classList.remove("dom-image-border-2");
};

// setTimeout(() => {
//   setInterval(() => {
//     img.classList.toggle("dom-image-border-2");
//   }, 1000);
// }, 6000);

// poter utilizzare i selettori anche avanzati per selezionare più precisamente qualcosa senza ricorrere alla manipolazione di una lista di elementi
const ul = document.querySelector("main ul:nth-of-type(2)");
console.log(ul);

const footerP = document.querySelector("footer p");
footerP.innerText += " " + new Date().getFullYear();

const input = document.getElementById("titleModifier");

input.onkeyup = function (event) {
  console.log(event);
  const h1 = document.querySelector("h1");
  h1.innerText = input.value;

  if (event.key === "Enter") {
    // const newPContainer = document.getElementById("newPContainer");
    const main = document.querySelector("main");
    const newP = document.createElement("p");
    newP.innerText = input.value;
    newP.className = "dom-image";
    // document.body.appendChild(newP);
    // newPContainer.appendChild(newP);
    const ulToInsertBefore = document.querySelector("main ul");
    main.insertBefore(newP, ulToInsertBefore);
  }
};

input.oninput = function (event) {
  console.log(event);
  //   if (event.key === "Enter") {
  //     const h1 = document.querySelector("h1");
  //     h1.innerText = input.value;
  //   }

  //   const h1 = document.querySelector("h1");
  //   h1.innerText = input.value;
};
