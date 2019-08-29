import { ModuleTree } from './trees/module-tree';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AsmLexer } from '../grammar/generated/AsmLexer';
import { AsmParser } from '../grammar/generated/AsmParser';
import * as fs from 'fs';
import * as path from 'path';

export class SyntaxTree {
    mainModule: ModuleTree;
    modules: ModuleTree[] = [];

    constructor(public mainModuleAbsolutePath: string) {
        mainModuleAbsolutePath = path.resolve(__dirname, mainModuleAbsolutePath);
        this.mainModule = this.parse(mainModuleAbsolutePath);
    }

    parse(moduleAbsolutePath: string) {
        try {
            let moduleTree = this.modules.find(x => x.absolutePath == moduleAbsolutePath);
            if (!moduleTree) {
                moduleTree = this.fileToModuleTree(moduleAbsolutePath);
                this.modules.push(moduleTree);
                console.log('...', moduleTree.name);
            }

            for (const importTree of moduleTree.imports) {
                importTree.module = this.parse(importTree.moduleAbsolutePath);
                if (this.modules.find(x => x.absolutePath == importTree.moduleAbsolutePath)) continue;
            }
            return moduleTree;
        } catch (error) {
            console.error('Module path: ' + moduleAbsolutePath);
            console.error(error);
            throw error;
        }
    }

    fileToModuleTree(moduleAbsolutePath: string) {
        const code = fs.readFileSync(moduleAbsolutePath, 'utf8');
        const inputStream = new ANTLRInputStream(code);
        const lexer = new AsmLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new AsmParser(tokenStream);
        const tree = parser.module();

        return new ModuleTree(tree, moduleAbsolutePath);
    }
}
