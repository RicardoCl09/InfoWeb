const $form = document.querySelector('#form');
const $botonMailto = document.querySelector('#mail');
$form.addEventListener('submit', handleSubmit)



function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    // console.log(form.get('nombre'));
    $botonMailto.setAttribute('href', `mailto:raclunt@hotmail.com?subject=${form.get('interes')} - Nombre: ${form.get('nombre')} - Telefono: ${form.get('telefono')}&body=${form.get('mensaje')}`);
    $botonMailto.click();
}