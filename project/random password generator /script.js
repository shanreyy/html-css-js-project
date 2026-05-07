const password = document.getElementById('password');
const button = document.getElementById('generate');

button.addEventListener('click', () => {

    const passwordchar = "abbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const maxlength = 20;
    let generatedpassword = ""; 

    for(let i = 0; i < maxlength; i++){
        const randompassword = Math.floor(Math.random() * passwordchar.length);
        const randomchar = passwordchar[randompassword]
        generatedpassword += randomchar;
    }
    password.value = generatedpassword;
});
