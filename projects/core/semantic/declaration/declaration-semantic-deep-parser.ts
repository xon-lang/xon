import {Array2, Nothing, nothing} from '../../../lib/types';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {
  DeclarationNode,
  getDeclarationAttributes,
  getDeclarationGenerics,
} from '../../parser/node/syntax/declaration/declaration-node';
import {$Semantic, semanticIs} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {typeSemanticParse} from '../type/type-semantic-parser';
import {valueSemanticParse} from '../value/value-semantic-parser';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationsParse} from './declaration-semantic-parser';

export function declarationDeepParse(context: SemanticContext, node: DeclarationNode): DeclarationSemantic | Nothing {
  const semantic = node.id?.semantic;

  if (!semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  genericsParse(childContext, semantic, node);
  //   parametersParse(childContext, semantic, node);
  typeParse(childContext, semantic, node);
  valueParse(childContext, semantic, node);
  attributesParse(childContext, semantic, node);

  return semantic;
}

function genericsParse(context: SemanticContext, declaration: DeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.generics) {
    return;
  }

  const syntaxGenerics = getDeclarationGenerics(node);
  // todo remove this hack 'as Array2<DeclarationSemantic>'
  declaration.generics = declarationsParse(context, syntaxGenerics) as Array2<DeclarationSemantic>;
}

function parametersParse(context: SemanticContext, declaration: DeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.parameters) {
    return;
  }

  const syntaxGenerics = getDeclarationGenerics(node);
  // todo remove this hack 'as Array2<DeclarationSemantic>'
  declaration.parameters = declarationsParse(context, syntaxGenerics) as Array2<DeclarationSemantic>;
}

function typeParse(context: SemanticContext, declaration: DeclarationSemantic, node: DeclarationNode): Nothing {
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

function valueParse(context: SemanticContext, declaration: DeclarationSemantic, node: DeclarationNode): Nothing {
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

function attributesParse(context: SemanticContext, declaration: DeclarationSemantic, node: DeclarationNode): Nothing {
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