import { readFileSync } from 'fs';
import { parse } from '../parser';

const coreSourceText = readFileSync('src/lib/@xon/core/test.xon').toString();
const ast = parse(coreSourceText);

export const anythingType = ast.types.find((x) => x.name === 'Anything')!;

export const somethingType = ast.types.find((x) => x.name === 'Something')!;

export const nothingType = ast.types.find((x) => x.name === 'Nothing')!;
