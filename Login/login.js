document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const keepLoggedIn = document.getElementById('keep-logged-in').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Keep me logged in:', keepLoggedIn);
});