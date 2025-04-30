import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';

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
    findAll(@Res() res) { // or @Res() res: Response
        res.status(200).json({ message: 'This action returns all coffees' });
        // res.status(HttpStatus.OK).json({ message: 'This action returns all coffees' });
        // return 'This action returns all coffees';
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
    create(@Body() body : any) { // or @Body() body : { name: string, brand: string } Or @Body('name') name: string, @Body('brand') brand: string

        // const { name, brand } = body;
        // return 'This action creates a new coffee';
        return body;
    }




    // PUT vs PATCH:
    // PUT updates the entire resource and requires sending all fields
    // PATCH performs a partial update, only sending changed fields
    // Example:
    // PUT /coffees/1 { name: "Black", brand: "Nest" } - Updates all fields
    // PATCH /coffees/1 { brand: "Nest" } - Only updates brand field

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return `This action updates a #${id} coffee`;
    }

    @Put(':id')
    updateWithPut(@Param('id') id: string, @Body() body: any) {
        return `This action updates a #${id} coffee`;
    }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} coffee`;
    // }
}
