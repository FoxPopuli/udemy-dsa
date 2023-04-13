// Example class

class Student {
    constructor (name, age, year) {
        this.firstName = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
        this.age = age
        this.year = year
        
        const lastDigit = +this.year.toString()[this.year.toString().length - 1]

        switch (lastDigit) {
            case 1:
                this.yearSuffix = 'st';
                break;
            case 2:
                this.yearSuffix = 'nd';
                break;
            case 3:
                this.yearSuffix = 'rd';
                break;
            default:
                this.yearSuffix = 'th';
                break;
        }


    }

    // Instance methods are attached to instances of a class
    // they are called on instances

    introduceSelf() {
        return `Hi! My name is ${this.firstName}, I am ${this.age} years old and I'm in ${this.year}${this.yearSuffix} year. Nice to meet you!`
    }


    // Static methods are attached to the class, not instances of the class
    // Called on the class, not instances
    // Usually used for utility functions
    // Seems to mostly take instances of the class as arguments

    static enrollStudents(...students) {
        // Send email here or something
        console.log(students)   // Placeholder
    }


}

const larry = new Student('Larry Greene', 12, 3)
console.log(larry.introduceSelf());