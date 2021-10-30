import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    // Verifica o nome
    if (!name) {
      throw new Error('Incorrect name!');
    }

    // Verifica se a tag ja existe SELECT * FROM TAGS WHERE NAME = "name"
    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    // Cria e salva nova tag
    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
