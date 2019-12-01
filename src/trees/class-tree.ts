import { ClassDeclarationContext } from '../../grammar/generated/XonParser';
import { FunctionTree } from './function-tree';
import { PropertyTree } from './property-tree';

export class ClassTree {
    name: string;
    properties: PropertyTree[] = [];
    functions: FunctionTree[] = [];

    constructor(public ctx: ClassDeclarationContext) {
        this.name = ctx._name.text;
        this.functions = ctx.functionDeclaration().map(x => new FunctionTree(x));
    }

    toPlain() {
        return {
            name: this.name,
            properties: this.properties.map(x => x.toPlain()),
            functions: this.functions.map(x => x.toPlain()),
        };
    }
}
