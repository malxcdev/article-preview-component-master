let containerSocial = document.querySelector('#container-social');
let containerAvatar = document.querySelector('#container-social');

let btnSocial = document.querySelector('#btn-social');
let btnAvatar = document.querySelector('#btn-avatar');


btnAvatar.addEventListener('click', () => {
    containerAvatar.classList.toggle('hidden');
    containerSocial.classList.remove('hidden');
});