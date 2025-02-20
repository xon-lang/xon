import {
  $AssignOperatorNode,
  $ExclamationOperatorNode,
  $PlusOperatorNode,
  $SymbolOperatorNode,
  $TypeOperatorNode,
  AnalyzerContext,
  ASSIGN,
  COLON,
  EXCLAMATION,
  OperatorNode,
  PLUS,
  SYMBOL_OPERATORS,
} from '#analyzer';
import {Dictionary, newArrayData, newDictionary, newKeyValue, nothing, Nothing, Text} from '#common';
import {$Type} from '#typing';

export const OPERATORS = SYMBOL_OPERATORS.sort((a, b) => a.count() - b.count());

function getTokenTypeMap(): Dictionary<Text, $Type> {
  return newDictionary(
    newArrayData([
      newKeyValue(PLUS, $PlusOperatorNode()),
      newKeyValue(ASSIGN, $AssignOperatorNode()),
      newKeyValue(COLON, $TypeOperatorNode()),
      newKeyValue(EXCLAMATION, $ExclamationOperatorNode()),
    ]),
  );
}

export function parseSymbolOperatorNode(context: AnalyzerContext): OperatorNode | Nothing {
  const node = OPERATORS.lastMap((o) =>
    context.source.takeWhile($SymbolOperatorNode(), (x, i) => o.at(i)?.equals(x), o.count()),
  );

  if (!node) {
    return nothing;
  }

  const $Type = getTokenTypeMap().get(node.text);

  if ($Type) {
    node.$ = $Type;
  }

  return node;
}
