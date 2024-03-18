import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {rangeFromNodes} from '../../../source/source-range';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {valueSemanticParse} from '../../value/value-semantic-parser';
import {declarationsParse} from '../declaration-semantic-parser';
import {ValueDeclarationSemantic} from '../var/var-declaration-semantic';
import {ConstDeclarationSemantic} from './const-declaration-semantic';

export function constDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): ConstDeclarationSemantic | Nothing {
  const semantic = node.id.semantic;

  if (!semanticIs<ConstDeclarationSemantic>(semantic, $Semantic.CONST_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  genericsParse(childContext, semantic, node);
  // parametersParse(childContext, semantic, node);
  typeParse(childContext, semantic, node);
  valueParse(childContext, semantic, node);
  attributesParse(childContext, semantic, node);

  return semantic;
}

function genericsParse(
  context: SemanticContext,
  declaration: ConstDeclarationSemantic,
  node: DeclarationNode,
): Nothing {
  if (!node.generics) {
    return;
  }

  // todo remove this hack 'as ValueDeclarationSemantic[]'
  declaration.generics = declarationsParse(context, node.generics) as ValueDeclarationSemantic[];
}

function typeParse(context: SemanticContext, declaration: ConstDeclarationSemantic, node: DeclarationNode): Nothing {
  if (node.type) {
    context.issueManager.addError(node.type.range, ISSUE_MESSAGE.noTypeRequiredForConst());
  }

  typeSemanticParse(context, node.type);
}

function valueParse(context: SemanticContext, declaration: ConstDeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.value) {
    context.issueManager.addError(node.id.range, ISSUE_MESSAGE.cannotEvaluate());

    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node.value);
  declaration.initializer = value;

  const evaluatedValue = value?.evaluate();

  if (evaluatedValue == nothing) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.cannotEvaluate());
  } else {
    declaration.value = evaluatedValue;
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: ConstDeclarationSemantic,
  node: DeclarationNode,
): Nothing {
  if (node.attributes.length > 0) {
    const range = rangeFromNodes(node.attributes.map((x) => x.id));
    context.issueManager.addError(range, ISSUE_MESSAGE.noAttributesAllowed());
  }
}
