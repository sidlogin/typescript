class Dog
{
    age: number
    breed: string    
    
    constructor(age: number, breed: string) 
    {
        this.age = age;
        this.breed = string;
    }    
    
    getRelativeAge(): number
    {
        return this.age * 7
    }
}

let Luna = new Dog(2, 'Labrador')