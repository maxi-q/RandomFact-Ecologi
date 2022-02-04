listic = ["./paper.html", "./energy.html",
"./animals.html","./area.html","./factories.html",
"./ffish.html","./tree.html","./sea.html"]

document.addEventListener('click', function(event){
    element = event.target;
    if (element.classList.contains("mainBT")){
        window.open(element.id);
    }
    else if (element.classList.contains("SuperBT")){
        window.open(shuffle(listic));
    }
})

function shuffle(array) { 
    return array[Math.floor(Math.random() * array.length)];
}