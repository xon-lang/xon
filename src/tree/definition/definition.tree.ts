import {
    DefinitionContext,
    MethodMemberContext,
    PropertyMemberContext,
} from '../../grammar/xon-parser';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getStatementsTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class DefinitionTree extends ExpressionTree {
    name: string;
    properties: {
        name: string;
        valueType: string;
        value: ExpressionTree;
    }[];
    methods: {
        name: string;
        args: {
            name: string;
            valueType: string;
            value: ExpressionTree;
        }[];
        statements: StatementTree[];
    }[];

    constructor(public ctx: DefinitionContext) {
        super();
        this.name = ctx.ID().text;

        this.properties = ctx
            .definitionMember()
            .filter((x) => x instanceof PropertyMemberContext)
            .map((x) => x as PropertyMemberContext)
            .map((x) => ({
                name: x._name.text,
                valueType: x._valueType?.text,
                value: getExpressionTree(x._value),
            }));

        this.methods = ctx
            .definitionMember()
            .filter((x) => x instanceof MethodMemberContext)
            .map((x) => x as MethodMemberContext)
            .map((x) => ({
                name: x._name.text,
                args:
                    x.argument()?.map((x) => ({
                        name: x._name.text,
                        valueType: x._valueType.text,
                        value: x._value && getExpressionTree(x._value),
                    })) || [],
                statements: getStatementsTree(x.body().statement()),
            }));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            properties: this.properties.map((x) => ({
                name: x.name,
                value: x.value?.toPlain(),
                valueType: x.valueType,
            })),
            methods: this.methods.map((x) => ({
                name: x.name,
                args: x.args.map((x) => ({
                    name: x.name,
                    valueType: x.valueType,
                    value: x.value?.toPlain(),
                })),
                statements: x.statements.map((x) => x.toPlain()),
            })),
        };
    }
}
