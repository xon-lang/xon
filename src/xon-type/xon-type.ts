import fs from 'fs';
import path from 'path';
import { parseDefinition } from '../parse';
import { DefinitionTree } from '../tree/definition/definition.tree';

const libPath = 'src/xon-lib/';

export function getType(name: string): DefinitionTree {
  const code = fs.readFileSync(path.resolve(libPath, `${name}.xon`)).toString();
  return parseDefinition(code);
}
