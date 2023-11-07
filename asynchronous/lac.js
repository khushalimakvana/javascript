// Javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
{
    // setTimeout(function, milliseconds);

    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed
}
// The setTimeout() method returns an intervalID, which is a positive integer.

// Display a Text Once After 3 Second
{
    // function greet(){
    //     console.log('hello world');
    // }
    // setTimeout(greet,3000);
}

// program to display a text using setTimeout method
{
    // function greet(){
    //     console.log('hello world');
    // }
    // let intervalID = setTimeout(greet,3000);
    // console.log('id:'+ intervalID);
}

// display time every 3 second

{
    function showtime(){
        let datetime= new Date();

        let time=datetime.toLocaleTimeString();

        console .log(time)

        setTimeout(showtime,3000);
    }
    showtime();
}



