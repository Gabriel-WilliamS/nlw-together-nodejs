import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IRequestTag {
  name: string;
}

class CreateTagService {
  async execute({ name }: IRequestTag) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrenct name!");
    }
    // SELECT * FROM TAG WHERE NAME = `name`
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagsRepositories.create({
      name
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
