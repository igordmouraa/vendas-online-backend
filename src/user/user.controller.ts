import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }
}
