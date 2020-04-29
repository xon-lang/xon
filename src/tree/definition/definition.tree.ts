import {
    DefinitionContext,
    DefinitionMemberContext,
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
        type: string;
        value: ExpressionTree;
    }[];
    methods: {
        name: string;
        args: {
            name: string;
            type: string;
            value: ExpressionTree;
        }[];
        statements: StatementTree[];
    }[];
    definitions: DefinitionTree[];

    constructor(public ctx: DefinitionContext) {
        super();
        this.name = ctx.ID().text;

        this.definitions = ctx
            .member()
            .filter((x) => x instanceof DefinitionMemberContext)
            .map((x) => x as DefinitionMemberContext)
            .map((x) => new DefinitionTree(x.definition()));

        this.properties = ctx
            .member()
            .filter((x) => x instanceof PropertyMemberContext)
            .map((x) => x as PropertyMemberContext)
            .map((x) => ({
                name: x._name.text,
                type: x._type?.text,
                value: getExpressionTree(x._value),
            }));

        this.methods = ctx
            .member()
            .filter((x) => x instanceof MethodMemberContext)
            .map((x) => x as MethodMemberContext)
            .map((x) => ({
                name: x.ID().text,
                args:
                    x.argument()?.map((x) => ({
                        name: x._name.text,
                        type: x._type.text,
                        value: x._value && getExpressionTree(x._value),
                    })) || [],
                statements: getStatementsTree(x.body()),
            }));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            definitions: this.definitions.map((x) => x.toPlain()),
            properties: this.properties.map((x) => ({
                name: x.name,
                value: x.value?.toPlain(),
                type: x.type,
            })),
            methods: this.methods.map((x) => ({
                name: x.name,
                args: x.args.map((x) => ({
                    name: x.name,
                    type: x.type,
                    value: x.value?.toPlain(),
                })),
                statements: x.statements.map((x) => x.toPlain()),
            })),
        };
    }
}
