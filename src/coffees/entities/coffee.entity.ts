import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()
export class Coffee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    // @Column("json", { nullable: true })
    @JoinTable() // this is used to create a many to many relationship between coffee and flavor
    @ManyToMany((type) => Flavor, (flavor) => flavor.coffees) // 
    flavors: string[];
}