import path from 'path';
import { IssueLevel } from '../../../../issue-service/issue-level';
import { String } from '../../../../lib/core';
import { PrefixExpressionTree } from '../../../../tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '../../../../util/evaluate';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ImportProvider } from '../../../import-provider';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class ImportValueMetadata extends ValueMetadata {
  fullPath: String;
  private _importScope: DeclarationScope;
  private _importProvider: ImportProvider;
  private _type: TypeMetadata;

  constructor(private tree: PrefixExpressionTree) {
    super();
    fillValueMetadata(tree.value);

    const importPath = evaluate(tree.value);
    if (typeof importPath === 'string') {
      const relativePath = path.resolve(path.dirname(tree.sourceRange.sourceName), importPath);
      this._importProvider = new ImportProvider(relativePath);
      this.fullPath = this._importProvider.fullPath;
    } else {
      tree.addIssue(IssueLevel.error, 'Import path should be a string literal');
    }
  }

  importScope(): DeclarationScope | null {
    if (this._importScope) {
      return this._importScope;
    }

    if (!this._importProvider) {
      return null;
    }

    if (!this._importProvider.isValid()) {
      this.tree.addIssue(IssueLevel.error, 'Wrong import path');
      return null;
    }
    this._importScope = this._importProvider.scope();
    return this._importScope;
  }

  type(): TypeMetadata | null {
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
