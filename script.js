document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputText = document.getElementById('inputText').value;
    const qrContainer = document.getElementById('qr-container');
    
    if(inputText.trim() !== "") {
        qrContainer.innerHTML = '';  // Clear previous QR code
        QRCode.toCanvas(qrContainer, inputText, function(error) {
            if (error) {
                console.error(error);
            }
        });
    }
});
