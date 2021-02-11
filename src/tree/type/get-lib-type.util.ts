import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { parseDefinition } from '../../parse';
import { DefinitionTree } from '../definition/definition.tree';

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

export const getLibType = (name: string): DefinitionTree => {
  const code = fs.readFileSync(libTypePaths[name]).toString();
  if (definitionCache.has(name)) return definitionCache.get(name);

  const definition = parseDefinition(code);
  definitionCache.set(name, definition);
  return definition;
};
