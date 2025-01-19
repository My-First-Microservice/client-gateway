import { PartialType } from '@nestjs/mapped-types';
import { ChangeStatusDto } from './change-status.dto';

export class StatusDto extends PartialType(ChangeStatusDto) {}
