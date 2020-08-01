import { ImportsContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ImportMember } from './import-member';

export class ImportsTree extends BaseTree {
    isImportAll: boolean;
    alias: string;
    path: string;
    members: ImportMember[];

    constructor(public ctx: ImportsContext) {
        super();
        this.isImportAll = !!ctx._alias;
        this.alias = ctx._alias?.text;
        this.path = ctx
            .importPath()
            .text.replace(/(?!\.)(.*?)(\.)/g, '$1/')
            .replace(/^(\.)*/g, x => x.replace(/\./g, '../'))
            .replace(/\'/g, '');

        this.members = ctx.importMember().map(x => new ImportMember(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            isImportAll: this.isImportAll,
            alias: this.alias,
            path: this.path,
            member: this.members.map(x => x.toPlain()),
        };
    }
}
