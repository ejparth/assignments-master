function Currentime() {
    // Create a new Date object
    var currentDate = new Date();

    // Get the current time components
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Display the current time
    console.log('Current Time: ' + hours + ':' + minutes + ':' + seconds);

 
    //calling setTimeout to clear the screen and for 1sec wait
    setTimeout(clearConsole, 1000);

}

function clearConsole() {
 console.clear(); 
}

// Set interval to execute logMessage function every 1000 milliseconds (1 second)
var intervalId = setInterval(Currentime, 1000);