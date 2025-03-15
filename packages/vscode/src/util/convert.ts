import {newTextPosition, newTextRange, TextPosition, TextRange} from '#common';
import {Position, Range, TextDocument} from 'vscode';

export function xonToVsCodeRange(range: TextRange): Range {
  const start = xonToVsCodePosition(range.start);
  const stop = xonToVsCodePosition(range.stop);

  return new Range(start, stop);
}

export function xonToVsCodePosition(position: TextPosition): Position {
  return new Position(position.line, position.column);
}

export function vsCodeToXonRange(document: TextDocument, range: Range): TextRange {
  const start = vsCodeToXonPosition(document, range.start);
  const stop = vsCodeToXonPosition(document, range.end);

  return newTextRange(start, stop);
}

export function vsCodeToXonPosition(document: TextDocument, position: Position): TextPosition {
  const index = document.offsetAt(position);

  return newTextPosition(index, position.line, position.character);
}
