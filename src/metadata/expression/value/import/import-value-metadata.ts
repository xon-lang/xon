import { IssueLevel } from '../../../../issue-service/issue-level';
import { None } from '../../../../lib/core';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../../util/evaluate';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ImportProvider } from '../../../import-provider';
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
    if (typeof importPath !== 'string') {
      this.tree.addIssue(IssueLevel.error, 'Import path should be a string literal');
      return new DeclarationScope();
    }
    const importProvider = new ImportProvider(importPath);
    if (!importProvider.isValid()) {
      this.tree.addIssue(IssueLevel.error, 'Wrong import path');
      return new DeclarationScope();
    }
    return importProvider.scope();
  }

  type(): TypeMetadata | None {
    return new ObjectTypeMetadata(this.importScope());
  }

  eval() {
    throw new Error('Not implemented');
  }
}
