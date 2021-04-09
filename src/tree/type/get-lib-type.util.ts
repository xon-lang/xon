// import fs from 'fs';
// import { glob } from 'glob';
// import path from 'path';
// import { parseDefinition } from '../../parse';
// import { DefinitionTree } from '../definition/definition.tree';
// import { ArrayTypeTree } from './array-type/array-type.tree';
// import { GenericTypeTree } from './generic-type/generic-type.tree';
// import { PlainTypeTree } from './plain-type/plain-type.tree';
// import { TypeTree } from './type.tree';

// const libTypePaths = {};
// glob.sync('src/xon-lib/**/*.xon').forEach((x) => {
//   const key = path
//     .basename(x, '.xon')
//     .replace(/^./, (z) => z.toUpperCase())
//     .replace(/-(.)/g, (z) => z.toUpperCase())
//     .replace(/-/g, '');
//   libTypePaths[key] = x;
// });

// const definitionCache = new Map<string, DefinitionTree>();

// function getTypeGenerics(type: TypeTree): TypeTree[] {
//   if (type instanceof ArrayTypeTree) {
//     return [type.itemType];
//   }
//   if (type instanceof GenericTypeTree) {
//     return type.generics;
//   }
//   return [];
// }

// export function getTypeDefinition(type: TypeTree): DefinitionTree {
//   let name = '';
//   const generics: Map<string, TypeTree> = new Map();
//   if (type instanceof PlainTypeTree) name = type.name;
//   if (type instanceof GenericTypeTree) name = type.mainType.name;
//   if (type instanceof ArrayTypeTree) name = 'Array';

//   if (name) {
//     if (definitionCache.has(name)) return definitionCache.get(name);

//     if (!fs.existsSync(libTypePaths[name]))
//       throw new Error(`File "${libTypePaths[name]}" doesn't exists`);

//     const code = fs.readFileSync(libTypePaths[name]).toString();
//     const definition = parseDefinition(code);
//     getTypeGenerics(type).forEach((x, i) => generics.set(definition.generics[i], x));
//     definition.useGenerics(generics);
//     definition.body();

//     definitionCache.set(name, definition);
//     return definition;
//   }

//   throw new Error(`Wrong argument type ${type.toJson()}`);
// }
