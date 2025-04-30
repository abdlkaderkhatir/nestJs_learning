import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

// nest g service coffees --no-spec
// the command above will create a service and a spec file for the service

@Injectable()
export class CoffeesService {
    // private readonly coffees : Coffee[] = [];
    private readonly coffees: Coffee[] = [
        {
            id: 1,
            name: 'Arabica',
            brand: 'Starbucks',
            flavors: ['chocolate', 'vanilla'],
        },
        {
            id: 2,
            name: 'Robusta',
            brand: 'Nescafe',
            flavors: ['caramel', 'hazelnut'],
        },
        {
            id: 3,
            name: 'Liberica',
            brand: 'Lavazza',
            flavors: ['cinnamon', 'nutmeg'],
        },
        {
            id: 4,
            name: 'Excelsa',
            brand: 'Illy',
            flavors: ['pepper', 'clove'],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find((coffee) => coffee.id === +id);
        // return this.coffees.find((coffee) => coffee.id === parseInt(id, 10));
    }

    create(coffee: any) {
        coffee.id = Math.floor(Math.random() * 10000) + 1;
        this.coffees.push(coffee);
        return coffee;
    }

    update(id: string , coffee: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            Object.assign(existingCoffee, coffee); // update the existing coffee with the new data
            return existingCoffee;
        }
        return null; // or throw an error
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
        if (coffeeIndex > -1) {
            return this.coffees.splice(coffeeIndex, 1); // remove the coffee from the array
        }
        return null; // or throw an error
    }
}
