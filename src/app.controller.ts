import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { inputDTO } from './dto/input.dto';

@ApiTags('translator')
@Controller('translator')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('translateText')
  async translateText(@Body() input: inputDTO) {
    try {
      return await this.appService.translateText(input.target, input.text);
    } catch (ex) {
      throw new BadRequestException(ex.message);
    }
  }
}
