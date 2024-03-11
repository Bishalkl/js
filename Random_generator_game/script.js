// const display = document.getElementById("display");
// const valueInput = document.getElementById("input");
const btn = document.getElementById("btn");

// it include whole mechanism
class randomGenerator{

    // constructor
    constructor(update, input){
        this.update= document.getElementById(update);
        this.input = document.getElementById(input);
        this.min = 1;
        this.max = 10;
        this.count = 0;
    }

    //generate method
    randomNumber(){
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;   
    }


    // onclickstate
    buttonClick(){
        // declare it to use for condition
        let number = this.randomNumber();
        let inputValue = parseInt(this.input.value)
        
        // condition first for get input
        if(!isNaN(inputValue) && Number.isInteger(inputValue)){
            // condition second for get value 
            if(inputValue === number){
                this.count++;
                this.update.textContent = `Congratulations! You have guessed it  ${this.count} in count.`;
            } else if (inputValue > number) {
                this.update.textContent = "Sorry, Try again, it is bigger";
            } else {
                this.update.textContent = "Sorry, Try again, it is smaller";
            }

       } else{
            this.update.textContent = "Please enter a valid integer value";
       }
        
    }

}

// testing
const generateNew = new randomGenerator("display", "input");
btn.onclick = function(){
    generateNew.buttonClick();
}