import {
    DefinitionContext,
    MethodDeclarationContext,
    PropertyDeclarationContext,
} from '../../grammar/xon-parser';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { getStatementTree } from '../statement/statement-helper';

export class DefinitionTree extends ExpressionTree {
    name: string;
    properties: {
        name: string;
        valueType: string;
        value: ExpressionTree;
    }[];
    methods: FunctionStatementTree[];

    constructor(public ctx: DefinitionContext) {
        super();
        this.name = ctx.TypeID().text;

        this.properties = ctx
            .declration()
            .filter(x => x instanceof PropertyDeclarationContext)
            .map(x => x as PropertyDeclarationContext)
            .map(x => ({
                name: x._name.text,
                valueType: x._valueType.text,
                value: getExpressionTree(x._value),
            }));

        this.methods = ctx
            .declration()
            .filter(x => x instanceof MethodDeclarationContext)
            .map(x => getStatementTree(x) as FunctionStatementTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            properties: this.properties,
            methods: this.methods.map(x => x.toPlain()),
        };
    }
}
