import {
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
  IsNotEmpty,
} from "class-validator";

export class ProductBody {
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(43)
  code_bar!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  description!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.05)
  price!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity!: number;
}
