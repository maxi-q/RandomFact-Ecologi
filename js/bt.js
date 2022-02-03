var B1 = document.getElementById('1');
var B2 = document.getElementById('2');
var B3 = document.getElementById('3');
var B4 = document.getElementById('4');
var B5 = document.getElementById('5');
var B6 = document.getElementById('6');
var B7 = document.getElementById('7');
var B8 = document.getElementById('8');
var B9 = document.getElementById('9');

const buttons = [B1,B2,B3,
                B4,B5,B6,
                B7,B8,B9]

listic = ["./tree.html", "./paper.html", "./energy.html",
"./animals.html","./area.html","./factories.html",
"./ffish.html","./toxiRain.html","./sea.html"]

document.addEventListener('click', function(event){
    element = event.target;
    if (element.classList.contains("mainBT")){
        window.open(shuffle(listic));
    }
})

function shuffle(array) { 
    return array[Math.floor(Math.random() * array.length)];
}