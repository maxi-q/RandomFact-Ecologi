listic = ["paper", "energy",
"animals","area","factories",
"ffish","tree","sea"]

document.addEventListener('click', function(event){
    element = event.target;
    if (element.classList.contains("mainBT")){
        window.open(element.id + ".html");
    }
    else if (element.classList.contains("SuperBT")){
        bt = shuffle(listic);
        OpenButton(bt);
        disable();
        window.open("./" + bt + ".html");
    }
})

function shuffle(array) { 
    return array[Math.floor(Math.random() * array.length)];
}