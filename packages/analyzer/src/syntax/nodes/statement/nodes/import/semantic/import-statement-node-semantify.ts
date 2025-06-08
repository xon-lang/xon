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

export function semantifyImportStatementNode(this: ImportStatementNode, context: SemanticContext): void {
  if (!this.expression) {
    return;
  }

  if (is(this.expression, $StringNode())) {
    this.semantic = semantifyImportPath(this.expression, context);
  } else if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    this.semantic = semantifyImportPath(this.expression.left, context);
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

  try {
    const providedSemantic = context.provideSemantic(uri);
    node.semantic = newImportSemantic(node.content?.text, uri, providedSemantic);
  } catch {}

  if (!node.semantic) {
    // todo add provider info in error
    context.addError(node.range, newText(`Cannot find module "${uri.value}"`));
  }

  return node.semantic as ImportSemantic;
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
          statement.range,
          newText(`"${importSemantic.originalPath}' has no "${statement.expression.text}" member`),
        );
      }
    } else {
      context.addError(statement.range, newText(`Wrong import member expression`));
    }
  }
}
