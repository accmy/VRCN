    
        fetch('https://api.jsonstorage.net/v1/json/86d7ad32-c033-4696-bec7-9ff2d538b5a0/f51d8278-752f-4def-92cd-6c4a0aa0a3e0')
            .then(response => response.text())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
