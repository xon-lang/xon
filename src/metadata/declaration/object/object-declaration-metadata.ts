import { MultipleBodyNode } from '../../../ast/body/multiple/multiple-body-node';
import { DeclarationNode } from '../../../ast/declaration/declaration-node';
import { DeclarationStatementNode } from '../../../ast/statement/declaration/declaration-statement-node';
import { SourceReference } from '../../../ast/util/source-reference';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../../expression/expression-metadata';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';
import { getDeclarationsMetadata } from '../declaration-metadata-helper';

export class ObjectDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: DeclarationNode, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  attributes(): DeclarationMetadata[] {
    const ancestorsAttributes = this.ancestors().flatMap((x) => x.attributes());
    if (this.node.body instanceof MultipleBodyNode) {
      const currentAttributes = getDeclarationsMetadata(
        this.node.body.statements
          .filter((x) => x instanceof DeclarationStatementNode)
          .map((x) => x as DeclarationStatementNode)
          .map((x) => x.declaration),
        this.scope,
      );
      return [...currentAttributes, ...ancestorsAttributes];
    }
    return ancestorsAttributes;
  }

  ancestors(): ExpressionMetadata[] {
    return this.node.ancestors.map((x) => getExpressionMetadata(x, this.scope));
  }
}
