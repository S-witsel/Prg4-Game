

export class NumberToArray{

    input
    output

    constructor(fullnumber){

        this.input = fullnumber
        this.output = []
        this.output = this.splitIntoArray(this.input)
    }

    oninitialize(){ 
        
    }
    
    splitIntoArray(num) {
        return Array.from(String(num), Number);
      }

}