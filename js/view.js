window.onload = function() {
    disable();
}

function disable() {
    const values = Object.entries (BTdisabled.ButtonsDisabled)

    values.forEach(el => {
         document.getElementById(el[0]).disabled = el[1];
    });

    console.log(values);
}