import { Request, Response } from "express";
import { LoginUserDTO, RegisterUserDTO } from "./dto";
import AuthService from "./service";
import messages from './messages';
class AuthController {

  private readonly authService = new AuthService;

  register = async (req: Request, res: Response) => {
    const args: RegisterUserDTO = req.body;

    try {
      const response = await this.authService.register(args.email, args.password, args.fullName, args.mobile)
      if (response instanceof Error) {
        res.send({ status: 1, data: null, error: response.message })
        return;
      }
      res.send({ status: 1, data: response, error: null })
    } catch (error) {
      console.log(
        error
      )
      res.send({ status: 0, data: null, error: error?.message || messages.MSG001 });
    }
  };

  login = async (req: Request, res: Response) => {
    const args: LoginUserDTO = req.body;

    try {
      const response = await this.authService.login(args.email, args.password);
      if (response instanceof Error) {
        res.send({ status: 1, data: null, error: response.message })
        return;
      }
      res.send({ status: 1, data: response, error: null })
    } catch (error) {
      res.send({ status: 0, data: null, error: error?.message || messages.MSG001 });
    }
  }
}

export default AuthController;
