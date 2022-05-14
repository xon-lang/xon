import { Issue } from '../../../issue-service/issue';
import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../util/evaluate';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ImportProvider } from '../../import-provider';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class ImportExpressionMetadata extends ExpressionMetadata {
  constructor(private tree: PrefixExpressionTree, private scope: DeclarationScope) {
    super();
    tree.value.metadata = getExpressionMetadata(tree.value, scope);
  }

  attributes(): DeclarationMetadata[] {
    const importPath = evaluate(this.tree.value);
    if (typeof importPath === 'string') {
      return new ImportProvider(importPath).declarations();
    } else {
      Issue.errorFromTree(this.tree.value, 'Wrong import path');
    }
  }

  is(other: ExpressionMetadata): boolean {
    return (
      other instanceof ImportExpressionMetadata &&
      evaluate(this.tree.value) === evaluate(other.tree.value)
    );
  }
}
