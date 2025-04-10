import {
  $AsInfixNode,
  $ExpressionStatementNode,
  $IdNode,
  $StringNode,
  DiagnosticContext,
  ImportSemantic,
  ImportStatementNode,
  Node,
  StringNode,
} from '#analyzer';
import {ArrayData, newText, Text, TextRange} from '#common';
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
    diagnoseImportDeclarations(context, this.semantic, this.body.children);
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

function diagnoseImportDeclarations(
  context: DiagnosticContext,
  semantic: ImportSemantic,
  nodes: ArrayData<Node>,
): void {
  if (!semantic.scope) {
    return;
  }

  for (const node of nodes) {
    if (is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
      if (semantic.scope.has(node.expression.text)) {
        continue;
      }

      context.add(hasNoDeclaration(semantic.originalPath, node.expression.text, node.expression.range));
    } else {
      console.log(node);

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
