import { ProgramTree } from '../../tree/program/program.tree';
import { DefinitionValidator } from '../definition/definition.validator';
import { Issue } from '../issue';
import { Validator } from '../validator';

export class ProgramValidator extends Validator {
  public constructor(private tree: ProgramTree) {
    super();
  }

  public issues(): Issue[] {
    const issues: Issue[] = [];

    this.tree.definitions.forEach((x) => issues.push(...new DefinitionValidator(x).issues()));

    return issues;
  }

}
