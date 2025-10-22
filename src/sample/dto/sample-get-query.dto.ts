import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class SampleGetQueryDto {
    @Type(() => Number)
    @IsInt({ message: 'id must be an number' })
    @Min(1, { message: 'id must be greater than 0' })
    id: number;
}