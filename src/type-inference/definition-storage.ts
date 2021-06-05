import fs from 'fs';
import { DefinitionTree } from '../tree/definition/definition.tree';
import { ModuleTree } from '../tree/module/module.tree';
import { parseModule } from '../tree/parse';

export const definitionCache = new Map<string, DefinitionTree>();

function loadModuleByPath(filePath: string): ModuleTree {
  // eslint-disable-next-line @typescript-eslint/dot-notation
  global['currentDefinitionFilePath'] = filePath;
  if (!fs.existsSync(filePath)) throw new Error(`File "${filePath}" not found`);

  const code = fs.readFileSync(filePath).toString();
  return parseModule(code);
}

export function findDefinition(name: string): DefinitionTree {
  if (definitionCache.has(name)) return definitionCache.get(name);
  return loadModuleByPath(`src/xon-lib/xon/core/${name}.xon`).definitions.find(
    (x) => x.name === name,
  );
}
