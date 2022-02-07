const BTdisabled = {
    User: "Max",
    Closebuttons:["energy",
    "animals","area","factories",
    "ffish","tree","sea","trash"],
    Openbuttons:["paper"],

    getCLSButtons: function(){
        return this.Closebuttons;},
    getOPNEButtons: function(){
        return this.Openbuttons;}
}

function OpenButton(button) {
   
    BTdisabled.Closebuttons.splice(0,1);
}