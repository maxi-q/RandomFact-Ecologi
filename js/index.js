function httpPOST(url)
{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({ "userName": userName.value, 
                                "Buttons": {
                                    "animals": animals.value, 
                                    "area": area.value, 
                                    "energy": energy.value, 
                                    "factories": factories.value, 
                                    "ffish": ffish.value, 
                                    "paper": paper.value, 
                                    "sea": sea.value, 
                                    "trash": trash.value, 
                                    "tree": tree.value 
                                }
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