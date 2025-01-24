import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(Book)
    private booksOrmRepository: Repository<Book>,
  ) {}

  async save(book: Book): Promise<Book> {
    return await this.booksOrmRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.booksOrmRepository.find();
  }

  async findOneOrNoteFoundFails(id: number): Promise<Book> {
    const result = await this.booksOrmRepository.findOne({ where: { id } });

    if (!result) {
      throw new NotFoundException('book not found');
    }

    return result;
  }
}
