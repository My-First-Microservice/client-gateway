import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  create() {
    return 'Crea un product';
  }

  @Get()
  getAll() {
    return 'all products..';
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
