import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   async findAll():Promise<string[]>{
    return  ['Hello','World'];
  }

  async findOne():Promise<string> {
    return 'Hello World';
  }
}
