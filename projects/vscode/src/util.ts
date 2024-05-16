import {OutputChannel, Position, Range, TextDocument} from 'vscode';
import {Node, isSyntaxNode} from '../../core/parser/node/node';
import {StatementNode} from '../../core/parser/node/statement/statement-node';
import {SyntaxResult} from '../../core/parser/syntax-context';
import {syntaxParse} from '../../core/parser/syntax-parser';
import {semanticParse} from '../../core/semantic/semantic';
import {TextPosition} from '../../core/util/resource/text/text-position';
import {TextRange} from '../../core/util/resource/text/text-range';
import {textResourceFrom} from '../../core/util/resource/text/text-resource';
import {Array2, Nothing, String2, nothing} from '../../lib/types';

export function convertRange(range: TextRange): Range {
  const start = convertPosition(range.start);
  const stop = convertPosition(range.stop);

  return new Range(start, stop);
}

export function convertPosition(position: TextPosition): Position {
  return new Position(position.line, position.column);
}

const cachedSyntax: Record<String2, SyntaxResult> = {};

export function getDocumentSyntax(document: TextDocument, channel: OutputChannel): SyntaxResult {
  const text = document.getText();
  // const hash = createHash('sha256').update(text, 'utf8').digest('hex');
  // const foundSyntax = cachedSyntax[hash];

  // if (foundSyntax) {
  //   return foundSyntax;
  // }

  // todo should be const location = document.uri.toString();
  const location = document.uri.fsPath;
  const resource = textResourceFrom(location, text);
  const syntax = syntaxParse(resource);
  // const corePath = join(__dirname, '/core/lib/@xon/core/test-core.xon');
  // const semanticConfig = createSemanticConfig({corePath});
  semanticParse(syntax);
  // cachedSyntax[hash] = syntax;

  return syntax;
}

export function findNodeByPositionInSyntax(syntax: SyntaxResult, position: Position): Node | Nothing {
  const statement = findStatementNodeByPosition(syntax.statements, position);

  if (!statement) {
    return nothing;
  }

  return findNodeByPosition(statement, position);
}

export function findNodeByPosition(node: Node, position: Position): Node {
  if (!isSyntaxNode(node)) {
    return node;
  }

  const child = node.children.find((x) => {
    const start = convertPosition(x.range.start);
    const stop = convertPosition(x.range.stop);

    return position.isAfterOrEqual(start) && position.isBeforeOrEqual(stop);
  });

  if (!child) {
    return node;
  }

  return findNodeByPosition(child, position);
}

// todo move function to core and optimize (use body last statement for range checking)
export function findStatementNodeByPosition(
  statements: Array2<StatementNode>,
  position: Position,
): StatementNode | Nothing {
  if (statements.length === 0) return nothing;

  for (const statement of statements) {
    const start = convertPosition(statement.range.start);
    const stop = convertPosition(statement.range.stop);

    if (position.isAfterOrEqual(start) && position.isBeforeOrEqual(stop)) {
      return statement;
    }

    const foundInBody = findStatementNodeByPosition(statement.body, position);

    if (foundInBody) {
      return foundInBody;
    }
  }

  return nothing;
}
