import {$, is} from '../../../../$';
import {topologicalSort} from '../../../../../../lib/src/sort/topological-sort';
import {Nothing, String2} from '../../../../../../lib/src/types';
import {TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {Node} from '../../../node';
import {GroupNode} from '../../../syntax/group/group-node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from './declaration-semantic';
import {nominalTypeDeclarationSemantic} from './type/nominal/nominal-type-declaration-semantic';
import {nominalTypeDeclarationSemanticHandle} from './type/nominal/nominal-type-declaration-semantic-handle';
import {
  ParameterTypeDeclarationSemantic,
  parameterTypeDeclarationSemantic,
} from './type/parameter/parameter-type-declaration-semantic';
import {parameterTypeDeclarationSemanticHandle} from './type/parameter/parameter-type-declaration-semantic-handle';
import {structuralTypeDeclarationSemantic} from './type/structural/structural-type-declaration-semantic';
import {structuralTypeDeclarationSemanticHandle} from './type/structural/structural-type-declaration-semantic-handle';
import {attributeValueDeclarationSemantic} from './value/attribute/attribute-value-declaration-semantic';
import {attributeValueDeclarationSemanticHandle} from './value/attribute/attribute-value-declaration-semantic-handle';
import {
  ParameterValueDeclarationSemantic,
  parameterValueDeclarationSemantic,
} from './value/parameter/parameter-value-declaration-semantic';
import {parameterValueDeclarationSemanticHandle} from './value/parameter/parameter-value-declaration-semantic-handle';

export function statementDeclarationsParse(analyzer: SemanticAnalyzer, nodes: Node[]): DeclarationSemantic[] {
  const declarationNodes = nodes.filter((node) => is(node, $.DeclarationNode));
  const declarations = declarationNodes.map((node) => {
    const declaration = createStatementDeclaration(analyzer, node);
    node.id.semantic = declaration;
    analyzer.declarationManager.add(declaration);

    return declaration;
  });

  declarationsParse(analyzer, declarationNodes);

  return declarations;
}

export function parameterDeclarationsParse(
  analyzer: SemanticAnalyzer,
  groupNode: GroupNode,
): (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[] {
  const declarationNodes = groupNode.items.filterMap((node) => {
    if (is(node.value, $.DeclarationNode)) {
      return node.value;
    }

    const {reference} = node.value ?? node;
    analyzer.diagnosticManager.addPredefinedDiagnostic(reference, (x) => x.notImplemented());
  });

  const declarations = declarationNodes.map((node) => {
    const isParameterType = is(groupNode, $.AngleGroupNode);
    const declaration = isParameterType
      ? createParameterTypeDeclaration(analyzer, node)
      : createParameterValueDeclaration(analyzer, node);

    node.id.semantic = declaration;
    analyzer.declarationManager.add(declaration);

    return declaration;
  });

  declarationsParse(analyzer, declarationNodes);

  return declarations;
}

function declarationsParse(analyzer: SemanticAnalyzer, nodes: DeclarationNode[]): void {
  const dependencies = declarationNodeDependencies(nodes);
  const {order, cycle} = topologicalSort(dependencies);

  if (cycle.length > 0) {
    throw new Error(`Not implemented: cycle dependencies '${cycle.join(', ')}'`);
  }

  const nodesDict = nodes.toDictionary((x) => x.id.text.toString());

  for (const name of order) {
    declarationDeepParse(analyzer, nodesDict[name]);
  }
}

function declarationDeepParse(analyzer: SemanticAnalyzer, node: DeclarationNode): void {
  const semantic = node.id?.semantic;

  if (!is(semantic, $.DeclarationSemantic)) {
    return;
  }

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    nominalTypeDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    structuralTypeDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $.ParameterTypeDeclarationSemantic)) {
    parameterTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    attributeValueDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $.ParameterValueDeclarationSemantic)) {
    parameterValueDeclarationSemanticHandle(analyzer, semantic, node);
  }
}

function declarationNodeDependencies(nodes: DeclarationNode[]): Record<string, string[]> {
  return nodes.reduce((o: Record<String2, String2[]>, node) => {
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

function nodeDependencies(node: Node | Nothing): String2[] {
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

function createStatementDeclaration(analyzer: SemanticAnalyzer, node: DeclarationNode): DeclarationSemantic {
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();

  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      return structuralTypeDeclarationSemantic(analyzer, node, documentation, modifier, name);
    }

    return nominalTypeDeclarationSemantic(analyzer, node, documentation, modifier, name);
  }

  return attributeValueDeclarationSemantic(analyzer, node, documentation, modifier, name);
}

function createParameterTypeDeclaration(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): ParameterTypeDeclarationSemantic {
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();

  return parameterTypeDeclarationSemantic(analyzer, node, documentation, modifier, name);
}

function createParameterValueDeclaration(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): ParameterValueDeclarationSemantic {
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();

  return parameterValueDeclarationSemantic(analyzer, node, documentation, modifier, name);
}
