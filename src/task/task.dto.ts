import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsString, Length } from "class-validator";

export class TaskDto {
    @ApiProperty()
    @Length(5)
    @IsString()
    titulo: string;

    @ApiProperty()
    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @ApiProperty()
    @IsString()
    @IsOptional()
    descripcion: string;

}