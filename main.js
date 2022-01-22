Webcam.set({
    width: 350,
    height: 275,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById('camera');
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}
