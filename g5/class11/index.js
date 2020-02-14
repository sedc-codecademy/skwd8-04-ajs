
function Bus(number, seats, color)
{
    this.number = number;
    this.seats = seats;
    this.color = color;
}

let b1 = new Bus(5, 50, 'red');

function canDrive(b)
{
    b.canDrive = true;
}

b1 = canDrive(b);

//OOP CLASSES

class Bus
{
    //private busname;

    constructor(number, seats, color)
    {
        this.number = number;
        this.seats = seats;
        this.color = color;
        this.canDrive = false;
    }   

    canDrive(value)
    {
        this.canDrive = value;
    }

    getColor()
    {
        return this.color;
    }

    get numOfSeats() {
        return this.seats
    }

    set numOfSeats(number)
    {
        if(number > 10)
        this.number = number;
        else
        return false;
    }

    static getNewBus(number, seats, color)
    {
        return new Bus(number, seats, color);
    }

    static getCanDrive()
    {
        let bus = new Bus();
        return bus.canDrive;
    }
}

let b2 = new Bus(10, 60, 'Yellow');
let b3 = Bus.getNewBus(15, 55, 'Red');

if(Bus.canDrive)
{
    //do something
}

//Inheritance

class MiniBus extends Bus
{
    constructor(number, seats, color)
    {
        super(number, seats, color);
        this.miniBus = true;
    }
}

let mb1 = new MiniBus();

class A
{ 
    constructor(){
        this.name;
    } 
}

class B extends A
{
    constructor()
    {
        super();
        this.sound;
    }
}

class C extends B
{
    constructor()
    {
        super();
        this.walk;
    }

    calc(a, b)
    {
        C.makeCalc(a, b);
        return a+b;
    }

    static makeCalc(a, b)
    {
        let c1 = new C();
        return c1.calc(a+b);
        return a+b;
    }
}

class D
{
    constructor()
    {
        this.A = new A();
        this.B = new B();
    }
}

class Animals
{
    constructor(name, sound)
    {
        this.name = name || undefined;
        this.sound = sound || undefined;
    }

    makeSound(sound)
    {
        this.sound = sound;
    }

    setName(name)
    {
        this.name = name;
    }

    get animalName()
    {
        return this.name;
    }
}

class Walk extends Animals
{
    constructor(name, sound, hair)
    {
        super(name, sound);
        this.walk = true;
        this.legs = 4;
        this.hair = hair;
    }

    setLegs(number)
    {
        this.legs = number;
    }

    getWalk()
    {
        return this.walk;
    }

    getHasHair()
    {
        return this.hair;
    }

    static hasHair()
    {
        return  new Walk().hair;
    }
}

class Human extends Walk
{
    constructor(name, sound, hair)
    {
        super(name, sound, hair);
        this.eyes = 2;
        this.hands = 2;
        this.legs = 2;
    }
}

let h1 = new Human();