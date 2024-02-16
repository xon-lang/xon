// import { Boolean2 } from '../../../lib/core';
// import { coreType } from '../core';
// import { integerLiteralType } from '../integer/integer-type';
// import { $Type, Type, eq } from '../type';
// import { unionFromTypes } from '../union/union-type';

// export interface ArrayLiteralType extends Type {
//   base: Type;
//   data: { items: Type[] };
// }

// export function arrayLiteralType(items: Type[]): ArrayLiteralType {
//   const base = itemsType(items);

//   return {
//     $: $Type.LITERAL,
//     name: 'ArrayLiteral',
//     base,
//     data: { items },
//     parameters: [],
//     attributes: {
//       ...base.attributes,
//       length: [integerLiteralType(items.length)],
//     },

//     is(type): Boolean2 {
//       return (
//         eq(this, type) &&
//         this.data.items.length === type.data.items.length &&
//         this.data.items.every((x, i) => x.is(type.data.items[i]))
//       );
//     },

//     eq(type): Boolean2 {
//       return (
//         eq(this, type) &&
//         this.data.items.length === type.data.items.length &&
//         this.data.items.every((x, i) => x.eq(type.data.items[i]))
//       );
//     },
//   };
// }

// function itemsType(items: Type[]): Type {
//   if (items.length === 0) {
//     return coreType('Array', coreType('Nothing'));
//   }

//   if (items.length === 1) {
//     return coreType('Array', items[0]);
//   }

//   return coreType('Array', unionFromTypes(items));
// }
