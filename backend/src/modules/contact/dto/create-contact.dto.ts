import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
  name!: string;

  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El formato de correo electrónico no es válido' })
  @MaxLength(150, { message: 'El correo no puede exceder 150 caracteres' })
  email!: string;

  @IsNotEmpty({ message: 'El asunto es obligatorio' })
  @IsString({ message: 'El asunto debe ser texto' })
  @MinLength(3, { message: 'El asunto debe tener al menos 3 caracteres' })
  @MaxLength(150, { message: 'El asunto no puede exceder 150 caracteres' })
  subject!: string;

  @IsNotEmpty({ message: 'El mensaje es obligatorio' })
  @IsString({ message: 'El mensaje debe ser texto' })
  @MinLength(10, { message: 'El mensaje debe contener al menos 10 caracteres' })
  @MaxLength(3000, { message: 'El mensaje no puede exceder 3000 caracteres' })
  message!: string;

  @IsOptional()
  @IsString()
  honeypot?: string;
}
