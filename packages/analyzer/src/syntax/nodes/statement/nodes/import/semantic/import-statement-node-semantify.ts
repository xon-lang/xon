import {
  $AsInfixNode,
  $ExpressionStatementNode,
  $IdNode,
  $StringNode,
  getSemanticFromUri,
  ImportSemantic,
  ImportStatementNode,
  newImportSemantic,
  SemanticContext,
  StringNode,
} from '#analyzer';
import {newText, newUri, Nothing, nothing} from '#common';
import {is} from '#typing';
import {existsSync, statSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

export function semantifyImportStatementNode(this: ImportStatementNode, context: SemanticContext): void {
  if (!this.expression) {
    return;
  }

  if (is(this.expression, $StringNode())) {
    this.semantic = semantifyStringNode(this.expression, context);
  }

  if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    this.semantic = semantifyStringNode(this.expression.left, context);
  }

  if (this.body?.children && this.semantic) {
    for (const statement of this.body?.children) {
      if (is(statement, $ExpressionStatementNode()) && is(statement.expression, $IdNode()))
        statement.expression.semantic = this.semantic.scope?.get(statement.expression.text)?.first();
    }
  }
}

function semantifyStringNode(node: StringNode, context: SemanticContext): ImportSemantic | Nothing {
  if (!node.content) {
    return nothing;
  }

  const importPath = node.content?.text.toNativeString();
  const dirName = dirname(context.uri.value.toNativeString());
  const originalPath = resolve(dirName, importPath);

  if (!existsSync(originalPath) || !statSync(originalPath).isFile()) {
    return nothing;
  }

  const uri = newUri(newText(originalPath));
  const scope = getSemanticFromUri(uri);
  const semantic = newImportSemantic(newText(originalPath), uri, scope);
  node.semantic = semantic;

  return semantic;
}

// function semantifyIdNode(node: IdNode, context: SemanticContext): void {
//   node.semantic = newDeclarationSemantic(context.getReference(node.range), nothing, node.text);
// }
