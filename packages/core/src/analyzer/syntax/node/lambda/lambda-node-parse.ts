import {Integer, newArrayData, nothing, Nothing} from '#common';
import {
  $BraceGroupNode,
  $IdNode,
  $InvokeNode,
  $OperatorNode,
  $ParenGroupNode,
  ASSIGN,
  AssignNode,
  assignNode,
  GroupNode,
  InvokeNode,
  lambdaNode,
  Node,
  nodeFindMap,
  partialToDeclaration,
  SyntaxAnalyzer,
  SyntaxParseFn,
  TYPE,
  TypeNode,
  typeNode,
} from '#core';
import {is} from '#typing';

export function lambdaNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[]) => {
    const parts = getLambdaParts(analyzer, nodes);

    if (!parts || !parts.parameters) {
      return nothing;
    }

    if (parts.generics) {
      parts.generics.hiddenNodes = newArrayData(parts.genericsHiddenNodes ?? []);
    }

    const node = lambdaNode(analyzer, parts.generics, parts.parameters, parts.type, parts.assign);

    return {node, index: parts.spliceIndex, deleteCount: parts.deleteCount};
  };
}

function getLambdaParts(
  analyzer: SyntaxAnalyzer,
  nodes: Node[],
):
  | {
      spliceIndex: Integer;
      deleteCount: Integer;
      genericsHiddenNodes?: Node[] | Nothing;
      generics?: GroupNode | Nothing;
      parameters?: GroupNode | Nothing;
      type?: TypeNode | Nothing;
      assign?: AssignNode | Nothing;
    }
  | Nothing {
  const typeOperatorFound = nodeFindMap(nodes, 0, false, (node, index, nodes) => {
    if (
      is(node, $OperatorNode) &&
      node.text.equals(TYPE) &&
      nodes[index + 1].isExpression &&
      (is(nodes[index - 1], $ParenGroupNode) ||
        (is(nodes[index - 1], $InvokeNode) &&
          is((nodes[index - 1] as InvokeNode).instance, $BraceGroupNode) &&
          is((nodes[index - 1] as InvokeNode).group, $ParenGroupNode)))
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (typeOperatorFound) {
    const header = getGenericsParameters(analyzer, nodes[typeOperatorFound.index - 1]);
    const typeValue = nodes[typeOperatorFound.index + 1];
    const assignOperator = nodes[typeOperatorFound.index + 2];
    const assignValue = nodes[typeOperatorFound.index + 3];
    const type = typeNode(analyzer, typeOperatorFound.node, typeValue);

    if (is(assignOperator, $OperatorNode) && assignOperator.text.equals(ASSIGN) && assignValue.isExpression) {
      const assign = assignNode(analyzer, assignOperator, assignValue);

      return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 5, ...header, type, assign};
    }

    return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 3, ...header, type};
  }

  const assignOperatorFound = nodeFindMap(nodes, 0, false, (node, index, nodes) => {
    if (
      is(node, $OperatorNode) &&
      node.text.equals(ASSIGN) &&
      nodes[index + 1].isExpression &&
      (is(nodes[index - 1], $ParenGroupNode) ||
        (is(nodes[index - 1], $InvokeNode) &&
          is((nodes[index - 1] as InvokeNode).instance, $BraceGroupNode) &&
          is((nodes[index - 1] as InvokeNode).group, $ParenGroupNode)))
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (assignOperatorFound) {
    const header = getGenericsParameters(analyzer, nodes[assignOperatorFound.index - 1]);
    const assignValue = nodes[assignOperatorFound.index + 1];
    const assign = assignNode(analyzer, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  return nothing;
}

function getGenericsParameters(
  analyzer: SyntaxAnalyzer,
  node: Node,
): {
  genericsHiddenNodes?: Node[] | Nothing;
  generics?: GroupNode | Nothing;
  parameters?: GroupNode | Nothing;
} {
  if (is(node, $ParenGroupNode)) {
    parseDeclarations(analyzer, node);

    return {parameters: node};
  }

  if (is(node, $InvokeNode) && is(node.instance, $BraceGroupNode)) {
    parseDeclarations(analyzer, node.instance);
    parseDeclarations(analyzer, node.group);

    return {genericsHiddenNodes: node.hiddenNodes?.toNativeArray(), generics: node.instance, parameters: node.group};
  }

  return {};
}

function parseDeclarations(analyzer: SyntaxAnalyzer, group: GroupNode): void {
  for (const item of group.items) {
    if (is(item.value, $IdNode)) {
      item.value = partialToDeclaration(analyzer, {id: item.value});
    }
  }
}
