class Dog extends Animal
{
    playsFetch: boolean
    
    constructor(age: number, breed: string, playsFetch: boolean)
    {
         super(age, breed) // call parent constructor
         this.playsFetch = playsFetch
    }    
    
    makeSound(): void {
        super.makeSound_('woof woof')
    }
    
    getAgeInHumanYears(): number {
        return this.age * 7    // super.age will throw error
    }
}

class Cat extends Animal
{
    constructor(age: number, breed: string)
    {
        super(age, breed)
    }
    
    makeSound(): void
    {
        super.makeSound_('meow meow')
    }
}