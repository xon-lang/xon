import {OutputChannel, Position, Range, TextDocument} from 'vscode';
import {$Node, Node, is} from '../../core/analyzer/node';
import {$Semantic, semanticIs} from '../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {TypeSemantic} from '../../core/analyzer/semantic/node/type/type-semantic';
import {semanticParse} from '../../core/analyzer/semantic/semantic-analyzer';
import {syntaxParse} from '../../core/analyzer/syntax-analyzer';
import {SyntaxResult} from '../../core/analyzer/syntax-context';
import {SyntaxNode} from '../../core/analyzer/syntax/node/syntax-node';
import {StatementNode} from '../../core/analyzer/syntax/statement/statement-node';
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
  if (!is<SyntaxNode>(node, $Node.SYNTAX)) {
    return node;
  }

  const child = node.children.find((x) => convertRange(x.range).contains(position));

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

export function typeSemanticToString(type: TypeSemantic | Nothing): String2 | Nothing {
  if (!type) {
    return nothing;
  }

  if (semanticIs<IdTypeSemantic>(type, $Semantic.ID_TYPE)) {
    return type.declaration.name;
  }

  return nothing;
}
