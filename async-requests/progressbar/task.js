document.getElementById('form').addEventListener('submit', (el) => {
    el.preventDefault()

    const xhr = new XMLHttpRequest()

    xhr.upload.onprogress = function(event) {
        let aa = event.loaded;
        let bb = event.total;
        const progress = document.getElementById( 'progress' );
        progress.value = aa / bb;
    };
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    const formData = new FormData(document.getElementById('form'));
    xhr.send(formData);
});  