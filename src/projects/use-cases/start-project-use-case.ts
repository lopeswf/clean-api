import { StartProjectDto } from '../dto/start-project.dto';

export class StartProjectUseCase {
  async execute(id: number, input: StartProjectDto) {
    return `This action updates a #${id} project with startAt date: ${input.startAt}`;
  }
}
