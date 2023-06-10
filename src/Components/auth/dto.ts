import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  Matches,
} from "class-validator";

export class RegisterUserDTO {
  @IsString()
  @Length(10, 20)
  fullName!: string;

  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @Length(10, 12)
  mobile!: string | null;

  @IsString()
  @IsOptional()
  googleId!: string | null

  @IsStrongPassword()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password too weak' })
  @IsNotEmpty()
  password!: string;
}

export class LoginUserDTO {
  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}