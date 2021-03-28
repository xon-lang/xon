import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { parseDefinition } from '../../parse';
import { DefinitionTree } from '../definition/definition.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';

const libTypePaths = {};
glob.sync('src/xon-lib/**/*.xon').forEach((x) => {
  const key = path
    .basename(x, '.xon')
    .replace(/^./, (z) => z.toUpperCase())
    .replace(/-(.)/g, (z) => z.toUpperCase())
    .replace(/-/g, '');
  libTypePaths[key] = x;
});

const definitionCache = new Map<string, DefinitionTree>();

export const getTypeDefinition = (type: TypeTree): DefinitionTree => {
  if (type instanceof PlainTypeTree) {
    const code = fs.readFileSync(libTypePaths[type.name]).toString();
    if (definitionCache.has(type.name)) return definitionCache.get(type.name);

    const definition = parseDefinition(code);
    definitionCache.set(type.name, definition);
    return definition;
  }

  throw new Error(`Wrong argument type ${type.toJson()}`);
};
