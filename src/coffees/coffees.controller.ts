import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Response } from 'express';

//the command below will create a controller and a service
// nest g co coffees --no-spec 
// nest g co coffees --no-spec 

// nest g co coffees --no-spec

// the command below will test the controller
// npm run test:watch -- src/coffees/coffees.controller.spec.ts


// --dry-run: Shows what files would be created/modified without actually making changes
// It's useful to preview what a command will do before actually executing it
// Example: nest g controller my-controller --dry-run

@Controller('coffees')
export class CoffeesController {


    constructor(private readonly coffeesService: CoffeesService) {}

    @Get() // or @Get('coffees')
    findAll() { // or @Res() res: Response
        // res.status(200).json({ message: 'This action returns all coffees' });
        // res.status(HttpStatus.OK).json({ message: 'This action returns all coffees' });
        // return 'This action returns all coffees';
        return this.coffeesService.findAll();
        // return res.status(HttpStatus.OK).send(this.coffeesService.findAll());
        // const coffees = await this.coffeesService.findAll();
        // return res.status(HttpStatus.OK).json({coffees});
    }

    @Get('flavors')
    findAll2(@Query() query) {
        // query is an object that contains the query parameters sent in the request
        // for example, if the request is GET /coffees/flavors?limit=10&offset=0
        const { limit, offset } = query;
        return `This action returns all coffees flavors with limit ${limit} and offset ${offset}`;
        // return `This action returns all coffees flavors with limit ${query.limit} and offset ${query.offset}`;
    }
    
    // this is a dynamic route
    // the :id is a route parameter
    @Get(':id')
    findOne(@Param('id') id: number) {
        // return 'This action returns a #coffee' + id;
        console.log(typeof id); // number        
        return this.coffeesService.findOne('' + id);
        // return this.coffeesService.findOne(params.id);
    }

    // this another dynamic route
    @Get(':id/flavors')
    findOne2(@Param() params) {
        return `This action returns #${params.id} coffee flavors`;
    }


    // handle prequest body
    // @Body() is a decorator that extracts the body of the request and makes it available in the method
    // the body is a JSON object that contains the data sent in the request
    @Post()
    @HttpCode(HttpStatus.CREATED) // 201
    create(@Body() createCoffeeDto : CreateCoffeeDto) { // or @Body() body: any

        // const { name, brand } = body;
        // return 'This action creates a new coffee';
        // return body;
        console.log(createCoffeeDto instanceof CreateCoffeeDto); // true
        return this.coffeesService.create(createCoffeeDto);
        // return this.coffeesService.create({ name, brand });
    }




    // PUT vs PATCH:
    // PUT updates the entire resource and requires sending all fields
    // PATCH performs a partial update, only sending changed fields
    // Example:
    // PUT /coffees/1 { name: "Black", brand: "Nest" } - Updates all fields
    // PATCH /coffees/1 { brand: "Nest" } - Only updates brand field

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) { // or @Body() body: any
        // return `This action updates a #${id} coffee`;
        // return this.coffeesService.update(id, body);
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Put(':id')
    updateWithPut(@Param('id') id: string, @Body() body: any) {
        return `This action updates a #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action removes a #${id} coffee`;
        // return this.coffeesService.remove(id);
        return this.coffeesService.remove(id);
    }
}
