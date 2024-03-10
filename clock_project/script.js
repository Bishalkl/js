const update = document.getElementById("update");
// function for update
function updateDate() {
    // creating object to get data value
    let date = new Date();

    let currenthour = date.getDate();
    let currentmin = date.getMinutes();
    let currentsecond = date.getSeconds();

    // formating the time value to add leading zero if necceray
    currenthour = currenthour < 10 ? "0" + currenthour : currenthour;
    currentmin = currentmin < 10 ? "0" + currentmin : currentmin; 
    currentsecond = currentsecond < 10 ? "0" + currentsecond : currentsecond;

    // display
    update.textContent= `${currenthour}:${currentmin}:${currentsecond}`;

}


setInterval(updateDate, 1000);

