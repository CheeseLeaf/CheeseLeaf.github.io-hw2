function refreshPage() {
    location.reload();
}


var counter = document.getElementById("counter");


var startTime = Date.now();


setInterval(function() {
    // Calculate the elapsed time in seconds
    var elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

    // Update the counter text
    counter.textContent = "page not responding for : " + elapsedSeconds + " seconds";
}, 1000);