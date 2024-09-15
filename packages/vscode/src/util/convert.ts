import { TextRange, TextPosition, textRange, textPosition } from '#core';
import {Position, Range, TextDocument} from 'vscode';

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
