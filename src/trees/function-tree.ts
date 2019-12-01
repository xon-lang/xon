import { FunctionDeclarationContext } from '../../grammar/generated/XonParser';
import { StatementTree, StatementType } from './statement-tree';
import { NameTypeTree } from './name-type';

export class FunctionTree {
    name: string;
    arguments: NameTypeTree[] = [];
    statements: StatementTree[] = [];
    localVariables: string[] = [];

    constructor(public ctx: FunctionDeclarationContext) {
        this.name = ctx._name.text;
        this.arguments = ctx._args.map(x => new NameTypeTree(x));
        this.statements = ctx.statement().map(x => new StatementTree(x));

        for (const statement of this.statements) {
            if (
                statement.type == StatementType.Assignment &&
                !this.localVariables.includes(statement.assignmentStatement.name)
            ) {
                this.localVariables.push(statement.assignmentStatement.name);
            }
        }
    }

    toPlane() {
        return {
            name: this.name,
            arguments: this.arguments.map(x => x.toPlane()),
            statements: this.statements.map(x => x.toPlane()),
        };
    }
}
