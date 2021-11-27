import { LiteralTree } from '../../../tree/literal/literal.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  value: number | string;

  constructor(tree: LiteralTree, scope: DeclarationScope) {
    super();

    this.name = tree.constructor.name.replace('LiteralTree', '');
    this.declaration = scope.get(this.name) as ClassDeclarationMetadata;
    this.value = tree.value;
  }
}
