import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreateBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}

  createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {}

  editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: CreateBookmarkDto,
  ) {}

  deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}
}
