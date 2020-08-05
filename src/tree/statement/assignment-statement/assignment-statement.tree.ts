import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { getExpressionsTree, getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
    value: ExpressionTree;

    singleAssigments: {
        name: string;
        index: number;
    }[] = [];

    arrayAssginments: string[] = [];
    startArraysIndex: number;
    endArraysIndex: number;

    name: string;

    constructor(public ctx: AssignmentStatementContext) {
        super();
        if (ctx.expression().length > 1) {
            this.value = new ArrayExpressionTree();
            (this.value as ArrayExpressionTree).items = getExpressionsTree(
                ctx.expression()
            ).map((x) => ({ value: x, hasSpread: false }));
        } else {
            this.value = getExpressionTree(ctx.expression(0));
        }

        for (const assignments of ctx.assignmentsList()) {
            const leftSingleVars =
                assignments
                    .leftAssignments()
                    ?.text.split(',')
                    .slice(0, assignments.middleAssignments() ? -1 : undefined) || [];
            if (leftSingleVars.length) {
                this.singleAssigments.push(...this.getSingleAssigments(leftSingleVars, false));
            }

            const rightSingleVars = assignments.rightAssignments()?.text.split(',').slice(1) || [];
            if (rightSingleVars.length) {
                this.singleAssigments.push(...this.getSingleAssigments(rightSingleVars, true));
            }

            this.arrayAssginments =
                assignments
                    .middleAssignments()
                    ?.text.replace(/\.\.\./g, '')
                    .split(',') || [];
            if (this.arrayAssginments.length) {
                this.startArraysIndex = leftSingleVars.length;
                if (rightSingleVars.length) this.endArraysIndex = -rightSingleVars.length;
            }
        }

        if (this.singleAssigments.length + this.arrayAssginments.length == 1) {
            this.name = this.singleAssigments[0]?.name || this.arrayAssginments[0];
            if (this.locals) {
                this.locals[this.name] = this.value.getType();
            }
        }
    }

    *getSingleAssigments(vars: string[], fromTheEnd) {
        for (const [index, v] of vars.entries()) {
            if (!v) continue;

            yield {
                name: v.replace('...', ''),
                index: fromTheEnd ? -(vars.length - index) : index,
            };
        }
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
            singleAssigments: this.singleAssigments,
            arrayAssginments: this.arrayAssginments,
            startArraysIndex: this.startArraysIndex,
            endArraysIndex: this.endArraysIndex,
            name: this.name,
        };
    }
}
