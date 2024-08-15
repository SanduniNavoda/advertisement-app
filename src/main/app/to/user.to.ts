import {IsEmail, IsEmpty, IsNotEmpty, Length, Matches, MinLength} from "class-validator";

export class UserTo {

    @IsEmail()
    @IsEmpty()
    email!: string;

    @IsNotEmpty()
    @MinLength(2)
    name!: string

    @IsNotEmpty()
    @Matches(/^0\d{2}-\d{7}$/)
    contact!: string
}