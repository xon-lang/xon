import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getLibType } from './get-lib-type.util';

export class TypeTree extends BaseTree {
  // public inheritedFrom = TypeTree.create('Any');

  public metaName: string;

  public name: string;

  public generics: TypeTree[];

  public constructor(public ctx?: TypeContext) {
    super();
    if (!ctx) return;

    this.metaName = ctx._meta?.text || 'Any';
    this.name = ctx._name?.text || 'Any';
    this.generics = ctx.type().map((x) => new TypeTree(x));
  }

  public static create(name: string, ...generics: (TypeTree | string)[]): TypeTree {
    const type = new TypeTree();
    type.name = name;
    type.metaName = 'Any';
    type.generics = generics.map((x) => (x instanceof TypeTree ? x : TypeTree.create(x)));
    return type;
  }

  public definition(): DefinitionTree {
    return getLibType(this.name);
  }

  public equals(other: TypeTree): boolean {
    return this.name === other.name && this.metaName === other.metaName;
  }

  public is(other: TypeTree): boolean {
    return (
      (this.name === other.name || other.name === 'Any') &&
      (this.metaName === other.metaName || other.metaName === 'Any')
    );
  }

  public fitWeight(expression: ExpressionTree): number {
    const expressionTypeName = expression.getType().name;
    const expressionMetaName = expression.constructor.name.replace(/ExpressionTree$/, '');

    // eslint-disable-next-line no-magic-numbers
    if (this.name === expressionTypeName && this.metaName === expressionMetaName) return 1;
    // eslint-disable-next-line no-magic-numbers
    if (this.name === expressionTypeName && this.metaName === 'Any') return 2;
    // eslint-disable-next-line no-magic-numbers
    if (this.name === 'Any' && this.metaName === expressionMetaName) return 2;
    // eslint-disable-next-line no-magic-numbers
    if (this.name === 'Any' && this.metaName === 'Any') return 3;
    return 0;
  }

  public setMetaName(expression: ExpressionTree): TypeTree {
    this.metaName = expression.constructor.name.replace(/ExpressionTree$/, '');
    return this;
  }
}
