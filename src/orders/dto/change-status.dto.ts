import { IsEnum } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class ChangeStatusDto {
  @IsEnum(OrderStatusList, {
    message: `Valid status are: ${OrderStatusList}`,
  })
  status: OrderStatus;
}
