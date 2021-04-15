import { TypeTree } from '../tree/type/type.tree';

const scopes: Map<string, TypeTree>[] = [new Map()];

export const pushScope = (): number => scopes.push(new Map());

export const popScope = (): Map<string, TypeTree> => scopes.pop();

export const find = (name: string): TypeTree =>
  scopes
    .reverse()
    .find((x) => x.has(name))
    ?.get(name);

export const addToScope = (name: string, type: TypeTree): void => {
  const lastScope = scopes[scopes.length - 1];
  if (lastScope.has(name)) throw new Error(`"${name}" already exists in the scope`);
  lastScope.set(name, type);
};
