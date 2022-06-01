import { Issue } from '../../../../issue-service/issue';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../../util/evaluate';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ImportProvider } from '../../../import-provider';
import { ValueExpressionMetadata } from '../value-expression-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';

export class ImportValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(private tree: PrefixExpressionTree, private scope: DeclarationScope) {
    super();
    tree.value.metadata = getValueExpressionMetadata(tree.value, scope);
  }

  declaration(): DeclarationScope {
    const importPath = evaluate(this.tree.value);
    if (typeof importPath === 'string') {
      return new ImportProvider(importPath).scope();
    } else {
      Issue.errorFromTree(this.tree.value, 'Wrong import path');
    }
  }

  eval() {
    return {};
  }
}
