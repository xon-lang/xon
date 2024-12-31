import {
  ArrayData,
  Dictionary,
  newArrayData,
  newDictionary,
  newKeyValue,
  newText,
  Nothing,
  Text,
  topologicalSort,
} from '#common';
import {
  $AngleGroupNode,
  $AttributeValueDeclarationSemantic,
  $DeclarationNode,
  $DeclarationSemantic,
  $IdNode,
  $NominalTypeDeclarationSemantic,
  $ParameterTypeDeclarationSemantic,
  $ParameterValueDeclarationSemantic,
  $StructuralTypeDeclarationSemantic,
  $SyntaxNode,
  attributeValueDeclarationSemantic,
  attributeValueDeclarationSemanticHandle,
  DeclarationNode,
  DeclarationSemantic,
  GroupNode,
  Node,
  nominalTypeDeclarationSemantic,
  nominalTypeDeclarationSemanticHandle,
  ParameterTypeDeclarationSemantic,
  parameterTypeDeclarationSemantic,
  parameterTypeDeclarationSemanticHandle,
  ParameterValueDeclarationSemantic,
  parameterValueDeclarationSemantic,
  parameterValueDeclarationSemanticHandle,
  SemanticAnalyzer,
  structuralTypeDeclarationSemantic,
  structuralTypeDeclarationSemanticHandle,
  TYPE_MODIFIER,
} from '#core';
import {is} from '#typing';

export function statementDeclarationsParse(
  analyzer: SemanticAnalyzer,
  nodes: DeclarationNode[],
): DeclarationSemantic[] {
  const declarations = nodes.map((node) => {
    const declaration = createDeclarationSemantic(analyzer, node);
    node.id.semantic = declaration;
    analyzer.declarationManager.add(declaration);

    return declaration;
  });

  declarationsParse(analyzer, newArrayData(nodes));

  return declarations;
}

export function parameterDeclarationsParse(
  analyzer: SemanticAnalyzer,
  groupNode: GroupNode,
): (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[] {
  const declarationNodes = groupNode.items.filterMap((node) => {
    if (is(node.value, $DeclarationNode)) {
      return node.value;
    }

    const {reference} = node.value ?? node;
    analyzer.diagnosticManager.addPredefinedDiagnostic(reference, (x) => x.notImplemented());
  });

  const declarations = declarationNodes.map((node) => {
    const isParameterType = is(groupNode, $AngleGroupNode);
    const declaration = isParameterType
      ? createParameterTypeDeclaration(analyzer, node)
      : createParameterValueDeclaration(analyzer, node);

    node.id.semantic = declaration;
    analyzer.declarationManager.add(declaration);

    return declaration;
  });

  declarationsParse(analyzer, newArrayData(declarationNodes));

  return declarations;
}

function declarationsParse(analyzer: SemanticAnalyzer, nodes: ArrayData<DeclarationNode>): void {
  const dependencies = declarationNodeDependencies(nodes);
  const {order, cycle} = topologicalSort(dependencies);

  if (!cycle.isEmpty()) {
    throw new Error(`Not implemented: cycle dependencies '${newText(cycle, newText(',')).toNativeString()}'`);
  }

  const nodesDict = newDictionary(nodes.map((x) => newKeyValue(x.id.text, x)));

  for (const name of order) {
    declarationDeepParse(analyzer, nodesDict.get2(name));
  }
}

function declarationDeepParse(analyzer: SemanticAnalyzer, node: DeclarationNode): void {
  const semantic = node.id?.semantic;

  if (!is(semantic, $DeclarationSemantic)) {
    return;
  }

  if (is(semantic, $NominalTypeDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    nominalTypeDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $StructuralTypeDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    structuralTypeDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $ParameterTypeDeclarationSemantic)) {
    parameterTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $AttributeValueDeclarationSemantic)) {
    analyzer.pushDeclarationScope();
    attributeValueDeclarationSemanticHandle(analyzer, semantic, node);
    analyzer.popDeclarationScope();
  } else if (is(semantic, $ParameterValueDeclarationSemantic)) {
    parameterValueDeclarationSemanticHandle(analyzer, semantic, node);
  }
}

function declarationNodeDependencies(nodes: ArrayData<DeclarationNode>): Dictionary<Text, ArrayData<Text>> {
  return nodes.reduce((o, node) => {
    const name = node.id.text;

    if (!o.get(name)) {
      o.set(name, newArrayData());
    }

    const dependencies = nodeDependencies(node.type ?? node.assign);

    for (const dependency of dependencies) {
      if (!o.get(name)?.hasItem(dependency)) {
        o.get(name)?.addLastItem(dependency);
      }
    }

    return o;
  }, newDictionary() as Dictionary<Text, ArrayData<Text>>);
}

function nodeDependencies(node: Node | Nothing): ArrayData<Text> {
  if (!node) {
    return newArrayData();
  }

  // todo add other types (literals, operators, ...)
  if (is(node, $IdNode)) {
    return newArrayData([node.text]);
  }

  if (is(node, $SyntaxNode)) {
    return newArrayData(node.children.flatMap((x) => nodeDependencies(x).toNativeArray()));
  }

  return newArrayData();
}

function createDeclarationSemantic(analyzer: SemanticAnalyzer, node: DeclarationNode): DeclarationSemantic {
  const documentation = node.documentation?.description?.text.setPadding(0).trim();
  const modifier = node.modifier?.text;
  const name = node.id.text;

  if (modifier?.equals(TYPE_MODIFIER)) {
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
  const documentation = node.documentation?.description?.text.setPadding(0).trim();
  const modifier = node.modifier?.text;
  const name = node.id.text;

  return parameterTypeDeclarationSemantic(analyzer, node, documentation, modifier, name);
}

function createParameterValueDeclaration(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): ParameterValueDeclarationSemantic {
  const documentation = node.documentation?.description?.text.setPadding(0).trim();
  const modifier = node.modifier?.text;
  const name = node.id.text;

  return parameterValueDeclarationSemantic(analyzer, node, documentation, modifier, name);
}
