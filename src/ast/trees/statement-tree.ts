import { StatementContext } from '../../grammar/generated/XonParser';
import { AssignmentStatementTree } from './statements/assignment-statement-tree';
import { AsmStatementTree } from './statements/asm-statement-tree';
import { FunctionCallStatementTree } from './statements/function-call-statement-tree';
import { VariableDeclarationStatementTree } from './statements/variable-declaration-statement-tree';
import { DeclarationStatementTree } from './statements/declaration-statement-tree';

export enum StatementType {
    Declaration,
    Assignment,
    FunctionCall,
    Asm,
}

export class StatementTree {
    type: StatementType;
    declarationStatement: DeclarationStatementTree;
    assignmentStatement: AssignmentStatementTree;
    asmStatement: AsmStatementTree;
    functionCallStatement: FunctionCallStatementTree;

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

        if (ctx.declarationStatement()) {
            this.type = StatementType.Declaration;
            this.declarationStatement = new DeclarationStatementTree(ctx.declarationStatement());
        }
        if (ctx.assignmentStatement()) {
            this.type = StatementType.Assignment;
            this.assignmentStatement = new AssignmentStatementTree(ctx.assignmentStatement());
        }
        if (ctx.functionCall()) {
            this.type = StatementType.FunctionCall;
            this.functionCallStatement = new FunctionCallStatementTree(ctx.functionCall());
        }
    }

    toPlane() {
        return {
            type: StatementType[this.type],
            assignment: this.assignmentStatement.toPlane(),
            asm: this.asmStatement.toPlane(),
            functionCall: this.functionCallStatement.toPlane(),
            declaration: this.declarationStatement.toPlane(),
        };
    }
}
