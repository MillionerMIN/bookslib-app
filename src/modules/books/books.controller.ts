import {
  Body,
  Controller,
  // Delete,
  Get,
  Param,
  Post,
  // Put,
} from '@nestjs/common';

import { Book } from './book.entity';
import { BooksRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksRepository: BooksRepository) {}

  // Получить список всех книг
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }

  // Получить книгу по ID
  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.booksRepository.findOneOrNoteFoundFails(id);
  }

  // Создать новую книгу
  @Post()
  async createBook(@Body() bookDto: CreateBookDto): Promise<void> {
    const book = new Book();
    book.title = bookDto.title;
    book.ageRestriction = bookDto.ageRestriction;
    book.author = bookDto.author;

    await this.booksRepository.save(book);
  }

  // Обновить информацию о книге
  // @Put(':id')
  // async updateBook(@Param('id') id: number, @Body() bookDto: UpdateBookDto) {
  // необходимо вызвать соответствующий метод сервиса и вернуть результат
  // const result = await this.booksService.();
  // }

  // Удалить книгу
  // @Delete(':id')
  // async deleteBook(@Param('id') id: number) {
  // необходимо вызвать соответствующий метод сервиса и вернуть результат
  //const result = await this.booksService.someMethod();
  // }
}
