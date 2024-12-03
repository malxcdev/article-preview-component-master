let containerSocial = document.querySelector('#container-social');
let containerAvatar = document.querySelector('#container-avatar');

let btnSocial = document.querySelector('#btn-social');
let btnAvatar = document.querySelector('#btn-avatar');


btnAvatar.addEventListener('click', () => {
    containerAvatar.classList.add('hidden');
    containerSocial.classList.remove('hidden');
});

btnAvatar.addEventListener('mouseover', () => {
    containerSocial.classList.remove('md:hidden');
});