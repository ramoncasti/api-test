import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Login')
@Controller('login')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() authDto: AuthDto) {
        const { login, Contrasenia } = authDto;
        const valid = await this.authService.validateUser(login, Contrasenia);
        if (!valid) {
            throw new UnauthorizedException("No es un usuario valido!");
        }

        return await this.authService.generateAccessToken(login);
    }
}
