import * as fs from 'fs';
import * as path from 'path';
import { SyntaxTree } from './../../ast/syntax-tree';
import { ModuleTree } from './../../ast/trees/module-tree';
import { newLineX2, newLine, tabSpace } from './../../util';
import { StatementCompiler } from './statement-compiler';
import { alignBefore } from './_lib';
var rimraf = require('rimraf');

export class Compiler {
    constructor(public tree: SyntaxTree, public mainModuleAbsolutePath: string, public distDirAbsolutePath: string) {}

    compile() {
        rimraf.sync(this.distDirAbsolutePath);
        for (const moduleTree of this.tree.modules) {
            fs.mkdirSync(this.distDirAbsolutePath, { recursive: true });
            const compiledModulePath = path.resolve(this.distDirAbsolutePath, moduleTree.name);
            let compiledCode = this.getCompiledCode(moduleTree);
            // JSON AST
            fs.writeFileSync(compiledModulePath + '.json', JSON.stringify(moduleTree.toPlane(), null, 2), 'utf8');
            fs.writeFileSync(compiledModulePath + '.c', compiledCode, 'utf8');
        }
        this.generateAppFile();
    }

    generateAppFile() {
        const commonLibs = ['<stdio.h>', '"stdlib.h"'];
        const includes = this.traverseModulesOrder(this.tree.mainModule)
            .map(x => path.resolve(this.distDirAbsolutePath, x.name) + '.c')
            .map(x => `#include "${x}"`)
            .join('\n');

        const beforeCode = `
        _setmode(_fileno(stdout), 0x00020000);
        `;
        fs.writeFileSync(
            path.resolve(this.distDirAbsolutePath, '__app__.c'),
            `${commonLibs.map(x => `#include ${x}`).join(newLine) + newLineX2}${includes +
                newLineX2}int main() { ${beforeCode} printf("hello world\\n"); return 0; }`,
            'utf8'
        );
    }

    traverseModulesOrder(moduleTree: ModuleTree, orderedModules: ModuleTree[] = []) {
        const existingIndex = orderedModules.findIndex(x => x.absolutePath == moduleTree.absolutePath);
        if (existingIndex >= 0) {
            orderedModules.splice(existingIndex, 1);
        }
        orderedModules.unshift(moduleTree);

        for (const m of moduleTree.imports.map(x => x.module)) {
            this.traverseModulesOrder(m, orderedModules);
        }
        return orderedModules;
    }

    getCompiledCode(tree: ModuleTree) {
        const commonLibs = ['<stdio.h>', '"stdlib.h"', '<wchar.h>', '<locale.h>', '<fcntl.h>', '<io.h>']
            .map(x => `#include ${x}`)
            .join(newLine);
        const beforeCode = `_setmode(_fileno(stdout), 0x00020000);`;
        let statements = tree.statements.map(x => new StatementCompiler(x).compile()).join('\n');
        statements = alignBefore(statements, 1);
        // const initObjectStr = this.generateStructType(tree.fullName);
        const initFunction = `${commonLibs + newLineX2}int main() {${newLine +
            tabSpace +
            beforeCode +
            newLine +
            tabSpace}${newLine + statements + newLine + tabSpace}return 0;${newLine}}`;
        return initFunction;
    }
}
