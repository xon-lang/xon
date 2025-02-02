import {
  $IdNode,
  $IfKeywordNode,
  $IsOperatorNode,
  $PublicKeywordNode,
  $TypeKeywordNode,
  AnalyzerContext,
  IdNode,
  IF,
  IS,
  KeywordNode,
  PUBLIC,
  TYPE,
  UNDERSCORE,
} from '#analyzer';
import {Dictionary, newArrayData, newDictionary, newKeyValue, nothing, Nothing, Text} from '#common';
import {$Type} from '#typing';

const wordMap: Dictionary<Text, $Type> = newDictionary(
  newArrayData([
    // declarations
    newKeyValue(TYPE, $TypeKeywordNode),
    // modifiers
    newKeyValue(PUBLIC, $PublicKeywordNode),
    // controls
    newKeyValue(IF, $IfKeywordNode),
    // operators
    newKeyValue(IS, $IsOperatorNode),
  ]),
);

export function parseIdKeywordNode(context: AnalyzerContext): IdNode | KeywordNode | Nothing {
  const node = context.source.takeWhile(
    $IdNode,
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || UNDERSCORE.equals(x),
  );

  if (!node) {
    return nothing;
  }

  const $Type = wordMap.get(node.text);

  if ($Type) {
    node.$ = $Type;

    return node;
  }

  if (node) {
    node.canBeExpression = true;
  }

  return node;
}
