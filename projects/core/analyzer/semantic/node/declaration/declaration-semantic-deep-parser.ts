import {$, is} from '../../../../$';
import {Nothing, nothing} from '../../../../../lib/types';
import {DocumentationNode} from '../../../syntax/documentation/documentation-node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {createDeclarationManager} from '../../declaration-manager';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {documentationIdSemantic} from '../documentation/documentation-id-semantic';
import {functionTypeSemantic} from '../type/function/function-type-semantic';
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

  // todo should we create attributes here ???
  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    semantic.attributes = createDeclarationManager();
  }

  analyzer.usingDeclarationScope(() => genericsParse(analyzer, semantic, node));
  analyzer.usingDeclarationScope(() => parametersParse(analyzer, semantic, node));
  typeParse(analyzer, semantic, node);
  valueParse(analyzer, semantic, node);
  analyzer.usingDeclarationScope(() => attributesParse(analyzer, semantic, node));

  return semantic;
}

function typeParse(analyzer: SemanticAnalyzer, semantic: DeclarationSemantic, node: DeclarationNode) {
  analyzer.pushDeclarationScope();
  genericsParse(analyzer, semantic, node);

  if (node.parameters) {

    analyzer.createReference()
    const  type = functionTypeSemantic()
  }

  analyzer.popDeclarationScope();
}

function genericsParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.generics) {
    return;
  }

  declaration.generics = declarationsParse(analyzer, node.generics.items);

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
  if (!node.parameters || !is(declaration, $.AttributeValueDeclarationSemantic)) {
    return;
  }

  functionTypeSemantic();

  declaration.parameters = declarationsParse(analyzer, node.parameters.items);

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
  // todo fix 'is' conditions
  if (
    !node.type?.value ||
    (!is(declaration, $.NominalTypeDeclarationSemantic) &&
      !is(declaration, $.AttributeValueDeclarationSemantic))
  ) {
    return;
  }

  declaration.type = typeSemanticParse(analyzer, node.type.value);

  // todo recheck comments
  // // todo recheck 'is(declaration, $.NominalTypeDeclarationSemantic)'
  // if (declaration.type && is(declaration, $.NominalTypeDeclarationSemantic)) {
  //   // todo remove 'declaration.attributes' if we create separate type and value declarations model
  //   if (declaration.attributes) {
  //     for (const attribute of declaration.type.attributes().all()) {
  //       declaration.attributes.add(attribute);
  //     }
  //   }
  // } else {
  //   analyzer.diagnosticManager.addPredefinedDiagnostic(node.type.range, (x) => x.cannotResolveType());
  // }
}

function valueParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  // todo fix 'is' conditions
  if (
    !node.assign?.value ||
    (!is(declaration, $.NominalTypeDeclarationSemantic) &&
      !is(declaration, $.AttributeValueDeclarationSemantic))
  ) {
    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const valueSemantic = valueSemanticParse(analyzer, node.assign.value);
  node.assign.value.semantic = valueSemantic;

  if (!declaration.type) {
    declaration.type = valueSemantic.type;
  } else if (!valueSemantic.type.is(declaration.type)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.range, (x) => x.wrongType());
  }
}

function attributesParse(
  analyzer: SemanticAnalyzer,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  // todo remove 'declaration.attributes' if we create separate type and value declarations model
  if (!node.attributes || !is(declaration, $.NominalTypeDeclarationSemantic) || !declaration.attributes) {
    return;
  }

  const attributes = declarationsParse(analyzer, node.attributes);

  for (const attribute of attributes) {
    if (is(attribute, $.ValueDeclarationSemantic)) {
      declaration.attributes.add(attribute);
    }
  }
}

function parameterDocumentationHandle(
  analyzer: SemanticAnalyzer,
  documentation: DocumentationNode,
  parameter: DeclarationSemantic,
): void {
  const filteredItems = documentation.items.filter((x) => x.id.text.equals(parameter.name));

  for (const item of filteredItems) {
    const reference = analyzer.createReference(item.id);

    parameter.usages.push(reference);
    item.id.semantic = documentationIdSemantic(analyzer, reference, parameter);
  }

  const description = filteredItems.first()?.description?.text.toString().setPadding(0).trim();
  parameter.documentation = description;
}
