import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const member = await this.prisma.members.create({
      data: {
        id: "teste",
        name: 'John Doe',
        function: 'CEO',
    },
  });
    return member;
  }
}
