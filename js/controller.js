const BTdisabled = {
    User: "Max",
    ButtonsDisabled: {
        animals: true,
        area: true,
        energy: true,
        factories: true,
        ffish: false,
        paper: true,
        sea: false,
        trash: true,
        tree: true
    },
    GetButtons:  function(){
        return ButtonsDisabled;
    }
}

function OpenButton(button) {
    if(button in BTdisabled.ButtonsDisabled){
        BTdisabled.ButtonsDisabled[button] = false;
    }
    
}