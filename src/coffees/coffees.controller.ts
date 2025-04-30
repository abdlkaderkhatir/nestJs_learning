import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

    @Get('')
    findAll() {
        return 'This action returns all coffees';
    }

    @Get('flavors')
    findAll2() {
        return 'This action returns all coffees';
    }
    
    // this is a dynamic route
    // the :id is a route parameter
    @Get(':id')
    findOne(@Param('id') id: string) { // or @Param() params : { id: string }
        return 'This action returns a #coffee' + id;
    }


    @Post()
    create(@Body() body : any) {
        // const { name, brand } = body;
        // return 'This action creates a new coffee';
        return body;
    }
}
