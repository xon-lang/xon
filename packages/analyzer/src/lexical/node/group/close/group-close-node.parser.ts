import {
  $AngleCloseNode,
  $BraceCloseNode,
  $BracketCloseNode,
  $ParenCloseNode,
  ANGLE_CLOSE,
  BRACE_CLOSE,
  BRACKET_CLOSE,
  GroupCloseNode,
  PAREN_CLOSE,
} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseGroupCloseNode(source: CharStream): GroupCloseNode | Nothing {
  const angleCloseNode = source.takeWhile(
    $AngleCloseNode,
    (x, i) => ANGLE_CLOSE.at2(i).equals(x),
    ANGLE_CLOSE.count(),
  );

  const parenCloseNode = source.takeWhile(
    $ParenCloseNode,
    (x, i) => PAREN_CLOSE.at2(i).equals(x),
    PAREN_CLOSE.count(),
  );

  const bracketCloseNode = source.takeWhile(
    $BracketCloseNode,
    (x, i) => BRACKET_CLOSE.at2(i).equals(x),
    BRACKET_CLOSE.count(),
  );

  const braceCloseNode = source.takeWhile(
    $BraceCloseNode,
    (x, i) => BRACE_CLOSE.at2(i).equals(x),
    BRACE_CLOSE.count(),
  );

  return angleCloseNode ?? parenCloseNode ?? bracketCloseNode ?? braceCloseNode;
}
