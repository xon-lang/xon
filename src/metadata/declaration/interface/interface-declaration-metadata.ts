import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { DeclarationTree } from '../../../tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { SourceReference } from '../../../tree/util/source-reference';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationsMetadata } from '../declaration-metadata-helper';

export class InterfaceDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: DeclarationTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  generics(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.id.generics.map((x) => getExpressionMetadata(x, this.scope));
  }

  attributes(): DeclarationMetadata[] {
    const ancestorsAttributes = this.ancestors().flatMap((x) => x.attributes());
    if (this.node.body instanceof MultipleBodyTree) {
      const currentAttributes = getDeclarationsMetadata(
        this.node.body.statements
          .filter((x) => x instanceof DeclarationStatementTree)
          .map((x) => x as DeclarationStatementTree)
          .map((x) => x.declaration),
        this.scope,
      );
      return [...currentAttributes, ...ancestorsAttributes];
    }
    return ancestorsAttributes;
  }

  ancestors(): ExpressionMetadata[] {
    throw new Error('Not implemented');
    // return this.node.ancestors.map((x) => getExpressionMetadata(x, this.scope));
  }
}

interface A{
  f()
}

interface B extends A{
  f2(n:number): any
}

class C implements B{
  f2(n: number) {
    throw new Error('Method not implemented.');
  }
  f() {
    throw new Error('Method not implemented.');
  }

}