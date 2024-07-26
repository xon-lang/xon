import {$} from '../../../$';
import {Array2, Nothing} from '../../../../lib/types';
import '../../../util/extension';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {CloseNode, CloseNodeType} from '../../lexical/node/close/close-node';
import {OpenNode, OpenNodeType} from '../../lexical/node/open/open-node';
import {ExpressionNode} from '../../node';
import {SyntaxNode} from '../node/syntax-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {ItemNode} from './item-node';

export type GroupNodeType = $.ParenGroupNode | $.BracketGroupNode | $.BraceGroupNode | $.AngleGroupNode;

export type GroupNode<
  GroupType extends GroupNodeType = GroupNodeType,
  OpenType extends OpenNodeType = OpenNodeType,
  CloseType extends CloseNodeType = CloseNodeType,
> = SyntaxNode<GroupType> &
  ExpressionNode & {
    open: OpenNode<OpenType>;
    items: Array2<ItemNode>;
    close: CloseNode<CloseType> | Nothing;
  };

export function groupNode<
  GroupType extends GroupNodeType,
  OpenType extends OpenNodeType,
  CloseType extends CloseNodeType,
>(
  analyzer: SyntaxAnalyzer,
  $: GroupType,
  open: OpenNode<OpenType>,
  items: Array2<ItemNode>,
  close: CloseNode<CloseType> | Nothing,
): GroupNode<GroupType, OpenType, CloseType> {
  const children = close ? [open, ...items, close] : [open, ...items];

  const node: GroupNode<GroupType, OpenType, CloseType> = {
    $,
    range: rangeFromNodes(children),
    children,
    open,
    items,
    close,
  };

  children.forEach((x) => (x.parent = node));

  validate(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: GroupNode): void {
  if (!node.close) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.open.range, (x) =>
      x.expectCloseToken(node.open.text.toString()),
    );
  }

  // if(node.items.length>1 && !node.items[0].value){
  //   context.diagnosticManager.addPredefinedDiagnostic(node.range, (x)=>x.unexpectedExpression());
  // }

  for (const item of node.items.slice(0, -1)) {
    if (!item.value) {
      analyzer.diagnosticManager.addPredefinedDiagnostic((item.comma ?? node.open).range, (x) =>
        x.unexpectedExpression(),
      );
    }
  }
}
