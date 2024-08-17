import {$, is} from '../../../../$';
import {Array2, Nothing, String2} from '../../../../../lib/types';
import {topologicalSort} from '../../../../util/sort/topological-sort';
import {TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {Node} from '../../../node';
import {GroupNode} from '../../../syntax/group/group-node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {unknownTypeFromNode} from '../type/unknown/unknown-type-semantic';
import {DeclarationSemantic} from './declaration-semantic';
import {nominalTypeDeclarationSemantic} from './type/nominal/nominal-type-declaration-semantic';
import {nominalTypeDeclarationSemanticHandle} from './type/nominal/nominal-type-declaration-semantic-handle';
import {structuralTypeDeclarationSemantic} from './type/structural/structural-type-declaration-semantic';
import {structuralTypeDeclarationSemanticHandle} from './type/structural/structural-type-declaration-semantic-handle';
import {unknownDeclarationSemantic} from './unknown/unknown-declaration-semantic';
import {attributeValueDeclarationSemantic} from './value/attribute/attribute-value-declaration-semantic';
import {attributeValueDeclarationSemanticHandle} from './value/attribute/attribute-value-declaration-semantic-handle';

export function parameterDeclarationsParse(
  analyzer: SemanticAnalyzer,
  parametersNode: GroupNode,
): Array2<DeclarationSemantic> {
  return declarationsParse(
    analyzer,
    parametersNode.items.map((x) => x.value ?? x),
  );
}

export function declarationsParse(
  analyzer: SemanticAnalyzer,
  nodes: Array2<Node>,
): Array2<DeclarationSemantic> {
  const declarations = nodes.map((node) => {
    if (!is(node, $.DeclarationNode)) {
      return unknownDeclarationSemantic(node, unknownTypeFromNode(analyzer, node));
    }

    const declaration = createDeclaration(analyzer, node);
    node.id.semantic = declaration;
    analyzer.declarationManager.add(declaration);

    return declaration;
  });

  const declarationNodes = nodes.filter((x) => is(x, $.DeclarationNode));
  const dependencies = declarationNodeDependencies(declarationNodes);
  const {order, cycle} = topologicalSort(dependencies);

  if (cycle.length > 0) {
    throw new Error(`Not implemented: cycle dependencies '${cycle.join(', ')}'`);
  }

  const nodesDict = declarationNodes.toDictionary((x) => x.id.text.toString());

  for (const name of order) {
    declarationDeepParse(analyzer, nodesDict[name]);
  }

  return declarations;
}

function declarationDeepParse(analyzer: SemanticAnalyzer, node: DeclarationNode): void {
  const semantic = node.id?.semantic;

  if (!is(semantic, $.DeclarationSemantic)) {
    return;
  }

  analyzer.pushDeclarationScope();

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    nominalTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    structuralTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    attributeValueDeclarationSemanticHandle(analyzer, semantic, node);
  }

  analyzer.popDeclarationScope();
}

function declarationNodeDependencies(nodes: Array2<DeclarationNode>): Record<string, Array2<string>> {
  return nodes.reduce((o: Record<String2, Array2<String2>>, node) => {
    const name = node.id.text.toString();

    if (!o[name]) {
      o[name] = [];
    }

    const dependencies = nodeDependencies(node.type ?? node.assign);

    for (const dependency of dependencies) {
      if (!o[name].includes(dependency)) {
        o[name].push(dependency);
      }
    }

    return o;
  }, {});
}

function nodeDependencies(node: Node | Nothing): Array2<String2> {
  if (!node) {
    return [];
  }

  // todo add other types (literals, operators, ...)
  if (is(node, $.IdNode)) {
    return [node.text.toString()];
  }

  if (is(node, $.SyntaxNode)) {
    return node.children.flatMap(nodeDependencies);
  }

  return [];
}

function createDeclaration(analyzer: SemanticAnalyzer, node: DeclarationNode): DeclarationSemantic {
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();
  const type = unknownTypeFromNode(analyzer, node);

  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      return structuralTypeDeclarationSemantic(node.id, documentation, modifier, name, type);
    }

    return nominalTypeDeclarationSemantic(node.id, documentation, modifier, name, type);
  }

  return attributeValueDeclarationSemantic(node.id, documentation, modifier, name, type);
}
