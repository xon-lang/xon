import fs from 'fs';
import { DefinitionTree } from '../tree/definition/definition.tree';
import { parseProgram } from '../tree/parse';
import { ProgramTree } from '../tree/program/program.tree';

// const definitionCache = new Map<string, DefinitionTree>();

function loadProgramByPath(filePath: string): ProgramTree {
  // eslint-disable-next-line @typescript-eslint/dot-notation
  global['currentDefinitionFilePath'] = filePath;
  if (!fs.existsSync(filePath)) throw new Error(`File "${filePath}" not found`);

  const code = fs.readFileSync(filePath).toString();
  return parseProgram(code);
}

// load libraries
// glob
//   .sync('src/xon-lib/**/*.xon')
//   .map(loadProgramByPath)
//   .map((x) => x.definitions)
//   .forEach((x) =>
//     x.forEach((z) => {
//       definitionCache.set(z.name, z);
//     }),
//   );

export function findDefinition(name: string): DefinitionTree {
  return loadProgramByPath(`src/xon-lib/global/${name}.xon`).definitions[0];
  // return definitionCache.get(name);
}

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
