import { Issue } from '../../../issue-service/issue';
import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../util/evaluate';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ImportProvider } from '../../import-provider';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class ImportValueMetadata extends ValueMetadata {
  constructor(private tree: PrefixExpressionTree, private scope: DeclarationScope) {
    super();
    tree.value.metadata = getValueMetadata(tree.value, scope);
  }

  importScope(): DeclarationScope {
    const importPath = evaluate(this.tree.value);
    if (typeof importPath === 'string') {
      return new ImportProvider(importPath).scope();
    } else {
      Issue.errorFromTree(this.tree.value, 'Wrong import path');
    }
  }

  type(): TypeMetadata {
    return new ObjectTypeMetadata(this.importScope());
  }

  eval() {
    throw new Error('Not implemented');
  }
}
