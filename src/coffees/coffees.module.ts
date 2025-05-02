import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Type } from 'class-transformer';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// nest g mo coffees --no-spec
// the command above will create a module and a spec file for the module
@Module({
    imports: [TypeOrmModule.forFeature([Coffee])], // Import the TypeOrmModule and register the Coffee entity
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [],
})
export class CoffeesModule {}
