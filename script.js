
// Script para abrir o link do WhatsApp ao clicar no botão
document.getElementById("whatsappButton").addEventListener("click", function() {
    window.open("https://api.whatsapp.com/send?phone=seunumerodetelefone", "_blank");
});
