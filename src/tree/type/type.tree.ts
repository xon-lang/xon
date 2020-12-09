import fs from 'fs';
import path from 'path';
import { TypeContext } from '../../grammar/xon-parser';
import { parseProgram } from '../../parse';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './fucntion-type/function-type.tree';
import { ObjectTypeTree } from './object-type/object-type.tree';
import { SimpleTypeTree } from './simple-type/simple-type.tree';
import { createSimpleTreeType } from './type-helper';

export abstract class TypeTree extends BaseTree {
    ctx?: TypeContext;
    name: string | number = NaN;

    get asSimple() {
        return (this as any) as SimpleTypeTree;
    }

    get asArray() {
        return (this as any) as ArrayTypeTree;
    }

    get asDictionary() {
        return (this as any) as ObjectTypeTree;
    }

    get asFunction() {
        return (this as any) as FunctionTypeTree;
    }

    abstract eq(anotherType: TypeTree): Boolean;

    typeDefinition: DefinitionTree;

    getInfixOperationType(operator: string, operandType: TypeTree): TypeTree {
        if (!this.typeDefinition) {
            this.typeDefinition = parseProgram(
                fs
                    .readFileSync(path.resolve(__dirname, `../../../lib/${this.name}.xon`))
                    .toString()
            ).definitions[0];
        }

        const infixMethodInfo = this.typeDefinition.infixOperators.find(
            (x) => x.operator == operator && x.arg.type.name == operandType.name
        );

        console.log(operandType.name)
        console.log(infixMethodInfo)

        return createSimpleTreeType(infixMethodInfo.returnType);
    }
}
