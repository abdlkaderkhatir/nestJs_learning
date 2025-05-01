

// export class UpdateCoffeeDto {
//     // @IsString() // this is a class validator decorator that checks if the value is a string
//     // @IsNotEmpty() // this is a class validator decorator that checks if the value is not empty
//     // @IsOptional() // this is a class validator decorator that checks if the value is optional
//     readonly name?: string; // or id?: string; or id: string | undefined; or id: string | null; or id: string | undefined | null; or id: string | null | undefined; or id: string | null | undefined | '';
//     readonly brand?: string;
//     readonly flavors?: string[];
// }

import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";


export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
    // PartialType is a utility function that makes all properties of the class optional
}
