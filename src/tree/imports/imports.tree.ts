import { ImportsContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ImportMember } from './import-member';

export class ImportsTree extends BaseTree {
    allModulesAlias: string;
    path: string;
    members: ImportMember[];

    constructor(public ctx: ImportsContext) {
        super();
        this.allModulesAlias = ctx._alias?.text;
        this.path = ctx
            .StringLiteral()
            // makes dots to ../
            .text.slice(1, -1)
            .replace(/^\.+/g, (x) => x.replace(/(\.)/g, '$1./'))
            .replace(/^\.\./, '.');

        this.members = ctx.importMember().map((x) => new ImportMember(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            alias: this.allModulesAlias,
            path: this.path,
            member: this.members.map((x) => x.toPlain()),
        };
    }
}
