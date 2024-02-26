let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling; // Corregí un error tipográfico en nextElemetSibling

        if (menu.clientHeight === 0) { // Corregí un error tipográfico en clientHeight
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});
