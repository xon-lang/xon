import {Nothing, nothing, String2} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {DocumentationNode} from '../../syntax/documentation/documentation-node';
import {
  DeclarationNode,
  getDeclarationAttributes,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../syntax/node/declaration/declaration-node';
import {$Semantic, semanticIs} from '../node/semantic-node';
import {SemanticAnalyzerContext} from '../semantic-analyzer-context';
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
    for (const parameter of declaration.generics.filter((x) => !!x)) {
      parameter.documentation = getParameterDocumentation(node.documentation, parameter.name);
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
      parameter.documentation = getParameterDocumentation(node.documentation, parameter.name);
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
    context.issueManager.addError(node.type.range, ISSUE_MESSAGE.cannotResolveType());
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
    context.issueManager.addError(node.assign.value.range, ISSUE_MESSAGE.wrongType());
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

function getParameterDocumentation(documentation: DocumentationNode, name: String2): String2 | Nothing {
  return documentation.items
    ?.find((x) => x.label.name === name)
    ?.description?.text.setPadding(0)
    .trim();
}
