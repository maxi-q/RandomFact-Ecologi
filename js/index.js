function httpPOST( Button)
{
    url = '1111';
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({ "userName": userName.value, 
                                "Button": Button.value
                            });
    xhr.send(data);
}
function httpGET(url)
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    setRequestHeader("Content-Type", "application/json");

    xmlHttp.send( null );

    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) return xmlHttp.responseText;
    else return null;
}