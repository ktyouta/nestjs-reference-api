import { Type } from 'class-transformer';
import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class SamplePostDto {
    @IsString({ message: 'name must be a string' })
    @MinLength(1, { message: 'name must be at least 1 character' })
    name: string;
}