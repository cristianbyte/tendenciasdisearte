let littleImage = document.getElementById('img-preview');
const buttonUpload = document.getElementById('img-uploader');
const littleImageVisible = document.querySelector('.edit-img');
const deleteButton = document.getElementById('delete-img');
const canvasWriter = document.getElementById('preview-area')
var radVal = undefined
let url = undefined
let imageExists = false
let sizeOfCanvas = .65

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

    radVal = editAreaSize.rads.value;
    if(!url || imageExists == false){
        callingAlert(1,'Mejor sube una foto primero.')
        for(let i =0 ;i< editAreaSize.length;i++){
            editAreaSize[i].checked = false;
        }
    }

    else{
        switch (radVal){
            case '23x50':{
                loadBigImage(url, 23, 50, 'one')
                break
            }
            case '35x40':{
                loadBigImage(url, 35, 40, 'one')
                break
            }
            case '40x70':{
                loadBigImage(url, 40, 70, 'one')
                break
            }
            case '50x70':{
                loadBigImage(url, 50, 70, 'one')
                break
            }
            case '100x60':{
                loadBigImage(url, 100, 60, 'one')
                break
            }

            case '23x50x3':{
                loadBigImage(url, 23, 50, 'three')
                break
            }
            case '35x40x3':{
                loadBigImage(url, 35, 40, 'three')
                break
            }
            case '40x70x3':{
                loadBigImage(url, 40, 70, 'three')
                break
            }

            case '14x30x5':{
                loadBigImage(url, 14, 30, 'five', 10, 10)
                break
            }
            case '20x30x5':{
                loadBigImage(url, 20, 30, 'five', 20, 10)
                break
            }
            case '24x30x5':{
                loadBigImage(url, 24, 30, 'five', 20, 20)
                break
            }
        }
    }
    

})

function loadBigImage(url, widthSize, heightSize, numOfPortraits, firstIncrease, secondIncrease) {

    let heightEditArea = ((window.screen.width*sizeOfCanvas)/70)*heightSize;
    heightEditArea= Math.trunc(heightEditArea)

    let widthEditArea = (heightEditArea/heightSize)*widthSize
    widthEditArea= Math.trunc(widthEditArea)

    if (numOfPortraits === 'one'){

            canvasWriter.innerHTML = `<canvas id="portrait-img" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>`

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

    else if(numOfPortraits === 'three'){

        canvasWriter.innerHTML = `<canvas id="portrait-img1" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img2" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img3" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>`

        let bigImage1 = document.getElementById('portrait-img1');
        let bigImage2 = document.getElementById('portrait-img2');
        let bigImage3 = document.getElementById('portrait-img3');

        let ctx1 = bigImage1.getContext('2d');
        let ctx2 = bigImage2.getContext('2d');
        let ctx3 = bigImage3.getContext('2d');
        
        var image = new Image();
        
        image.onload = function() {
            // (image,  pos_x_image,        pos_y_image,            width_image,    heigth_image, 
            //          pos_x_to_start_draw, pos_y_to_start_draw,   width_draw,     height_draw)
            
            let height = littleImage.naturalHeight
            let width  = (height/heightSize)*widthSize;

            ctx1.drawImage(image,   0,      0,  width,  height, 0,  0,  widthEditArea,  heightEditArea)
            ctx2.drawImage(image,   width,  0,  width,  height, 0,  0,  widthEditArea,  heightEditArea)
            ctx3.drawImage(image,   width*2,0,  width,  height, 0,  0,  widthEditArea,  heightEditArea)
        }

        image.src = url;
    }

    else if(numOfPortraits === 'five'){

        let heightEditArea1 = ((window.screen.height*sizeOfCanvas)/70)*(heightSize+firstIncrease)
        let heightEditArea2 = ((window.screen.height*sizeOfCanvas)/70)*(heightSize+firstIncrease+secondIncrease)
        heightEditArea1= Math.trunc(heightEditArea1)
        heightEditArea2= Math.trunc(heightEditArea2)

        let widthEditArea = (heightEditArea/heightSize)*widthSize
        widthEditArea= Math.trunc(widthEditArea)

        canvasWriter.innerHTML = `<canvas id="portrait-img1" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img2" width="${widthEditArea}px" height="${heightEditArea1}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img3" width="${widthEditArea}px" height="${heightEditArea2}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img4" width="${widthEditArea}px" height="${heightEditArea1}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>
                                <canvas id="portrait-img5" width="${widthEditArea}px" height="${heightEditArea}px" > ¡Ops!, your browser does not support the canvas tag.</canvas>`

        let bigImage1 = document.getElementById('portrait-img1');
        let bigImage2 = document.getElementById('portrait-img2');
        let bigImage3 = document.getElementById('portrait-img3');
        let bigImage4 = document.getElementById('portrait-img4');
        let bigImage5 = document.getElementById('portrait-img5');

        let ctx1 = bigImage1.getContext('2d');
        let ctx2 = bigImage2.getContext('2d');
        let ctx3 = bigImage3.getContext('2d');
        let ctx4 = bigImage4.getContext('2d');
        let ctx5 = bigImage5.getContext('2d');
        
        var image = new Image();
        
        image.onload = function() {
            // (image,  pos_x_image,        pos_y_image,            width_image,    heigth_image, 
            //          pos_x_to_start_draw, pos_y_to_start_draw,   width_draw,     height_draw)
            
            let height = littleImage.naturalHeight
            let width  = (height/(heightSize+firstIncrease+secondIncrease))*widthSize
            let center = (littleImage.naturalWidth-width)/2

            ctx1.drawImage(image,   center-width*2,    (height/(heightSize+firstIncrease+secondIncrease))*((firstIncrease+secondIncrease)/2),  width,  height, 0,  0,  widthEditArea,  heightEditArea2)
            ctx2.drawImage(image,   center-width,      (height/(heightSize+firstIncrease+secondIncrease))*(secondIncrease/2),  width,  height, 0,  0,  widthEditArea,  heightEditArea2)
            ctx3.drawImage(image,   center,            0,  width,  height, 0,  0,  widthEditArea,  heightEditArea2)
            ctx4.drawImage(image,   center+width,      (height/(heightSize+firstIncrease+secondIncrease))*(secondIncrease/2),  width,  height, 0,  0,  widthEditArea,  heightEditArea2)
            ctx5.drawImage(image,   center+width*2,    (height/(heightSize+firstIncrease+secondIncrease))*((firstIncrease+secondIncrease)/2),  width,  height, 0,  0,  widthEditArea,  heightEditArea2)
        }

        image.src = url;
    }


    

}

deleteButton.addEventListener('click', ()=>{
    imageExists = false
    littleImageVisible.style.setProperty('visibility', 'hidden');
})

