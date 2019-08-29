import { SyntaxTree } from './ast/syntax-tree';
import { Compiler as CCompiler } from './compilers/c/compiler';

const baseDir = 'C:/w/projects/nizami/languages/xon/tests/statement/';
const inputFile = baseDir + 'app.x';
const outputDir = baseDir + 'dist';

const tree = new SyntaxTree(inputFile);
new CCompiler(tree, inputFile, outputDir).compile();
