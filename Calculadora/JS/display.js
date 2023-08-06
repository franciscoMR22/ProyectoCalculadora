//Step 3
class DisplayOp{
    constructor(displayOutputValue,displayInputValue){
        this.displayInputValue= displayInputValue;
        this.displayOutputValue= displayOutputValue;
        this.currentOpert=undefined;

        this.calculatorOperation= new CalculatorOperation(); //Instancia de archivo calculatorOperation.js
        this.inputValue="";
        this.outputValue="";
        this.operSymb={
            porcent: '%',
            split: '/',
            multiply: '*',
            subtract:'-',
            add: '+', 
        }
    }

//Step 6
    erase(){
        this.inputValue= this.inputValue.toString().slice(0,-1);
        this.printValues();
    }
    eraseAll(){
        this.inputValue='';
        this.outputValue='';
        this.currentOpert=undefined;
        this.printValues();
    }
    //Realiza las operaciones y el intercambio de impresión en el display
    opResult(type){
        this.currentOpert !== 'equal' && this.logicCalculator(); //Evalua si existe una operación que hacer
        this.currentOpert = type; //Actualiza el tipo de operación que se debe realizar 
        this.outputValue =this.inputValue || this.outputValue; // Evalua si hay uno o más operadores
        this.inputValue =''; //Actualiza a vacío el valor de entrada cuadno se relaiza una operación
        this.printValues();

    }
//Step 5
    insertNumber(number){
        if(number === '.' && this.inputValue.includes('.')) return
        this.inputValue= this.inputValue.toString() + number.toString(); //Variable-clase de botones
        this.printValues();
    }

    printValues(){
        this.displayInputValue.textContent = this.inputValue;
        this.displayOutputValue.textContent = `${this.outputValue} ${this.operSymb[this.currentOpert] || ''}`;
    }

    logicCalculator(){
        const outputValue= parseFloat(this.outputValue); /* parse() convierte el string a número*/
        const inputValue= parseFloat(this.inputValue);

        if(isNaN(inputValue) || isNaN(outputValue) ) return   /*Evalua si exisen valores o no */
        this.inputValue = this.calculatorOperation[this.currentOpert](outputValue,inputValue);
    }
}