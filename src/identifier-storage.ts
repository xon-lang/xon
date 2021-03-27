import { ParserRuleContext } from 'antlr4ts';
import { addIssue } from './issue/issue-service';
import { ExpressionTree } from './tree/expression/expression.tree';
import { ParameterTree } from './tree/parameter/parameter.tree';
import { AssignmentStatementTree } from './tree/statement/assignment-statement/assignment-statement.tree';
import { TypeTree } from './tree/type/type.tree';

export type IdentifierItem = {
  ctx: ParserRuleContext;
  name: string;
  type: TypeTree;
  value?: ExpressionTree;
};

export class IdentifierStorage {
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
      addIssue(item.ctx, `"${item.name}" already exists in the current scope`);
    this.lastScope.unshift(item);
  }

  public addAssignment(assignment: AssignmentStatementTree): void {
    this.lastScope.unshift({
      ctx: assignment.ctx,
      name: assignment.name,
      type: assignment.value.getType(),
      value: assignment.value,
    });
  }

  public addParameter(parameter: ParameterTree): void {
    this.add({ ctx: parameter.ctx, name: parameter.name, type: parameter.type });
  }
}
