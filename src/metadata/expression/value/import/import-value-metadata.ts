import path from 'path';
import { IssueLevel } from '~/issue';
import { String2 } from '~/lib';
import {
  DeclarationScope,
  fillValueMetadata,
  ImportProvider,
  ObjectTypeMetadata,
  TypeMetadata,
  ValueMetadata,
} from '~/metadata';
import { PrefixExpressionTree } from '~/tree';
import { evaluate } from '~/util';

export class ImportValueMetadata extends ValueMetadata {
  fullPath: String2;
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

  eval(): void {
    throw new Error('Not implemented');
  }
}
