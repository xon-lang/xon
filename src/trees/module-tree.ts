import { ModuleContext } from '../../grammar/generated/XonParser';
import { ImportTree } from './import-tree';
import { getFilenameWithoutExtension } from '../../util';
import { StatementTree } from './statement-tree';

export class ModuleTree {
    name: string;
    fullName: string;
    imports: ImportTree[] = [];
    statements: StatementTree[] = [];

    constructor(public ctx: ModuleContext, public absolutePath: string) {
        this.name = getFilenameWithoutExtension(absolutePath).replace(/[^0-9a-z-A-Z]/g, '_');
        this.fullName = absolutePath
            .replace(this.commonPath(absolutePath, __dirname), '')
            .replace(/[^0-9a-z-A-Z]/g, '_');

        this.imports = ctx.importDeclaration().map(x => new ImportTree(x, this));
        this.statements = ctx.statement().map(x => new StatementTree(x));
    }

    commonPath(...paths: string[]) {
        const delimiter = paths[0].includes('/') ? '/' : '\\';
        for (let i = 0; i < paths[0].length; i++) {
            if (paths.some(x => x[i] != paths[0][i])) return paths[0].slice(0, paths[0].lastIndexOf(delimiter, i));
        }
        return paths[0];
    }

    toPlane() {
        return {
            name: this.name,
            imports: this.imports.map(x => x.toPlane()),
        };
    }
}
