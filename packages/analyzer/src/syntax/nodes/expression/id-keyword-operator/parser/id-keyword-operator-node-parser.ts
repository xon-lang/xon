import {
  $AsOperatorNode,
  $ElseKeywordNode,
  $IdToken,
  $IfKeywordNode,
  $ImportKeywordNode,
  $IsOperatorNode,
  $ReturnKeywordNode,
  $TypeKeywordNode,
  AnalyzerContext,
  AS,
  ELSE,
  IdToken,
  IF,
  IMPORT,
  IS,
  KeywordNode,
  OperatorNode,
  RETURN,
  TYPE,
  UNDERSCORE,
} from '#analyzer';
import {
  $KeyValue,
  $Type,
  Dictionary,
  newArrayData,
  newDictionary,
  newKeyValue,
  nothing,
  Nothing,
  Text,
} from '#core';

function getTokenTypeMap(): Dictionary<Text, $Type> {
  return newDictionary(
    newArrayData($KeyValue(), [
      // declarations ???
      newKeyValue(TYPE, $TypeKeywordNode()),
      // modifiers
      // newKeyValue(PUBLIC, $PublicKeywordNode()),
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
): IdToken | KeywordNode | OperatorNode | Nothing {
  const token = context.source.takeWhile(
    $IdToken(),
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || x.equals(UNDERSCORE),
  );

  if (!token) {
    return nothing;
  }

  const $type = getTokenTypeMap().get(token.text);

  if ($type) {
    token.$ = $type;
  }

  return token;
}
