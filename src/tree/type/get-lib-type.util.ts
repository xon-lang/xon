import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { IssueService } from '../../issue-service/issue-service';
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

export function getTypeDefinition(type: TypeTree): DefinitionTree {
  if (type instanceof PlainTypeTree) {
    if (definitionCache.has(type.name)) return definitionCache.get(type.name);

    IssueService.instance.pushScope(libTypePaths[type.name]);
    const code = fs.readFileSync(libTypePaths[type.name]).toString();
    const definition = parseDefinition(code);
    definitionCache.set(type.name, definition);
    IssueService.instance.popScope();
    return definition;
  }

  throw new Error(`Wrong argument type ${type.toJson()}`);
}

// export function getTypeMember(type: TypeTree, name:string): MemberTree{
//   const definition = getTypeDefinition(type)
//   const property = definition.properties.find(x=>x.name === name)
//   if(property) return property;

// }
