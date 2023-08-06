//Step 1
class CalculatorOperation{
    add(firstNum, nNumber){
        return firstNum + nNumber;
    }
    subtract(firstNum, nNumber){
        return firstNum - nNumber;
    }
    split(firstNum, nNumber){
        return firstNum / nNumber;
    }
    multiply(firstNum, nNumber){
        return firstNum * nNumber;
    }
    porcent(firstNum, nNumber){
        return ((firstNum/100)*nNumber)
    }
}