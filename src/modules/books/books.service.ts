import { Book } from './book.entity';
import { BooksRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  async getBooks(): Promise<Book[]> {
    return await this.booksRepository.findAll();
  }

  async getBookById(id: number): Promise<Book> {
    return await this.booksRepository.findOneOrNoteFoundFails(id);
  }

  async createBook(dto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.title = dto.title;
    book.author = dto.author;
    book.ageRestriction = dto.ageRestriction;
    return await this.booksRepository.save(book);
  }
}
