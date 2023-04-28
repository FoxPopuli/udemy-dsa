const myFactory = () => {
    console.log('Factory:')
    
    let myProp = 0;

    const increment = () => ++myProp;
    const getProp = () => myProp;

    return {myProp, increment, getProp} 
}


class myClass {
    constructor () {
        console.log('Class:')
        this.myProp = 0;
    }

    increment() {
        return this.myProp++;
    }

    getProp() {
        return this.myProp;
    }


}

// const myObj = myFactory();
const myObj = new myClass();

myObj.increment()
console.log('Method call: ' + myObj.getProp())
console.log('Direct access: ' + myObj.myProp)