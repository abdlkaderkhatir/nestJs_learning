
// nest g class coffees/dto/create-coffee.dto --no-spec

// what Dto means?
// Dto means Data Transfer Object
// Dto is a design pattern used to transfer data between software application subsystems or layers
// Dto is used to encapsulate data and send it from one subsystem of an application to another subsystem

export class CreateCoffeeDto {
    // @IsString() // this is a class validator decorator that checks if the value is a string
    // @IsNotEmpty() // this is a class validator decorator that checks if the value is not empty
    // @IsOptional() // this is a class validator decorator that checks if the value is optional
    readonly name: string; // or name?: string; or name: string | undefined; or name: string | null; or name: string | undefined | null; or name: string | null | undefined; or name: string | null | undefined | '';

    readonly brand: string;
    readonly flavors: string[];
    // flavors: string[] | undefined; // or flavors?: string[]; or flavors: string[] | null; or flavors: string[] | undefined | null; or flavors: string[] | null | undefined | ''; or flavors: string[] | null | undefined | '' | [];
}
