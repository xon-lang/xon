import {$AsInfixNode, $StringNode, DiagnosticContext, ImportStatementNode, StringNode} from '#analyzer';
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

function expressionExpect(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Expression expect`),
  );
}

function cannotFindModule(path: Text, range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Cannot find module '${path}'`),
  );
}
