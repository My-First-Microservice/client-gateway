import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config/services';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  create() {
    return 'Crea un product';
  }

  @Get()
  getAll() {
    return this.productsClient.send({ cmd: 'find_all_products' }, {});
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return 'Product with id: ' + id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'Delete product with id: ' + id;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return body;
  }
}
