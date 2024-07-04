import {OutputChannel, Position, Range, TextDocument} from 'vscode';
import {$, is} from '../../core/$';
import {TypeSemantic} from '../../core/analyzer/semantic/node/type/type-semantic';
import {SemanticAnalyzer, semanticFromResource} from '../../core/analyzer/semantic/semantic-analyzer';
import {textPosition, TextPosition} from '../../core/util/resource/text/text-position';
import {textRange, TextRange} from '../../core/util/resource/text/text-range';
import {textResourceFrom} from '../../core/util/resource/text/text-resource';
import {Nothing, nothing, String2} from '../../lib/types';

export function convertRange(range: TextRange): Range {
  const start = convertPosition(range.start);
  const stop = convertPosition(range.stop);

  return new Range(start, stop);
}

export function convertPosition(position: TextPosition): Position {
  return new Position(position.line, position.column);
}

export function convertVscodeRange(document: TextDocument, range: Range): TextRange {
  const start = convertVscodePosition(document, range.start);
  const stop = convertVscodePosition(document, range.end);

  return textRange(start, stop);
}

export function convertVscodePosition(document: TextDocument, position: Position): TextPosition {
  const index = document.offsetAt(position);

  return textPosition(index, position.line, position.character);
}

export function getDocumentSemantic(document: TextDocument, channel: OutputChannel): SemanticAnalyzer {
  const text = document.getText();
  const location = document.uri.fsPath;
  const resource = textResourceFrom(location, text);

  return semanticFromResource(resource);
}

export function typeSemanticToString(type: TypeSemantic | Nothing): String2 | Nothing {
  if (!type) {
    return nothing;
  }

  if (is(type, $.IdTypeSemantic)) {
    return type.declaration.name;
  }

  return nothing;
}
