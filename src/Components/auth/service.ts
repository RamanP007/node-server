import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService {
  private readonly prisma = new PrismaClient();

  private isEmailExist = async (email: string) => {
    const response = await this.prisma.user.count({
      where: { email }
    })
    if (response) return true;
    return false;
  };

  private isMobileExist = async (phone: string) => {
    const response = await this.prisma.user.count({
      where: { phone: phone.toString() }
    })
    if (response) return true;
    return false;
  };

  private hashedPassword = (password: string): string => {
    return bcrypt.hashSync(password, 10);
  }

  private checkPassword = (password: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
  }

  private generateJWTToken = (data): string => {
    return jwt.sign(data, process.env.SECRET, { expiresIn: '1d' })
  }

  register = async (
    email: string,
    password: string,
    fullname: string,
    phone: string
  ) => {
    const isEmailExist = await this.isEmailExist(email);
    if (isEmailExist) return new Error('Email already Exist');

    const isPhoneExist = await this.isMobileExist(phone)
    if (isPhoneExist) return new Error('Mobile already Exist');
    const hashedPassword = this.hashedPassword(password);

    const user = await this.prisma.user.create({
      data: {
        email, password: hashedPassword, fullname, phone: phone.toString()
      }
    })

    const tokenData = {
      id: user.id,
      name: user.fullname,
      email: user.email
    }


    return this.generateJWTToken(tokenData);
  };

  login = async (email: string, password: string): Promise<string | Error> => {

    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user) return new Error('User not found')
    if (!this.checkPassword(password, user.password)) return new Error('Wrong Password')
    const tokenData = {
      id: user.id,
      name: user.fullname,
      email: user.email
    }

    return this.generateJWTToken(tokenData);
  }
}

export default AuthService;
