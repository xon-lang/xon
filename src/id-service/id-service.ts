import { IssueService } from '../issue-service/issue-service';
import { BaseTree } from '../tree/base.tree';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { ParameterTree } from '../tree/parameter/parameter.tree';
import { AssignmentStatementTree } from '../tree/statement/assignment-statement/assignment-statement.tree';
import { TypeTree } from '../tree/type/type.tree';

export type IdentifierItem = {
  tree: BaseTree;
  name: string;
  type: TypeTree;
  value?: ExpressionTree;
};

export class IdService {
  public static instance = new IdService();

  private scopes: IdentifierItem[][] = [[]];

  private get lastScope(): IdentifierItem[] {
    return this.scopes[this.scopes.length - 1];
  }

  public pushScope(): void {
    this.scopes.unshift([]);
  }

  public popScope(): void {
    this.scopes.shift();
  }

  public find(name: string): IdentifierItem {
    const item = ([] as IdentifierItem[]).concat(...this.scopes).find((x) => x.name === name);
    return item;
  }

  public add(item: IdentifierItem): void {
    if (this.find(item.name))
      IssueService.instance.addWarning(
        item.tree,
        `"${item.name}" already exists in the current scope`,
        'User another name',
      );
    this.lastScope.unshift(item);
  }

  public addAssignment(assignment: AssignmentStatementTree): void {
    this.lastScope.unshift({
      name: assignment.name,
      tree: assignment,
      type: assignment.value.dataType,
      value: assignment.value,
    });
  }

  public addParameter(parameter: ParameterTree): void {
    this.add({ name: parameter.name, tree: parameter, type: parameter.type });
  }
}
