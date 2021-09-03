class Perceptron{
    constructor(inputs, weights) {
        this.inputs = inputs;
        this.weights = weights;
    }
    decide(treshold){
        let sum = 0;
        for(let i = 0; i < this.inputs.length; i++){
            sum += this.inputs[i] * this.weights[i];
        }
        return sum > treshold ? 1 : 0;
    }
}

export default Perceptron;