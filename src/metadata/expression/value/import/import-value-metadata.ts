import path from 'path';
import { IssueLevel } from '~/issue/issue-level';
import { String2 } from '~/lib/core';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { ObjectTypeMetadata } from '~/metadata/expression/type/object/object-type-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { ImportProvider } from '~/metadata/import-provider';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '~/util/evaluate';

export class ImportValueMetadata extends ValueMetadata {
  fullPath: String2 | null = null;
  private _importScope: DeclarationScope | null = null;
  private _importProvider: ImportProvider | null = null;
  private _type: TypeMetadata | null = null;

  constructor(private tree: PrefixExpressionTree) {
    super();
    fillValueMetadata(tree.value);

    const importPath = evaluate(tree.value);
    if (typeof importPath === 'string' && tree.sourceRange.sourceName) {
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
    const importScope = this.importScope();
    if (!importScope) return null;
    this._type = new ObjectTypeMetadata(importScope);

    return this._type;
  }

  eval(): void {
    throw new Error('Not implemented');
  }
}
