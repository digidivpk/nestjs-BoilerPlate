import { Injectable, Scope, Get, Post } from '@nestjs/common';


@Injectable()
export class AppService {
  
  
  getHello(): string {
    return 'Hello World!';
  }
}
