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
  SemanticContext,
  StringNode,
} from '#analyzer';
import {newText, newUri, Nothing, nothing} from '#common';
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
  } else if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    this.semantic = await semantifyImportPath(this.expression.left, context);
  }

  if (this.body?.children && this.semantic) {
    semantifyBodyNode(context, this.body, this.semantic);
  }
}

function semantifyImportPath(node: StringNode, context: SemanticContext): ImportSemantic | Nothing {
  if (!node.content) {
    return nothing;
  }

  const uri = newUri(node.content.text);
  const providedSemantic = context.provideSemantic(uri);
  const semantic = newImportSemantic(node.content?.text, uri, providedSemantic);
  node.semantic = semantic;

  if (!semantic) {
    // todo add provider info in error
    context.addError(node.range, newText(`Cannot find module "${uri.value}"`));
  }

  return semantic;
}

function semantifyBodyNode(context: SemanticContext, node: BodyNode, importSemantic: ImportSemantic): void {
  if (!is(importSemantic.providedSemantic, $ObjectTypeSemantic())) {
    return;
  }

  for (const statement of node.children) {
    if (is(statement, $ExpressionStatementNode()) && is(statement.expression, $IdNode())) {
      statement.expression.semantic = importSemantic.providedSemantic?.scope
        ?.get(statement.expression.text)
        ?.first();

      if (!statement.expression.semantic) {
        context.addError(
          node.range,
          newText(`"${importSemantic.originalPath}' has no declaration named "${statement.expression.text}"`),
        );
      }
    } else {
      context.addError(node.range, newText(`Wrong import member expression`));
    }
  }
}
