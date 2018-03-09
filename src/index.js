class SmartCalculator {
    constructor(initialValue) {
        this.result = "" + initialValue;
        this.numberForPow = [];
        this.prePowOperation = "+";
        this.unPrePowOperation = "-";
        this.prePowNumber = initialValue;

    }

    forPowFunction() {
        if (this.numberForPow.length != 0) {
            while (this.numberForPow.length != 1) {

                this.numberForPow[this.numberForPow.length - 2] = Math.pow(this.numberForPow[this.numberForPow.length - 2], this.numberForPow.pop())

            }
            this.result += `${this.unPrePowOperation} ${this.prePowNumber} ${this.prePowOperation}  Math.pow(${this.prePowNumber}, ${this.numberForPow.pop()})`;
        }
    }

    add(number) {
        this.forPowFunction();

        this.result += `+${number}`;
        this.prePowNumber = number;
        this.prePowOperation = "+";
        this.unPrePowOperation = "-";
        return this;
    }

    subtract(number) {
        this.forPowFunction();
        this.result += `-${number}`;
        this.prePowNumber = number;
        this.prePowOperation = "-";
        this.unPrePowOperation = "+";
        return this;
    }

    multiply(number) {
        this.forPowFunction();

        this.result += `*${number}`;
        this.prePowNumber = number;
        this.prePowOperation = "*";
        this.unPrePowOperation = "/";
        return this;
    }

    devide(number) {
        this.forPowFunction();

        this.result += `/${number}`;
        this.prePowNumber = number;
        this.prePowOperation = "/";
        this.unPrePowOperation = "*";

        return this;
    }

    pow(number) {
        this.numberForPow.push(number);
        return this;
    }
    toString() {
        this.forPowFunction();
        return eval(this.result);
    }


}


module.exports = SmartCalculator;