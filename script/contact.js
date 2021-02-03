const contact = document.getElementById('contact')
let messaje = undefined

contact.addEventListener('click', ()=>{
    if(radVal !== undefined){
        messaje = '¡Hola!,necesito más informacion sobre este cuadro ' + radVal
        window.open('https://wa.me/573137673755?text=' + messaje)
    }
    else{
        messaje = '¡Hola!, necesito una asesoria.'
        window.open('https://wa.me/573137673755?text=' + messaje)
    }
})