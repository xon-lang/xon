import { IssueService } from '../issue-service/issue-service';
import { BaseTree } from '../tree/base.tree';
import { DefinitionTree } from '../tree/definition/definition.tree';
import { InitMemberTree } from '../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../tree/definition/member/member.tree';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { ParameterTree } from '../tree/parameter/parameter.tree';
import { AssignmentStatementTree } from '../tree/statement/assignment-statement/assignment-statement.tree';
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

  public addDefinition(tree: DefinitionTree): void {
    if (this.find(tree.name)) return;
    this.firstScope.push({
      name: tree.name,
      nameType: NameType.Definition,
      tree,
      type: tree.getType(),
    });
  }

  // public addType(tree: TypeTree): void {
  //   this.add({
  //     name: tree.name,
  //     nameType: NameType.Init,
  //     tree,
  //     type: tree.getType(),
  //   });
  // }

  public addInit(tree: InitMemberTree): void {
    this.add({
      name: tree.name,
      nameType: NameType.Init,
      tree,
      type: tree.getType(),
    });
  }

  public addMember(tree: MemberTree): void {
    this.add({
      name: tree.name,
      nameType: NameType[tree.constructor.name.replace('MemberTree', '')],
      tree,
      type: tree.getType(),
    });
    tree.parameters?.forEach((x) => NamingService.instance.addParameter(x));
  }

  public addParameter(tree: ParameterTree): void {
    this.add({
      name: tree.name,
      nameType: NameType.Parameter,
      tree,
      type: tree.getType(),
    });
  }

  public addAssignment(tree: AssignmentStatementTree): void {
    this.lastScope.push({
      name: tree.name,
      nameType: NameType.Assignment,
      tree,
      type: tree.value.getType(),
      value: tree.value,
    });
  }
}
