import {
  Controller,
  Get,
  Body,
  Query,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';

import { IsEmail } from 'class-validator';

export class DTO {
  @IsEmail()
  public title: string;

  @IsEmail()
  public name: string;
}

@Controller({})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('asdsad')
  async getHello(@Body() DTO: DTO) {
    return this.appService.getHello();
  }
}
