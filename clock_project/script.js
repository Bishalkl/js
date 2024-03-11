// create a class to get all the package 
class DateTime{

    // constructor
    constructor(updateElementID){
        this.updateElementID = document.getElementById(updateElementID);
        this.StartDate();
    }

    // method to update a date
    updateDate(){
        // let date object
        let date = new Date();

        // getting date and padding string 
        let hour = date.getHours().toString().padStart(2, '0');
        let minuite = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds().toString().padStart(2, '0');

        // update into text document
        this.updateElementID.textContent = `${hour}:${minuite}:${second}`;
    }

    //start
    StartDate(){
        
        this.intervalId = setInterval(() => {
            this.updateDate();
        }, 1000);
    }

    //stop Date
    stopDate(){
        clearInterval(this.intervalId);
    }
    
}
const newDate = new DateTime('update');
