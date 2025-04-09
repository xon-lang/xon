import {
  $AsInfixNode,
  $StringNode,
  getDeclarationsFromUri,
  IdNode,
  ImportStatementNode,
  newDeclarationScope,
  newDeclarationSemantic,
  newImportSemantic,
  SemanticContext,
  StringNode,
} from '#analyzer';
import {newText, newUri, nothing} from '#common';
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

  const uri = newUri(newText(filePath));
  const declarations = getDeclarationsFromUri(uri);
  const scope = newDeclarationScope(declarations);
  node.semantic = newImportSemantic(uri, scope);
}

function semantifyIdNode(node: IdNode, context: SemanticContext): void {
  node.semantic = newDeclarationSemantic(context.getReference(node.range), nothing, node.text);
}
