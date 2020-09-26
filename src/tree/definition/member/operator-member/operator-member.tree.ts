import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTree } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
    operator: string;
    leftArg: {
        name: string;
        type: TypeTree;
    };
    rightArg: {
        name: string;
        type: TypeTree;
    };

    returnType: TypeTree;
    statements: StatementTree[];

    constructor(public ctx: OperatorMemberContext) {
        super();

        this.operator = ctx.operator().text;
        this.leftArg = {
            name: ctx.ID(0).text,
            type: null,
        };
        this.rightArg = {
            name: ctx.ID(1).text,
            type: getTypeTree(ctx.type(0)),
        };

        this.returnType = getTypeTree(ctx._returnType);
        this.statements = getStatementsTree(ctx.body());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            leftArg: {
                name: this.leftArg.name,
                type: this.leftArg.type.toPlain(),
            },
            rightArg: {
                name: this.rightArg.name,
                type: this.rightArg.type.toPlain(),
            },
            returnType: this.returnType.toPlain(),
            statements: this.statements.map((x) => x.toPlain()),
        };
    }
}
