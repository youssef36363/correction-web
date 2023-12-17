

function envoyerFormulaire() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var comment = document.getElementById('comment').value;

    if (name === '' || surname === '' || email === '' || phone === '' || comment === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
    } else if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
    } else {
        alert('Formulaire envoyé avec succès!');
    }
}

function isValidEmail(email) {
    return email.includes('@');
}
