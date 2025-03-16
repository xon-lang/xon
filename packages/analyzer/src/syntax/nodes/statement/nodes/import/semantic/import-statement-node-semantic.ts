import {ImportStatementNode, newFileImportScope, newImportValueSemantic, SemanticContext} from '#analyzer';
import {newText} from '#common';
import {existsSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

export function semantifyImportStatementNode(this: ImportStatementNode, context: SemanticContext): void {
  if (!this.expression?.content) {
    return;
  }

  const importPath = this.expression.content?.text.toNativeString();
  const dirName = dirname(context.sourceLocation.toNativeString());
  const filePath = resolve(dirName, importPath);

  if (!existsSync(filePath)) {
    return;
  }

  const importScope = newFileImportScope(newText(filePath));
  const semantic = newImportValueSemantic(importScope);

  this.semantic = semantic;
  this.expression.semantic = semantic;
  this.expression.content.semantic = semantic;
}
