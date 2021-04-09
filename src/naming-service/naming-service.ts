import { IssueService } from '../issue-service/issue-service';
import { BaseTree } from '../tree/base.tree';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { TypeTree } from '../tree/type/type.tree';

export enum NameType {
  // Type,
  Definition,
  Property,
  Init,
  Index,
  Operator,
  Method,
  Parameter,
  Assignment,
  Lambda,
}

export type IdentifierItem = {
  tree: BaseTree;
  nameType: NameType;
  name: string;
  type: TypeTree;
  value?: ExpressionTree;
};

export class NamingService {
  public static instance = new NamingService();

  private scopes: IdentifierItem[][] = [[]];

  private get firstScope(): IdentifierItem[] {
    return this.scopes[0];
  }

  private get lastScope(): IdentifierItem[] {
    return this.scopes[this.scopes.length - 1];
  }

  public pushScope(): void {
    this.scopes.push([]);
  }

  public popScope(): void {
    this.scopes.pop();
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
    this.lastScope.push(item);
  }
}
