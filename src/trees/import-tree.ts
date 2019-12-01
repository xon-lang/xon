import { ImportDeclarationContext } from '../../grammar/generated/XonParser';
import { ModuleTree } from './module-tree';
import * as path from 'path';

export class ImportTree {
    module: ModuleTree;
    moduleAbsolutePath: string;
    members: string[];
    path: string;
    isNativeImport: boolean;

    constructor(public ctx: ImportDeclarationContext, public parentModule: ModuleTree) {
        this.members = ctx._members.map(x => x.text);
        this.path = ctx._path.text.slice(1, -1);
        this.isNativeImport = !this.path.toLowerCase().endsWith('.dll');

        this.moduleAbsolutePath = path.resolve(path.dirname(parentModule.absolutePath), this.path) + '.xon';
    }

    toPlain() {
        return {
            path: this.path,
            isNativeImport: this.isNativeImport,
            members: this.members,
        };
    }
}
