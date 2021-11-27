import { LiteralTree } from '../../../tree/literal/literal.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  constructor(
    public value: number | string,
    public declaration: ClassDeclarationMetadata,
    public scope: DeclarationScope,
  ) {
    super();
  }

  static fromTree(tree: LiteralTree, scope: DeclarationScope) {
    const name = tree.constructor.name.replace('LiteralTree', '');
    const declaration = scope.get(name) as ClassDeclarationMetadata;
    const metadata = new LiteralTypeMetadata(tree.value, declaration, scope);
    return metadata;
  }
}
