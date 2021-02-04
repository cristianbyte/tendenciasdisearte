const contact = document.getElementById('contact')
let messaje = undefined
let turn = true

contact.addEventListener('click', ()=>{
    if (turn) {
        if(radVal !== undefined){
            messaje = '¡Hola!,necesito más informacion sobre este cuadro ' + radVal
            window.open('https://wa.me/573137673755?text=' + messaje)
        }
        else{
            messaje = '¡Hola!, necesito una asesoria.'
            window.open('https://wa.me/573137673755?text=' + messaje)
        }
    } else {
        window.open('https://t.me/cristtianjj')
    }
})

setInterval(()=>{
    if(turn){
        contact.innerHTML = '<img class="contact__icon" src="svg/telegram.svg" alt="contactWhatsapp" srcset="">'
        turn = false
    }
    else{
        contact.innerHTML = '<img class="contact__icon" src="svg/wp.svg" alt="contactWhatsapp" srcset="">'
        turn = true
    }
},5000);

