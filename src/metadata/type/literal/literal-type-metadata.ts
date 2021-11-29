import { LiteralTypeTree } from '../../../tree/type/literal-type/literal-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class-definition-declaration-metadata';
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
    return this.declaration.type([]).is(other);
  }

  static fromTree(tree: LiteralTypeTree, scope: DeclarationScope): LiteralTypeMetadata {
    const name = tree.literal.constructor.name.replace('LiteralTree', '');
    const metadata = new LiteralTypeMetadata(name, tree.literal.value, scope);
    return metadata;
  }
}
