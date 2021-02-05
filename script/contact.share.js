const contact = document.getElementById('contact')
let messaje = undefined
let turn = true
let actual = window.location.href
let includeShare = true
actual.includes('design') ? includeShare = false : includeShare = true
includeShare ? contact.style.setProperty('right','5%') : 

console.log(includeShare)
contact.addEventListener('click', ()=>{
    if(includeShare){
        if (turn) {
            window.open('https://wa.me/573024627133?text=¡Hola!, necesito más informacion.')
        } else {
            window.open('https://www.instagram.com/tendenciasdisearte/')
        }
    }
    else if (turn) {
        if(radVal !== undefined){
            messaje = '¡Hola!,necesito más informacion sobre este cuadro ' + radVal
            window.open('https://wa.me/573024627133?text=' + messaje)
        }
        else{
            messaje = '¡Hola!, necesito una asesoria.'
            window.open('https://wa.me/573024627133?text=' + messaje)
        }
    } else {
        window.open('https://t.me/')
    }
})

setInterval(()=>{
    if(includeShare){
        if(turn){
            contact.innerHTML = '<img class="contact__icon" src="svg/instagram.svg" alt="contactInstagram" srcset="">'
            turn = false
        }
        else{
            contact.innerHTML = '<img class="contact__icon" src="svg/wp.svg" alt="contactWhatsapp" srcset="">'
            turn = true
        }
    }
    else{
        if(turn){
            contact.innerHTML = '<img class="contact__icon" src="svg/telegram.svg" alt="contactTelegram" srcset="">'
            turn = false
        }
        else{
            contact.innerHTML = '<img class="contact__icon" src="svg/wp.svg" alt="contactWhatsapp" srcset="">'
            turn = true
        }
    }

},5000);

