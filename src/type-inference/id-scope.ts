import { TypeTree } from '../tree/type/type.tree';

const scopes: Map<string, TypeTree>[] = [];

export const clearScopes = (): void => {
  scopes.splice(0);
};

export const pushScope = (): Map<string, TypeTree> =>
  scopes.push(new Map()) && scopes[scopes.length - 1];

export const popScope = (): Map<string, TypeTree> => scopes.pop();

export const find = (name: string): TypeTree =>
  scopes
    .reverse()
    .find((x) => x.has(name))
    ?.get(name);

export const addToScope = (name: string, type: TypeTree): void => {
  if (!name) throw new Error('No name to add in scope');
  if (!type) throw new Error('No type to add in scope');

  const lastScope = scopes[scopes.length - 1] || pushScope();
  if (lastScope.has(name)) throw new Error(`"${name}" already exists in the scope`);
  lastScope.set(name, type);
};
