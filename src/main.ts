import * as path from 'path';
import { SyntaxTree } from './ast/syntax-tree';
import { Compiler as CCompiler } from './compilers/c/compiler';

const args = process.argv.slice(2);
const inputFile = path.resolve(process.cwd(), args[0]);
const outputDir = path.resolve(path.dirname(inputFile), 'dist');

const tree = new SyntaxTree(inputFile);
new CCompiler(tree, inputFile, outputDir).compile();
