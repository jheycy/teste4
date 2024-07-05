let userName = prompt(" insira seu nome:");
let welcomeMessage = document.createElement('div');
if (userName) {
    welcomeMessage.textContent = "Bem-vindo, " + userName + "!";
} else {
    welcomeMessage.textContent = "Bem-vindo, visitante!";
}
welcomeMessage.style.marginTop = "20px";
welcomeMessage.style.fontSize = "24px";
welcomeMessage.style.color = "#333";
document.body.appendChild(welcomeMessage);


function toggleLight() {
    var light = document.getElementById("light");
    if (light.src.includes("lampada.desligada.gif")) {
        light.src = "lampada-ligada.gif";
    } else {
        light.src = "lampada.desligada.gif";
    }
}