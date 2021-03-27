/* eslint-disable no-restricted-syntax */
import { DefinitionTree } from '../../tree/definition/definition.tree';
import { Issue } from '../issue';
import { Validator } from '../validator';

export class DefinitionValidator extends Validator {
  public constructor(private tree: DefinitionTree) {
    super();
  }

  public issues(): Issue[] {
    const issues: Issue[] = [];
    if (this.tree.name[0] === this.tree.name[0].toLowerCase())
      issues.push(
        Issue.fromContext(
          this.tree.ctx,
          `Definition name "${this.tree.name}" must start from uppercase letter`,
        ),
      );

    for (const operator of this.tree.operators) {
      if (operator.parameters[0].type.name !== this.tree.name)
        issues.push(
          Issue.fromContext(
            operator.ctx,
            `The first operator overload "${operator.name}" parameter "${operator.parameters[0].name}" must be "${this.tree.name}"`,
          ),
        );
    }

    return issues;
  }
}
