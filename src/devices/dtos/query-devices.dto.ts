import { ApiProperty } from '@nestjs/swagger';

export class QueryDevicesDto {
  @ApiProperty({ required: false })
  groupId: number;
}
