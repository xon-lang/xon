// import {ISSUE_MESSAGE} from '../../../issue/issue-message';
// import {Nothing, nothing} from '../../../lib/core';
// import {$Node, Node, is} from '../../../parser/node/node';
// import {StringNode} from '../../../parser/node/token/string/string-node';
// import {DeclarationKind} from '../../declaration-manager';
// import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
// import {$Semantic, semanticIs} from '../../semantic';
// import {SemanticContext} from '../../semantic-context';
// import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

// export function functionTypeSemanticTryParse(context: SemanticContext, node: Node): FunctionTypeSemantic | Nothing {
//   if (!is<StringNode>(node, $Node.STRING)) {
//     return nothing;
//   }

//   const declaration = context.declarationManager.single(
//     DeclarationKind.TYPE,
//     context.config.literalTypeNames.stringTypeName,
//     nothing,
//     nothing,
//   );

//   if (!declaration || !semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
//     context.issueManager.addError(
//       node.range,
//       ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.stringTypeName),
//     );

//     return nothing;
//   }

//   const reference = context.createReference(node);
//   const semantic = functionTypeSemantic(reference, declaration, node.value);

//   return semantic;
// }
