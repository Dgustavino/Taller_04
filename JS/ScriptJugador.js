

function loadDoc()
{
    let xhttp = new XMLHttpRequest();

    document.getElementById("info").innerHTML = this.responseText
    xhttp.open("POST", "/JS/JsonFolder/archivo.txt", true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhttp.send()
}

