import { TypeTree } from '../tree/type/type.tree';

const scopes: { name: string; dataType: TypeTree }[][] = [];

export const pushScope = (): void => {
  scopes.push([]);
};

export const popScope = (): void => {
  scopes.pop();
};

export const findInScopes = (name: string): { name: string; dataType: TypeTree } => {
  const scope = scopes.reverse().find((x) => x.some((z) => z.name === name));
  if (!scope) return null;
  return scope.find((x) => x.name === name);
};

export const addToScope = (name: string, dataType: TypeTree): void => {
  if (findInScopes(name)) throw new Error(`"${name}" already exists in the scope`);
  scopes[scopes.length - 1].push({ dataType, name });
};
