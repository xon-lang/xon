import {
  $AsOperatorNode,
  $ElseKeywordNode,
  $IdNode,
  $IfKeywordNode,
  $ImportKeywordNode,
  $IsOperatorNode,
  $PublicKeywordNode,
  $ReturnKeywordNode,
  $TypeKeywordNode,
  AnalyzerContext,
  AS,
  ELSE,
  IdNode,
  IF,
  IMPORT,
  IS,
  KeywordNode,
  OperatorNode,
  PUBLIC,
  RETURN,
  semantifyIdNode,
  TYPE,
  UNDERSCORE,
} from '#analyzer';
import {Dictionary, newArrayData, newDictionary, newKeyValue, nothing, Nothing, Text} from '#common';
import {$Type} from '#typing';

function getTokenTypeMap(): Dictionary<Text, $Type> {
  return newDictionary(
    newArrayData([
      // declarations ???
      newKeyValue(TYPE, $TypeKeywordNode()),
      // modifiers
      newKeyValue(PUBLIC, $PublicKeywordNode()),
      // controls
      newKeyValue(IMPORT, $ImportKeywordNode()),
      newKeyValue(IF, $IfKeywordNode()),
      newKeyValue(ELSE, $ElseKeywordNode()),
      newKeyValue(RETURN, $ReturnKeywordNode()),
      // operators
      newKeyValue(AS, $AsOperatorNode()),
      newKeyValue(IS, $IsOperatorNode()),
    ]),
  );
}

export function parseIdKeywordOperatorNode(
  context: AnalyzerContext,
): IdNode | KeywordNode | OperatorNode | Nothing {
  const node = context.source.takeWhile(
    $IdNode(),
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || UNDERSCORE.equals(x),
  );

  if (!node) {
    return nothing;
  }

  node.semantify = semantifyIdNode;

  const $Type = getTokenTypeMap().get(node.text);

  if ($Type) {
    node.$ = $Type;

    return node;
  }

  if (node) {
    node.canBeExpression = true;
  }

  return node;
}
