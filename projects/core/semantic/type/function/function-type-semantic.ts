// import {Array2, Boolean2, String2} from '../../../lib/core';
// import {TextResourceReference} from '../../../util/resource/resource-reference';
// import {DeclarationSemantic} from '../../declaration/declaration-semantic';
// import {$Semantic} from '../../semantic';
// import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
// import {TypeSemantic} from '../type-semantic';

// export interface FunctionTypeSemantic extends TypeSemantic {
//   $: $Semantic.FUNCTION_TYPE;
//   parameters: DeclarationSemantic[];
//   result: TypeSemantic;
// }

// export function functionTypeSemantic(
//   reference: TextResourceReference,
//   parameters: DeclarationSemantic[],
//   result: TypeSemantic,
// ): FunctionTypeSemantic {
//   const semantic: FunctionTypeSemantic = {
//     $: $Semantic.FUNCTION_TYPE,
//     reference,
//     parameters,
//     result,

//     is(other: TypeSemantic): Boolean2 {
//       if (isSetOperatorTypeSemantic(other)) {
//         return isInSet(this, other);
//       }

//       if (this.eq(other)) {
//         return true;
//       }

//       return false;
//     },

//     eq(other: TypeSemantic): Boolean2 {
//       return false;
//     },

//     attributes(): Record<String2, Array2<TypeSemantic>> {
//       return {};
//     },
//   };

//   return semantic;
// }
