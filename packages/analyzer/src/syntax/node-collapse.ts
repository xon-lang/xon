import {
  collapseAssignInfixNode,
  collapseConditionStatementNode,
  collapsePlusInfixNode,
  collapseTypeInfixNode,
  Node,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, newArrayData, Nothing} from '#common';

export type NodeCollapseFn<T extends Node = Node> = {
  min: Integer;
  collapse: (nodes: ArrayData<Node>, startIndex: Integer) => NodeCollapseResult<T>;
};

export type NodeCollapseResult<T extends Node = Node> = {index: Integer; node: T} | Nothing;

function nodeCollapses(): ArrayData<{isLeftRecursive: boolean; collapses: ArrayData<NodeCollapseFn>}> {
  return newArrayData([
    {
      isLeftRecursive: true,
      collapses: newArrayData([collapsePlusInfixNode()]),
    },
    {
      isLeftRecursive: false,
      collapses: newArrayData([collapseTypeInfixNode(), collapseAssignInfixNode()]),
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

  for (const {isLeftRecursive, collapses} of nodeCollapses()) {
    if (isLeftRecursive) {
      let index = 0;

      while (true) {
        const result = collapses.firstMap(
          ({min, collapse}) => nodes.count() - index >= min && collapse(nodes, index),
        );

        if (!result) {
          break;
        }

        const deleteCount = result.node.children?.count() ?? 0;
        nodes = nodes.replaceItem(result.index, deleteCount, result.node);
        index = result.index + 1;
      }
    } else {
      let index = nodes.count() - 1;

      while (true) {
        const result = collapses.firstMap(({min, collapse}) => index + 1 >= min && collapse(nodes, index));

        if (!result) {
          break;
        }

        const deleteCount = result.node.children?.count() ?? 0;
        nodes = nodes.replaceItem(result.index, deleteCount, result.node);
        index = result.index - 1;
      }
    }
  }

  return nodes;
}

// todo try to join with 'nodeCollapses'
function statementCollapses(): ArrayData<NodeCollapseFn<StatementNode>> {
  return newArrayData([collapseConditionStatementNode()]);
}

// todo try to join with 'collapseNodes'
export function collapseStatements(nodes: ArrayData<StatementNode>): ArrayData<StatementNode> {
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
