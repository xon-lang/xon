import { ModuleTree } from './trees/module-tree';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { XonLexer } from '../grammar/generated/XonLexer';
import { XonParser } from '../grammar/generated/XonParser';
import * as fs from 'fs';
import * as path from 'path';
import { DataTypeInfo } from './data-type';

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
            this.defineVariableDeclarations(moduleTree);
            return moduleTree;
        } catch (error) {
            console.error('Module path: ' + moduleAbsolutePath);
            console.error(error);
            throw error;
        }
    }

    defineVariableDeclarations(tree: ModuleTree) {
        const dataTypeMap: { [key: string]: DataTypeInfo } = {};
        for (const statement of tree.statements) {
            const variableDeclaration =
                statement.declarationStatement && statement.declarationStatement.variableDeclaration;
            if (variableDeclaration) {
                if (variableDeclaration.value.dataType) {
                    dataTypeMap[variableDeclaration.name] = variableDeclaration.value.dataType;
                } else {
                    const dependsVariables = variableDeclaration.value.dataTypeDependsOn.map(x => dataTypeMap[x]);
                    const definedType = DataTypeInfo.resolveAddOperationType(...dependsVariables);
                    variableDeclaration.value.dataType = dataTypeMap[variableDeclaration.name] = definedType;
                }
            }
        }
    }

    fileToModuleTree(moduleAbsolutePath: string) {
        const code = fs.readFileSync(moduleAbsolutePath, 'utf8');
        const inputStream = new ANTLRInputStream(code);
        const lexer = new XonLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new XonParser(tokenStream);
        const tree = parser.module();

        return new ModuleTree(tree, moduleAbsolutePath);
    }
}
