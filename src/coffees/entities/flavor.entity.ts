
import { Entity, ManyToMany } from 'typeorm';
import { Coffee } from './coffee.entity';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
// import { ManyToOne } from 'typeorm';
// import { JoinColumn } from 'typeorm';
// import { RelationId } from 'typeorm';
// import { CreateDateColumn } from 'typeorm';
// import { UpdateDateColumn } from 'typeorm';
// import { DeleteDateColumn } from 'typeorm';
// import { IsString } from 'class-validator';
// import { IsOptional } from 'class-validator';
// import { IsNotEmpty } from 'class-validator';

// import { IsArray } from 'class-validator';
// import { IsNumber } from 'class-validator';
// import { IsBoolean } from 'class-validator';
// import { IsDate } from 'class-validator';
// import { IsEnum } from 'class-validator';

// import { IsEmail } from 'class-validator';
// import { IsPhoneNumber } from 'class-validator';
// import { IsUrl } from 'class-validator';
// import { IsUUID } from 'class-validator';
// import { IsDateString } from 'class-validator';
// import { IsObject } from 'class-validator';
// import { IsIn } from 'class-validator';


@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    // @IsString()
    // @IsNotEmpty()
    name: string;

    @ManyToMany((type) => Coffee, (coffee) => coffee.flavors) 
    coffees : Coffee[]; 
}
