import {
    DefinitionContext,
    // InitMemberContext,
    MethodMemberContext,
    PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { FunctionTree } from '../function/function.tree';
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
        // const initMethods = ctx
        //     .member()
        //     .filter((x) => x instanceof InitMemberContext)
        //     .map((x) => x as InitMemberContext)
        //     .map((x) => x.function());

        this.properties = properties.map((x) => {
            const expr = getExpressionTree(x._value);
            return {
                name: x._name.text,
                type: x.type() && getTypeTree(x.type()),
                value: expr,
            };
        });
        this.methods = methods.map((x) => new FunctionTree(x));
        // this.initMethods = initMethods.map((x) => new FunctionTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            properties: this.properties.map((x) => ({
                name: x.name,
                value: x.value?.toPlain(),
                type: x.type?.toPlain(),
            })),
            methods: this.methods.map((x) => x.toPlain()),
            // initMethods: this.initMethods.map((x) => x.toPlain()),
        };
    }
}
