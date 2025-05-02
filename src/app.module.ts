import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoffeesModule , TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'coffee',
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true, // Automatically load entities from the modules imported in the application in another way 
    // synchronize: true, // Automatically synchronize the database schema with the entities
    synchronize: true,
    // logging: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// give me command for installing the package class-validator and class-transformer
// npm install class-validator class-transformer --save
// give me command for installing  type orm and postgres
// npm install @nestjs/typeorm typeorm pg --save
