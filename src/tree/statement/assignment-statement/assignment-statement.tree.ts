import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { getExpressionTree } from '../../expression/expression-helper';
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

    constructor(public ctx?: AssignmentStatementContext) {
        super();
        if (!ctx) return;

        const assignmentValue = ctx.assignmentValue();
        if (assignmentValue.spreadItem().length > 1) {
            const arrayTree = new ArrayExpressionTree();
            arrayTree.items = assignmentValue.spreadItem().map((x) => ({
                value: getExpressionTree(x.expression()),
                hasSpread: !!x.Elipsis(),
            }));
            this.value = arrayTree;
        } else {
            this.value = getExpressionTree(assignmentValue.expression());
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
    }

    getSingleAssigments(vars: string[], fromTheEnd: boolean): { name: string; index: number }[] {
        const assignments = [];
        for (const [index, v] of vars.entries()) {
            if (!v) continue;

            assignments.push({
                name: v.replace('...', ''),
                index: fromTheEnd ? -(vars.length - index) : index,
            });
        }
        return assignments;
    }
}
