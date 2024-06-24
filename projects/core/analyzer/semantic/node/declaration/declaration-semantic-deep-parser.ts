import {Nothing, nothing} from '../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../diagnostic/analyzer-diagnostic-message';
import {DocumentationNode} from '../../../syntax/documentation/documentation-node';
import {
  DeclarationNode,
  getDeclarationAttributes,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzerContext} from '../../semantic-analyzer-context';
import {documentationIdSemantic} from '../documentation/documentation-id-semantic';
import {$Semantic, semanticIs} from '../semantic-node';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {valueSemanticParse} from '../value/value-semantic-parser';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationsParse} from './declaration-semantic-parser';

export function declarationDeepParse(
  context: SemanticAnalyzerContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const semantic = node.id?.semantic;

  if (!semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  genericsParse(childContext, semantic, node);
  parametersParse(childContext, semantic, node);
  typeParse(childContext, semantic, node);
  valueParse(childContext, semantic, node);
  attributesParse(childContext, semantic, node);

  return semantic;
}

function genericsParse(
  context: SemanticAnalyzerContext,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.generics) {
    return;
  }

  const syntaxGenerics = getDeclarationGenerics(node);
  declaration.generics = declarationsParse(context, syntaxGenerics);

  if (node.documentation) {
    for (const generic of declaration.generics.filter((x) => !!x)) {
      parameterDocumentationHandle(context, node.documentation, generic);
    }
  }
}

function parametersParse(
  context: SemanticAnalyzerContext,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.parameters) {
    return;
  }

  const syntaxParameters = getDeclarationParameters(node);
  declaration.parameters = declarationsParse(context, syntaxParameters);

  if (node.documentation) {
    for (const parameter of declaration.parameters.filter((x) => !!x)) {
      parameterDocumentationHandle(context, node.documentation, parameter);
    }
  }
}

function typeParse(
  context: SemanticAnalyzerContext,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.type?.value) {
    return;
  }

  const type = typeSemanticParse(context, node.type.value);

  if (type) {
    declaration.type = type;
  } else {
    context.issueManager.addError(node.type.range, DIAGNOSTIC_MESSAGE.cannotResolveType());
  }
}

function valueParse(
  context: SemanticAnalyzerContext,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  if (!node.assign?.value) {
    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node.assign.value);

  if (!declaration.type) {
    if (value?.type) {
      declaration.type = value.type;
    }
  } else if (!value?.type || !value.type.is(declaration.type)) {
    context.issueManager.addError(node.assign.value.range, DIAGNOSTIC_MESSAGE.wrongType());
  }
}

function attributesParse(
  context: SemanticAnalyzerContext,
  declaration: DeclarationSemantic,
  node: DeclarationNode,
): void {
  const syntaxAttributes = getDeclarationAttributes(node);

  if (syntaxAttributes.length === 0) {
    return;
  }

  const declarations = declarationsParse(context, syntaxAttributes);
  const attributes: DeclarationSemantic['attributes'] = {};

  for (const declaration of declarations) {
    // todo fix hack with semantic type checking
    if (!declaration || !semanticIs<DeclarationSemantic>(declaration, $Semantic.DECLARATION)) {
      continue;
    }

    // todo replace with attributes manager
    if (!attributes[declaration.name]) {
      attributes[declaration.name] = [];
    }

    attributes[declaration.name].push(declaration);
  }

  declaration.attributes = attributes;
}

function parameterDocumentationHandle(
  context: SemanticAnalyzerContext,
  documentation: DocumentationNode,
  parameter: DeclarationSemantic,
): void {
  const item = documentation.items?.find((x) => x.id?.text === parameter.name);

  if (!item) {
    return;
  }

  const description = item.description?.text.setPadding(0).trim();
  parameter.documentation = description;

  const reference = context.createReference(item.id);
  item.id.semantic = documentationIdSemantic(context, reference, parameter);
}
