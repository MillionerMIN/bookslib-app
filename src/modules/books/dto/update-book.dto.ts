import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

// import { CreateBookDto } from './create-book.dto';
// import { PartialType } from '@nestjs/mapped-types';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(120)
  ageRestriction?: number;

  @IsOptional()
  @IsString()
  author?: string;
}

// export class UpdateBookDto extends PartialType(CreateBookDto) {}
