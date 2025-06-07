import {
  $AsInfixNode,
  $ExpressionStatementNode,
  $IdNode,
  $ObjectTypeSemantic,
  $StringNode,
  BodyNode,
  DiagnosticContext,
  ImportSemantic,
  ImportStatementNode,
  StringNode,
} from '#analyzer';
import {newText, Text, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';
import {is} from '#typing';

export function diagnoseImportStatementNode(this: ImportStatementNode, context: DiagnosticContext): void {
  if (is(this.expression, $StringNode())) {
    diagnoseStringNode(context, this.expression);
  } else if (is(this.expression, $AsInfixNode()) && is(this.expression.left, $StringNode())) {
    diagnoseStringNode(context, this.expression.left);
  } else {
    context.add(expressionExpect(this.range));
  }

  if (this.semantic && this.body) {
    diagnoseImportBody(context, this.semantic, this.body);
  }
}

function diagnoseStringNode(context: DiagnosticContext, node: StringNode): void {
  if (!node.content) {
    context.add(expressionExpect(node.range));

    return;
  }

  if (!node.semantic) {
    context.add(cannotFindModule(node.content.text, node.range));
  }
}

function diagnoseImportBody(context: DiagnosticContext, semantic: ImportSemantic, body: BodyNode): void {
  if (!semantic.providedSemantic) {
    return;
  }

  if (!is(semantic.providedSemantic, $ObjectTypeSemantic())) {
    for (const node of body.children) {
      if (is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
        context.add(hasNoDeclaration(semantic.originalPath, node.expression.text, node.expression.range));
      } else {
        context.add(wrongDeclaration(node.range));
      }
    }

    return;
  }

  for (const node of body.children) {
    if (is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
      if (semantic.providedSemantic.scope?.has(node.expression.text)) {
        continue;
      }

      context.add(hasNoDeclaration(semantic.originalPath, node.expression.text, node.expression.range));
    } else {
      context.add(wrongDeclaration(node.range));
    }
  }
}

function expressionExpect(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Expression expect`),
  );
}

function cannotFindModule(originalPath: Text, range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Cannot find module "${originalPath}"`),
  );
}

function wrongDeclaration(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Wrong declaration`),
  );
}

function hasNoDeclaration(originalPath: Text, declarationName: Text, range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`"${originalPath}' has no declaration named "${declarationName}"`),
  );
}
