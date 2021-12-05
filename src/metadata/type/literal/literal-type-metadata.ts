import { LiteralTree } from '../../../tree/literal/literal.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { TypeMetadata } from '../type-metadata';

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
    if (other instanceof LiteralTypeMetadata)
      return this.declaration === other.declaration && this.value === other.value;
    return this.declaration.type([]).resultType.is(other);
  }

  static fromTree(tree: LiteralTree, scope: DeclarationScope): LiteralTypeMetadata {
    const name = tree.constructor.name.replace('LiteralTree', '');
    const metadata = new LiteralTypeMetadata(name, tree.value, scope);
    return metadata;
  }
}
