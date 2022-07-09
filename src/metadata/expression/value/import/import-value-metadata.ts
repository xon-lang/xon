import { IssueLevel } from '../../../../issue-service/issue-level';
import { None, String } from '../../../../lib/core';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../../util/evaluate';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ImportProvider } from '../../../import-provider';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class ImportValueMetadata extends ValueMetadata {
  fullPath: String;
  private _importScope: DeclarationScope;
  private _importProvider: ImportProvider;
  private _type: TypeMetadata;

  constructor(private tree: PrefixExpressionTree, private scope: DeclarationScope) {
    super();
    tree.value.metadata = getValueMetadata(tree.value, scope);

    const importPath = evaluate(tree.value);
    if (typeof importPath === 'string') {
      this._importProvider = new ImportProvider(importPath);
      this.fullPath = this._importProvider.fullPath;
    } else {
      tree.addIssue(IssueLevel.error, 'Import path should be a string literal');
    }
  }

  importScope(): DeclarationScope {
    if (this._importScope) {
      return this._importScope;
    }

    if (!this._importProvider) {
      return new DeclarationScope();
    }

    if (!this._importProvider.isValid()) {
      this.tree.addIssue(IssueLevel.error, 'Wrong import path');
      return new DeclarationScope();
    }
    this._importScope = this._importProvider.scope();
    return this._importScope;
  }

  type(): TypeMetadata | None {
    if (this._type) {
      return this._type;
    }
    this._type = new ObjectTypeMetadata(this.importScope());
    return this._type;
  }

  eval() {
    throw new Error('Not implemented');
  }
}
