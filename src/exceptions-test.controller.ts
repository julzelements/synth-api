import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('exceptions-test')
export class ExceptionsTestController {
  @Get()
  getExceptions() {
    try {
      const myObject = {};
      // @ts-ignore
      console.log(myObject.myProp.myOtherProp);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Things went wrong',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
