    
        fetch('https://api.jsonstorage.net/v1/json/86d7ad32-c033-4696-bec7-9ff2d538b5a0/be18a790-391c-4f26-85be-2ba00c85d11f')
            .then(response => response.text())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
