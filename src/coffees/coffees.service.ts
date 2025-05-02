import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// nest g service coffees --no-spec
// the command above will create a service and a spec file for the service

@Injectable()
export class CoffeesService {
    
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeesRepository: Repository<Coffee>,
    ) {}


    // private readonly coffees : Coffee[] = [];
    // private readonly coffees: Coffee[] = [
    //     {
    //         id: 1,
    //         name: 'Arabica',
    //         brand: 'Starbucks',
    //         flavors: ['chocolate', 'vanilla'],
    //     },
    //     {
    //         id: 2,
    //         name: 'Robusta',
    //         brand: 'Nescafe',
    //         flavors: ['caramel', 'hazelnut'],
    //     },
    //     {
    //         id: 3,
    //         name: 'Liberica',
    //         brand: 'Lavazza',
    //         flavors: ['cinnamon', 'nutmeg'],
    //     },
    //     {
    //         id: 4,
    //         name: 'Excelsa',
    //         brand: 'Illy',
    //         flavors: ['pepper', 'clove'],
    //     },
    // ];

    
    findAll() {
        // return this.coffees;
        return this.coffeesRepository.find();
    }

    async findOne(id: string) {
        //Version 1
        // return this.coffees.find((coffee) => coffee.id === parseInt(id, 10));
        // const existingCoffee = this.coffees.find((coffee) => coffee.id === +id);
        // if (!existingCoffee) {
        //     // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
        //     // there is also i nother helper exeption called NotFoundException
        //     throw new NotFoundException(`Coffee #${id} not found`);
        // }
        // return existingCoffee;
        //Version 2
         const coffee = await this.coffeesRepository.findOne({ where: { id: +id } });
         if (!coffee) {
                throw new NotFoundException(`Coffee #${id} not found`);
            }
        return coffee;
    }

    create(coffee: any) : any {
        // version 1
        // coffee.id = Math.floor(Math.random() * 10000) + 1;
        // this.coffees.push(coffee);
        // return coffee;
        // version 2
        const newCoffee = this.coffeesRepository.create(coffee); // create a new coffee object
        return this.coffeesRepository.save(newCoffee); // save the new coffee object to the database
    }

    async update(id: string , coffee: any) {
        // version 1

        // const existingCoffee = this.findOne(id);
        // if (existingCoffee) {
        //     Object.assign(existingCoffee, coffee); // update the existing coffee with the new data
        //     return existingCoffee;
        // }
        // return null; // or throw an error

        // version 2
        const coffeeToUpdate = await this.coffeesRepository.preload({
            id: +id, // preload will create a new coffee object with the given id and the new data
            ...coffee, // spread operator to copy the new data to the new coffee object
        }); // find the coffee by id and update it with the new data

        if (!coffeeToUpdate) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }

        return this.coffeesRepository.save(coffeeToUpdate); // save the updated coffee object to the database
    }

    async remove(id: string) {
        // version 1
        // const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
        // if (coffeeIndex > -1) {
        //     return this.coffees.splice(coffeeIndex, 1); // remove the coffee from the array
        // }
        // return null; // or throw an error

        // version 2
        // return this.coffeesRepository.delete(id).then((result) => {
        //     if (result.affected === 0) {
        //         throw new NotFoundException(`Coffee #${id} not found`);
        //     }
        //     return result;
        // });
        const coffee = await this.findOne(id); 
        return this.coffeesRepository.remove(coffee); 
    }
}
