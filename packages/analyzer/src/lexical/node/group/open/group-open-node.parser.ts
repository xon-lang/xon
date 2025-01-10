import {
  $AngleOpenNode,
  $BraceOpenNode,
  $BracketOpenNode,
  $ParenOpenNode,
  ANGLE_OPEN,
  BRACE_OPEN,
  BRACKET_OPEN,
  GroupOpenNode,
  PAREN_OPEN,
} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseGroupOpenNode(source: CharStream): GroupOpenNode | Nothing {
  const angleOpenNode = source.takeWhile(
    $AngleOpenNode,
    (x, i) => ANGLE_OPEN.at2(i).equals(x),
    ANGLE_OPEN.count(),
  );

  const parenOpenNode = source.takeWhile(
    $ParenOpenNode,
    (x, i) => PAREN_OPEN.at2(i).equals(x),
    PAREN_OPEN.count(),
  );

  const bracketOpenNode = source.takeWhile(
    $BracketOpenNode,
    (x, i) => BRACKET_OPEN.at2(i).equals(x),
    BRACKET_OPEN.count(),
  );

  const braceOpenNode = source.takeWhile(
    $BraceOpenNode,
    (x, i) => BRACE_OPEN.at2(i).equals(x),
    BRACE_OPEN.count(),
  );

  return angleOpenNode ?? parenOpenNode ?? bracketOpenNode ?? braceOpenNode;
}
