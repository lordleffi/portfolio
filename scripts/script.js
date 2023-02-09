
let contact = document.getElementsByClassName("contactimg");
let urls = ['https://facebook.com', 'https://linkedin.com', 'https://whatsapp.com'];
for (let i = 0; i < contact.length; i++ ) {
    contact[i].addEventListener("click", function() {
        window.open(urls[i], '_blank');
    })
}





