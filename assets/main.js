const lista = ["Pane", "Latte","Zucchero","Acqua"];

const ul = document.querySelector("ul");
let i = 0;
while(i < lista.length){
     
    i++;

    ul.innerHTML +=`<li>${lista[i]}</li>`;
}


    
