import { ApiProperty } from "@nestjs/swagger";
import {IsOptional, IsString, Length } from "class-validator";

export class UsuariosDto {
    @ApiProperty()
    @Length(1)
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    login: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Contrasenia: string;
    

}