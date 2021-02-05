const newAlert = document.getElementById('alert')

function callingAlert(icon = 0, message = 'Something is wrong' ){

    const routeSvgAlert = ['check.svg', 'warning.svg', 'error.svg']

    switch (icon) {
        case 0:
            newAlert.style.setProperty('background-color', 'var(--color-card)')
            break
        case 1:
            newAlert.style.setProperty('background-color', 'var(--color-card-alt)')
            break
        case 2: 
            newAlert.style.setProperty('background-color', '#ff0251')
            break
    }

    newAlert.innerHTML = `<img class="alert__icon"  src="svg/${routeSvgAlert[icon]}" alt="Warning" srcset=""> <p class="alert__message">${message}</p>`
    newAlert.style.setProperty('animation', 'rebote .4s ease forwards')
    newAlert.style.setProperty('visibility', 'visible')

    setTimeout(()=>{ goodByeAlert()}, 4000)
}

function goodByeAlert(){
    newAlert.style.setProperty('visibility', 'hidden')
    newAlert.style.setProperty('animation', 'unset')
}

newAlert.addEventListener('click', ()=>{
    goodByeAlert()
})

/* visibility: visible;
    animation: rebote .4s ease forwards; */