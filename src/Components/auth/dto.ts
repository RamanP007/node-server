import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  Matches,
} from "class-validator";
import messages from "./messages";

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

  @IsStrongPassword()
  @Matches(/^(?=.*[A-Z])(?=.*[~!@#$%^&*()/_=+[\]{}|;:,.<>?-])(?=.*[0-9])(?=.*[a-z]).{8,14}$/, { message: messages.MSG005 })
  @IsNotEmpty()
  password!: string | null;
}

export class LoginUserDTO {
  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}