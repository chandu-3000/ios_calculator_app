
class Calculator{
    constructor(){
        this.display = document.getElementById('result');
        this.display.textContent = '0'
        this.clearResult();
        this.startup = true;
        this.positiveSign = true;
    }

    clearResult(){
        this.display.textContent = '0';
        this.startup = true;
    }

    appendToResult(e){
        if(this.startup){
            this.startup = false;
            this.display.textContent = e;
        }
        else{
            this.display.textContent += e;
        }
        console.log("textContent has", this.display.textContent)
    }

    changeSign(){
        if(this.positiveSign){
            this.positiveSign = false;
            this.display.textContent = '-' + this.display.textContent;
        }
        else{
            this.display.textContent = this.display.textContent.slice(1);
            this.positiveSign = true;
        }
    }
    calculateResult(){
        try{
            this.display.textContent = eval(this.display.textContent);
        }
        catch(err){
            console.log("err in calculating", err);
            this.clearResult();
        }
    }
}

c = new Calculator();


document.querySelectorAll('.equal-button').forEach(button => {
    button.addEventListener('click',() =>{
        c.calculateResult();
    })
});
