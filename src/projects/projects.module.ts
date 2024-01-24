import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { StartProjectUseCase } from './use-cases/start-project-use-case';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, StartProjectUseCase],
})
export class ProjectsModule {}
