

export class UpdateCoffeeDto {
    // @IsString() // this is a class validator decorator that checks if the value is a string
    // @IsNotEmpty() // this is a class validator decorator that checks if the value is not empty
    // @IsOptional() // this is a class validator decorator that checks if the value is optional
    readonly name?: string; // or name?: string; or name: string | undefined; or name: string | null; or name: string | undefined | null; or name: string | null | undefined; or name: string | null | undefined | '';

    readonly brand?: string;
    readonly flavors?: string[];
}
