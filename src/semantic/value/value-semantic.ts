// import { Boolean2 } from '../../lib/core';
// import { DeclarationSemantic } from '../model/model-semantic';
// import { $Semantic, Semantic } from '../semantic';

export interface ABC {}
// export interface ValueSemantic extends Semantic {
//   declaration: DeclarationSemantic;
//   arguments: ValueSemantic[];
//   // attributes: Record<String2, DeclarationSemantic[]>;
//   is: (type: ValueSemantic) => Boolean2;

//   eq: (type: ValueSemantic) => Boolean2;
// }

// export function valueSemantic(declaration: DeclarationSemantic, args: ValueSemantic[]): ValueSemantic {
//   if (declaration.parameters.length !== args.length) {
//     throw new Error('Not implemented');
//   }

//   return {
//     $: $Semantic.VALUE,
//     declaration,
//     arguments: args,

//     is(type: ValueSemantic): Boolean2 {
//       return (this.eq(type) || this.declaration.restriction?.is(type)) ?? false;
//     },

//     eq(type: ValueSemantic): Boolean2 {
//       return this.declaration.name === type.declaration.name;
//     },
//   };
// }
