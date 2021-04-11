import { DataType } from './data-type';

const scopes: { name: string; dataType: DataType }[][] = [];

export const pushScope = (): void => {
  scopes.push([]);
};

export const popScope = (): void => {
  scopes.pop();
};

export const findInScopes = (name: string): { name: string; dataType: DataType } => {
  const scope = scopes.reverse().find((x) => x.some((z) => z.name === name));
  if (!scope) return null;
  return scope.find((x) => x.name === name);
};

export const addToScope = (name: string, dataType: DataType): void => {
  if (findInScopes(name)) throw new Error(`"${name}" already exists in the scope`);
  scopes[scopes.length - 1].push({ dataType, name });
};
