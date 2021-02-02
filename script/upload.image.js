let littleImage = document.getElementById('img-preview');
const buttonUpload = document.getElementById('img-uploader');
const littleImageVisible = document.querySelector('.edit-img');
const deleteButton = document.getElementById('delete-img');
const canvasWriter = document.getElementById('preview-area')
let url = undefined
let imageExists = false

buttonUpload.addEventListener('change',(data) =>{  
    const image = data.target.files[0];

    if(!image){
        callingAlert(1,'¡Ops!, no encontre la foto.')
        littleImageVisible.style.setProperty('visibility', 'hidden');
        imageExists = false
        return;
    }

    /* let name = data.target.files[0].name */
    url = URL.createObjectURL(image);

    littleImage.src = url
    callingAlert(0,'¡Empecemos!')
    imageExists = true
    littleImageVisible.style.setProperty('visibility', 'visible');

})

editAreaSize.addEventListener('click', ()=>{

    var radVal = editAreaSize.rads.value;
    if(!url || imageExists == false){
        callingAlert(1,'Mejor sube una foto primero.')
        for(let i =0 ;i< editAreaSize.length;i++){
            editAreaSize[i].checked = false;
        }
    }
    else{
        switch (radVal){
            case '23x50':{
                loadBigImage(url, 23, 50 )
                break
            }
            case '35x40':{
                loadBigImage(url, 35, 50 )
                break
            }
            case '40x70':{
                loadBigImage(url, 40, 70 )
                break
            }
            case '50x70':{
                loadBigImage(url, 50, 70 )
                break
            }
        }
    }
    

})

function loadBigImage(url, widthSize, heightSize ) {
    
    let heightEditArea = ((window.screen.height*0.6)/70)*heightSize;
    let widthEditArea = (heightEditArea/heightSize)*widthSize
    widthEditArea= Math.trunc(widthEditArea)

    canvasWriter.innerHTML = `<canvas id="portrait-img" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>`;

    let bigImage = document.getElementById('portrait-img');
    let ctx = bigImage.getContext('2d');
    
    var image = new Image();
    
    image.onload = function() {
        // (image,  pos_x_image,        pos_y_image,            width_image,    heigth_image, 
        //          pos_x_to_start_draw, pos_y_to_start_draw,   width_draw,     height_draw)
        
        let height = littleImage.naturalHeight
        let width  = (height/heightSize)*widthSize;
        let center = (littleImage.naturalWidth-width)/2

        ctx.drawImage(image,center,0,width,height,0,0,widthEditArea,heightEditArea)
    }
    image.src = url;
}

deleteButton.addEventListener('click', ()=>{
    imageExists = false
    littleImageVisible.style.setProperty('visibility', 'hidden');
})

