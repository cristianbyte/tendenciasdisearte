const imgPreview = document.getElementById('img-preview');
const input = document.getElementById('img-uploader');
const imgVisible = document.querySelector('.edit-img');
const deleteImg = document.getElementById('delete-img');
const portraitImg = document.getElementById('portrait-img');


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
    portraitImg.src = url;
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