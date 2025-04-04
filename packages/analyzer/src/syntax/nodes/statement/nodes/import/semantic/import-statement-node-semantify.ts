import {
  $AsInfixNode,
  $StringNode,
  IdNode,
  ImportStatementNode,
  newDeclarationSemantic,
  newFileImportScope,
  newImportSemantic,
  SemanticContext,
  StringNode,
} from '#analyzer';
import {newText, nothing} from '#common';
import {is} from '#typing';
import {existsSync, statSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

export function semantifyImportStatementNode(this: ImportStatementNode, context: SemanticContext): void {
  if (!this.expression) {
    return;
  }

  if (is(this.expression, $StringNode())) {
    semantifyStringNode(this.expression, context);
  }

  if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    semantifyStringNode(this.expression.left, context);
  }
}

function semantifyStringNode(node: StringNode, context: SemanticContext): void {
  if (!node.content) {
    return;
  }

  const importPath = node.content?.text.toNativeString();
  const dirName = dirname(context.sourceLocation.toNativeString());
  const filePath = resolve(dirName, importPath);

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    return;
  }

  const importScope = newFileImportScope(newText(filePath));
  node.semantic  = newImportSemantic(importScope);
}

function semantifyIdNode(node: IdNode, context: SemanticContext): void {
  node.semantic = newDeclarationSemantic(context.getReference(node.range), nothing, node.text, )
}
