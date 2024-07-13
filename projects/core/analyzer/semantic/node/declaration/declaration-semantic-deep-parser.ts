import {$, is} from '../../../../$';
import {Nothing, nothing} from '../../../../../lib/types';
import {DocumentationNode} from '../../../syntax/documentation/documentation-node';
import {
  DeclarationNode,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../../syntax/node/declaration/declaration-node';
import {createDeclarationManager} from '../../declaration-manager';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {documentationIdSemantic} from '../documentation/documentation-id-semantic';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {valueSemanticParse} from '../value/value-semantic-parser';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationsParse} from './declaration-semantic-parser';

export function declarationDeepParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const semantic = node.id?.semantic;

  if (!is(semantic, $.DeclarationSemantic)) {
    return nothing;
  }

  analyzer.pushDeclarationScope();

  genericsParse(analyzer, semantic, node);
  parametersParse(analyzer, semantic, node);
  typeParse(analyzer, semantic, node);
  valueParse(analyzer, semantic, node);
  attributesParse(analyzer, semantic, node);

  analyzer.popDeclarationScope();

  return semantic;
}

function genericsParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.generics) {
    return;
  }

  const syntaxGenerics = getDeclarationGenerics(node);
  declaration.generics = declarationsParse(analyzer, syntaxGenerics);

  if (node.documentation) {
    for (const generic of declaration.generics.filter((x) => !!x)) {
      parameterDocumentationHandle(analyzer, node.documentation, generic);
    }
  }
}

function parametersParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.parameters) {
    return;
  }

  const syntaxParameters = getDeclarationParameters(node);
  declaration.parameters = declarationsParse(analyzer, syntaxParameters);

  if (node.documentation) {
    for (const parameter of declaration.parameters.filter((x) => !!x)) {
      parameterDocumentationHandle(analyzer, node.documentation, parameter);
    }
  }
}

function typeParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.type?.value) {
    return;
  }

  const type = typeSemanticParse(analyzer, node.type.value);

  if (type) {
    declaration.type = type;
  } else {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.type.range, (x) => x.cannotResolveType());
  }
}

function valueParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.assign?.value) {
    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(analyzer, node.assign.value);

  if (!declaration.type) {
    if (value?.type) {
      declaration.type = value.type;
    }
  } else if (!value?.type || !value.type.is(declaration.type)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.range, (x) => x.wrongType());
  }
}

function attributesParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.attributes) {
    return;
  }

  const attributes = declarationsParse(analyzer, node.attributes);
  declaration.attributes = createDeclarationManager();

  for (const attribute of attributes) {
    if (!is(attribute, $.DeclarationSemantic)) {
      continue;
    }

    declaration.attributes.add(attribute);
  }
}

function parameterDocumentationHandle(
  analyzer: SemanticAnalyzer,
  documentation: DocumentationNode,
  parameter: DeclarationSemantic,
): void {
  const filteredItems = documentation.items.filter((x) => x.id.text === parameter.name);

  for (const item of filteredItems) {
    const reference = analyzer.createReference(item.id);

    parameter.usages.push(reference);
    item.id.semantic = documentationIdSemantic(analyzer, reference, parameter);
  }

  const description = filteredItems.first()?.description?.text.setPadding(0).trim();
  parameter.documentation = description;
}
