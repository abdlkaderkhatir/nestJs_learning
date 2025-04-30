import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';

// nest g mo coffees --no-spec
// the command above will create a module and a spec file for the module
@Module({
    imports: [],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [],
})
export class CoffeesModule {}
