import { ExpressionTree } from './tree/expression/expression.tree';
import { TypeTree } from './tree/type/type.tree';

export type IdentifierItem = { name: string; type?: TypeTree; value?: ExpressionTree };

export class IdentifierStack {
  private scopes: IdentifierItem[][] = [[]];

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
    if (this.find(item.name)) throw new Error(`"${item.name}" already exists in the current scope`);
    this.scopes[this.scopes.length - 1].unshift(item);
  }
}
