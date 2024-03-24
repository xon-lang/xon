import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {StringNode} from '../../token/string/string-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ImportNode extends SyntaxNode {
  readonly $: $Node.IMPORT;
  readonly operator: OperatorNode;
  readonly location: StringNode;
}

export function importNode(context: SyntaxContext, operator: OperatorNode, location: StringNode): ImportNode {
  const node = syntaxNode($Node.IMPORT, {operator, location});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: ImportNode): Nothing {
  formatBetweenHiddenNodes(context, node.operator, true);
}
