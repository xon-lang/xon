import {
  $PlusInfixNode,
  collapseConditionStatementNode,
  collapseInfixNode,
  collapseInvokeNode,
  collapseMemberNode,
  Node,
  PLUS,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Integer, newArrayData, newDictionary, newKeyValue, Nothing} from '#common';

export type NodeCollapseFn<T extends Node = Node> = (
  nodes: ArrayData<T>,
  startIndex: Integer,
) => NodeCollapseResult<T>;
export type NodeCollapseResult<T extends Node = Node> = {index: Integer; node: T} | Nothing;

function nodeCollapses(): ArrayData<{min: Integer; collapse: NodeCollapseFn}> {
  return newArrayData([
    {min: 2, collapse: collapseInvokeNode},
    {min: 2, collapse: collapseMemberNode},
    {
      min: 3,
      collapse: collapseInfixNode(newDictionary(newArrayData([newKeyValue(PLUS, $PlusInfixNode)])), true),
    },
  ]);
}

// {min: 2, parse: importNodeParse(IMPORT, false)},
// {min: 2, parse: memberNodeParse(newArrayData([MEMBER, META_MEMBER]))},
// {min: 2, parse: invokeNodeParse()},
// {min: 2, parse: prefixNodeParse(newArrayData([REST, PLUS, MINUS, PLUS, NOT]), true)},
// {min: 2, parse: postfixNodeParse(newArrayData([OPTIONAL, PROMISE]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([POW]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([MULTIPLY, DIVIDE, MOD]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([PLUS, MINUS]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([RANGE]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([EQUALS, NOT_EQUALS]), true)},
// {min: 3, parse: infixNodeParse(OPERATOR_KEYWORDS, true)},
// {min: 3, parse: infixNodeParse(newArrayData([INTERSECTION]), true)},
// {min: 3, parse: infixNodeParse(newArrayData([UNION, COMPLEMENT]), true)},
// {min: 2, parse: prefixNodeParse(MODIFIER_KEYWORDS, false)},
// {min: 2, parse: returnNodeParse(RETURN, false)},
// // todo remove and use another node than 'prefixNodeParse' for 'CONTROL_KEYWORDS'
// {min: 2, parse: prefixNodeParse(CONTROL_KEYWORDS, false)},
// {min: 1, parse: lambdaNodeParse()},
// {min: 1, parse: declarationNodeParse()},
// {min: 3, parse: assignmentNodeParse()},

export function collapseNodes(nodes: ArrayData<Node>): ArrayData<Node> {
  if (nodes.isEmpty()) {
    return nodes;
  }

  for (const {min, collapse} of nodeCollapses()) {
    if (nodes.count() < min) {
      continue;
    }

    let index = 0;

    while (true) {
      const result = collapse(nodes, index);

      if (!result) {
        break;
      }

      const deleteCount = result.node.children?.count() ?? 0;
      nodes = nodes.replaceItem(result.index, deleteCount, result.node);
      index = result.index + 1;

      if (index >= nodes.count() || nodes.count() < min) {
        break;
      }
    }
  }

  return nodes;
}

// todo try to join with 'nodeCollapses'
function statementCollapses(): ArrayData<{min: Integer; collapse: NodeCollapseFn<StatementNode2>}> {
  return newArrayData([{min: 1, collapse: collapseConditionStatementNode}]);
}

// todo try to join with 'collapseNodes'
export function collapseStatements(nodes: ArrayData<StatementNode2>): ArrayData<StatementNode2> {
  if (nodes.isEmpty()) {
    return nodes;
  }

  for (const {min, collapse} of statementCollapses()) {
    if (nodes.count() < min) {
      continue;
    }

    let index = 0;

    while (true) {
      const result = collapse(nodes, index);

      if (!result) {
        break;
      }

      const deleteCount = result.node.children?.count() ?? 0;
      nodes = nodes.replaceItem(result.index, deleteCount, result.node);
      index = result.index + 1;

      if (index >= nodes.count() || nodes.count() < min) {
        break;
      }
    }
  }

  return nodes;
}
