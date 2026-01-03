import {
  $AssignOperatorNode,
  $ExclamationOperatorNode,
  $PlusOperatorNode,
  $SymbolOperatorNode,
  $TypeOperatorNode,
  $UnionOperatorNode,
  AnalyzerContext,
  ASSIGN,
  COLON,
  EXCLAMATION,
  OperatorNode,
  OR,
  PLUS,
  SYMBOL_OPERATORS,
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

export const OPERATORS = SYMBOL_OPERATORS.sort((a, b) => a.count() - b.count());

function getTokenTypeMap(): Dictionary<Text, $Type> {
  return newDictionary(
    newArrayData($KeyValue(), [
      newKeyValue(PLUS, $PlusOperatorNode()),
      newKeyValue(OR, $UnionOperatorNode()),
      newKeyValue(ASSIGN, $AssignOperatorNode()),
      newKeyValue(COLON, $TypeOperatorNode()),
      newKeyValue(EXCLAMATION, $ExclamationOperatorNode()),
    ]),
  );
}

export function parseSymbolOperatorNode(context: AnalyzerContext): OperatorNode | Nothing {
  const node = OPERATORS.lastMap((operator) => context.source.takeText($SymbolOperatorNode(), operator));

  if (!node) {
    return nothing;
  }

  const $Type = getTokenTypeMap().get(node.getText());

  if ($Type) {
    node.$ = $Type;
  }

  return node;
}
