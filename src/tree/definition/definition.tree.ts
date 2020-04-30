import {
    DefinitionContext,
    MethodMemberContext,
    PropertyMemberContext,
} from '../../grammar/xon-parser';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { FunctionTree } from '../function/function.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionTree extends ExpressionTree {
    name: string;
    properties: {
        name: string;
        type: TypeTree;
        value: ExpressionTree;
    }[];
    methods: FunctionTree[];

    constructor(public ctx: DefinitionContext) {
        super();
        this.name = ctx.ID().text;

        this.properties = ctx
            .member()
            .filter((x) => x instanceof PropertyMemberContext)
            .map((x) => x as PropertyMemberContext)
            .map((x) => ({
                name: x._name.text,
                type: x.type() && getTypeTree(x.type()),
                value: getExpressionTree(x._value),
            }));

        this.methods = ctx
            .member()
            .filter((x) => x instanceof MethodMemberContext)
            .map((x) => x as MethodMemberContext)
            .map((x) => new FunctionTree(x.function()));
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
        };
    }
}
