const imgPreview = document.getElementById('img-preview');
const input = document.getElementById('img-uploader');
const imgVisible = document.querySelector('.edit-img');
const deleteImg = document.getElementById('delete-img');

input.addEventListener('change',(data) =>{  
    const image = data.target.files[0];
    if(!image){
        imgPreview.src = '';
        return;
    }

    let name = data.target.files[0].name
    const url = URL.createObjectURL(image);
    var width, height;

    imgPreview.src = url;
    activeCnavas(url)

    imgVisible.style.setProperty('visibility', 'visible');
})

imgPreview.onload = function() {
    width  = imgPreview.naturalWidth  || imgPreview.width;
    height = imgPreview.naturalHeight || imgPreview.height; 
    console.log(width,height)
}

deleteImg.addEventListener('click', ()=>{
    imgPreview.src = '';
    imgVisible.style.setProperty('visibility', 'hidden');
})

function activeCnavas(url) {
    let canvas = document.getElementById('portrait-img');

    let widthEditArea = (window.screen.width)*0.5
    let heightEditArea = widthEditArea/16*9;

    console.log(widthEditArea,heightEditArea)

    let ctx = canvas.getContext('2d');

    let image = new Image();

    image.onload = function() {
        ctx.drawImage(image, 400, 0, 200, image.naturalHeight,
            100,0, 200, image.naturalHeight)
        ctx.drawImage(image, 700, 0, 200, image.naturalHeight,
            400,0, 200, image.naturalHeight)
    }

    canvas.style.setProperty('width', widthEditArea + 'px')
    canvas.style.setProperty('height', heightEditArea + 'px')

    image.src = url;
    console.log(url)

}