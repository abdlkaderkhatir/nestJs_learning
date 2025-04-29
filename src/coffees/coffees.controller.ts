import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
