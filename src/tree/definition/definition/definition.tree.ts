import {
    ClassDefinitionContext,
    MethodClassItemContext,
    PropertyClassItemContext,
} from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { FunctionStatementTree } from '../../statement/function-statement/function-statement.tree';
import { getStatementTree } from '../../statement/statement-helper';

export class ClassDefinitionTree extends ExpressionTree {
    name: string;
    properties: {
        name: string;
        valueType: string;
        value: ExpressionTree;
    }[];
    methods: FunctionStatementTree[];

    constructor(public ctx: ClassDefinitionContext) {
        super();
        this.name = ctx.ID().text;

        this.properties = ctx
            .classItem()
            .filter(x => x instanceof PropertyClassItemContext)
            .map(x => x as PropertyClassItemContext)
            .map(x => ({
                name: x._name.text,
                valueType: x._type.text,
                value: getExpressionTree(x._value),
            }));

        this.methods = ctx
            .classItem()
            .filter(x => x instanceof MethodClassItemContext)
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
