import { StatementContext } from '../../grammar/generated/AsmParser';
import { AssignmentStatementTree } from './statements/assignment-statement-tree';
import { AsmStatementTree } from './statements/asm-statement-tree';
import { FunctionCallStatementTree } from './statements/function-call-statement-tree';
import { VarDeclarationStatementTree } from './statements/var-declaration-statement-tree';

export enum StatementType {
    Assignment,
    FunctionCall,
    Asm,
    VarDeclaration,
}

export class StatementTree {
    type: StatementType;
    assignmentStatementTree: AssignmentStatementTree;
    varDeclarationStatementTree: VarDeclarationStatementTree;
    asmStatementTree: AsmStatementTree;
    functionCallStatementTree: FunctionCallStatementTree;

    constructor(public ctx: StatementContext) {
        /*   if (tree.assignmentStatement()) {
            this.type = StatementType.Assignment;
            this.assignmentStatementTree = new AssignmentStatementTree(tree.assignmentStatement());
        } else if (tree.asmStatement()) {
            this.type = StatementType.Asm;
            this.asmStatementTree = new AsmStatementTree(tree.asmStatement());
        } else if (tree.functionCall()) {
            this.type = StatementType.FunctionCall;
            this.functionCallStatementTree = new FunctionCallStatementTree(tree.functionCall());
        }else  */

        if (ctx.varDeclaration()) {
            this.type = StatementType.VarDeclaration;
            this.varDeclarationStatementTree = new VarDeclarationStatementTree(ctx.varDeclaration());
        }
        if (ctx.assignmentStatement()) {
            this.type = StatementType.Assignment;
            this.assignmentStatementTree = new AssignmentStatementTree(ctx.assignmentStatement());
        }
        if (ctx.functionCall()) {
            this.type = StatementType.FunctionCall;
            this.functionCallStatementTree = new FunctionCallStatementTree(ctx.functionCall());
        }
    }

    toPlane() {
        const o = {
            type: StatementType[this.type],
        };

        if (this.assignmentStatementTree) {
            return {
                ...o,
                assignment: this.assignmentStatementTree.toPlane(),
            };
        }

        if (this.asmStatementTree) {
            return {
                ...o,
                asm: this.asmStatementTree.toPlane(),
            };
        }

        if (this.functionCallStatementTree) {
            return {
                ...o,
                functionCall: this.functionCallStatementTree.toPlane(),
            };
        }

        if (this.varDeclarationStatementTree) {
            return {
                ...o,
                varDeclaration: this.varDeclarationStatementTree.toPlane(),
            };
        }
        return o;
    }
}
