window.onload = function() {
    disable();
}

function disable() {
    BTdisabled.getCLSButtons().forEach(el => {
        document.getElementById(el).disabled = true;
    });
    BTdisabled.getOPNEButtons().forEach(el => {
        document.getElementById(el).disabled = false;
    });

    console.log(BTdisabled.Closebuttons);
}