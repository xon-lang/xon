import { LiteralTree } from '../../../tree/literal/literal.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class-definition-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { UnionTypeMetadata } from '../union/union-type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  declaration: ClassDefinitionDeclarationMetadata;

  constructor(
    public name: string,
    public value: number | string | RegExp,
    public scope: DeclarationScope,
  ) {
    super();
    this.declaration = scope.get(name) as ClassDefinitionDeclarationMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof UnionTypeMetadata) return other.has(this);
    if (!(other instanceof LiteralTypeMetadata)) return false;
    return this.name === other.name && this.value === other.value;
  }

  static fromTree(tree: LiteralTree, scope: DeclarationScope) {
    const name = tree.constructor.name.replace('LiteralTree', '');
    const metadata = new LiteralTypeMetadata(name, tree.value, scope);
    return metadata;
  }
}
