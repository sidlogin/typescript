class Animal
{
    age: number
    breed: string    
    
    constructor(age: number, breed: string)
    { 
        this.age = age
        this.breed = breed
    }    
    
    makeSound_(sound: string): void
    {
        console.log(sound)
        console.log(sound)
        console.log(sound)
    }
}