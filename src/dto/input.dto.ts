/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';

export class inputDTO {
  @ApiProperty()
  target: string;

  @ApiProperty()
  text: string;
}
