const BTdisabled = {
    User: "Max",
    ButtonsDisabled: {
        animals: true,
        area: true,
        energy: true,
        factories: true,
        ffish: true,
        paper: true,
        sea: true,
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
    httpPOST(button);
}