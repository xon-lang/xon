import {
    DefinitionContext,
    InfixOperatorMemberContext,
    // InitMemberContext,
    MethodMemberContext,
    PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { FunctionTree } from '../function/function.tree';
import { getStatementsTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionTree extends BaseTree {
    name: string;
    properties: {
        name: string;
        type: TypeTree;
        value: ExpressionTree;
    }[];
    methods: FunctionTree[];
    infixOperators: {
        operator: string;
        arg: {
            name: string;
            type: TypeTree;
        };
        returnType: string;
        statements: StatementTree[];
    }[];
    // initMethods: FunctionTree[];

    constructor(public ctx: DefinitionContext) {
        super();
        this.name = ctx._name.text;

        const properties = ctx
            .member()
            .filter((x) => x instanceof PropertyMemberContext)
            .map((x) => x as PropertyMemberContext);
        const methods = ctx
            .member()
            .filter((x) => x instanceof MethodMemberContext)
            .map((x) => x as MethodMemberContext)
            .map((x) => x.function());

        this.infixOperators = ctx
            .member()
            .filter((x) => x instanceof InfixOperatorMemberContext)
            .map((x) => x as InfixOperatorMemberContext)
            .map((x) => ({
                operator: x.operator().text,
                arg: {
                    name: x.ID().text,
                    type: getTypeTree(x._operandType),
                },
                returnType: x._returnType.text,
                statements: getStatementsTree(x.body()),
            }));

        this.properties = properties.map((x) => {
            const expr = getExpressionTree(x._value);
            return {
                name: x._name.text,
                type: x.type() && getTypeTree(x.type()),
                value: expr,
            };
        });
        this.methods = methods.map((x) => new FunctionTree(x));
    }
}
