const imgPreview = document.getElementById('img-preview');
const input = document.getElementById('img-uploader');

input.addEventListener('change',(data) =>{

    let reader = new FileReader();
    const image = data.target.files[0]

/*     if(!image){
        imgPreview.src = '';
        return;
    } */

    const url = URL.createObjectURL(image);
    imgPreview.src = url;

})