import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){};

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto: LoginDto): Promise<ReturnUserDto> {
        return new ReturnUserDto(await this.authService.login(loginDto));
    }
}
