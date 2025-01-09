import {
  $AngleCloseNode,
  $CharContentNode,
  ANGLE_CLOSE,
  AngleCloseNode,
  CHAR_CLOSE,
  CHAR_OPEN,
  CharContentNode,
  LexicalAnalyzer,
  lexicalTextRange,
} from '#analyzer';
import {CharStream, newText, Nothing, nothing} from '#common';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = newText(ANGLE_CLOSE);
  const range = analyzer.textReference(text);

  return {$: $AngleCloseNode, text, range};
}

export function charLexicalNodeParse(source: CharStream): CharContentNode | Nothing {
  if (source.take(CHAR_OPEN.count()).equals(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = source.takeWhile((x) => !CHAR_CLOSE.equals(x));
  const range = lexicalTextRange(text, source.position);

  return {$: $CharContentNode, text, range};
}
