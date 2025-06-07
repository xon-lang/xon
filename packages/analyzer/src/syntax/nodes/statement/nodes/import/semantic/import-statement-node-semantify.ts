import {
  $AsInfixNode,
  $ExpressionStatementNode,
  $IdNode,
  $ObjectTypeSemantic,
  $StringNode,
  BodyNode,
  ImportSemantic,
  ImportStatementNode,
  newImportSemantic,
  newSemanticProviderResolver,
  SemanticContext,
  StringNode,
} from '#analyzer';
import {newUri, Nothing, nothing} from '#common';
import {is} from '#typing';

export async function semantifyImportStatementNode(
  this: ImportStatementNode,
  context: SemanticContext,
): Promise<void> {
  if (!this.expression) {
    return;
  }

  if (is(this.expression, $StringNode())) {
    this.semantic = await semantifyImportPath(this.expression, context);
  }

  if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    this.semantic = await semantifyImportPath(this.expression.left, context);
  }

  if (this.body?.children && this.semantic) {
    semantifyBodyNode(this.body, this.semantic);
  }
}

async function semantifyImportPath(
  node: StringNode,
  context: SemanticContext,
): Promise<ImportSemantic | Nothing> {
  if (!node.content) {
    return nothing;
  }

  const importUri = newUri(node.content.text);
  const importProvider = newSemanticProviderResolver().resolve(importUri);
  const providedSemantic = await importProvider.provideSemantic(context.uri, importUri);

  const semantic = newImportSemantic(node.content?.text, importUri, providedSemantic);
  node.semantic = semantic;

  return semantic;
}

function semantifyBodyNode(node: BodyNode, importSemantic: ImportSemantic): void {
  if (!is(importSemantic.providedSemantic, $ObjectTypeSemantic())) {
    return;
  }

  for (const statement of node.children) {
    if (is(statement, $ExpressionStatementNode()) && is(statement.expression, $IdNode())) {
      statement.expression.semantic = importSemantic.providedSemantic?.scope
        ?.get(statement.expression.text)
        ?.first();
    }
  }
}
