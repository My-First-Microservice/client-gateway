import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config/envs';
import { ORDER_SERVICE } from 'src/config/services';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: envs.services.orders.port,
          host: envs.services.orders.host,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
