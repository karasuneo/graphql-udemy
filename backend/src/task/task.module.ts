import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskService } from './task.service';

@Module({
  imports: [PrismaModule],
  providers: [TaskModule, TaskService],
})
export class TaskModule {}
