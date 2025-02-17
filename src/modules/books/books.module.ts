import { Book } from './book.entity';
import { BooksController } from './books.controller';
import { BooksRepository } from './books.repository';
import { BooksService } from './books.service';
import { JwtStrategy } from 'src/core/guards/jwt.strategy';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksRepository, JwtStrategy],
  controllers: [BooksController],
})
export class BooksModule {}
