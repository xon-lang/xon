import fs from 'fs';
import path from 'path';
import { TypeContext } from '../../grammar/xon-parser';
import { parseProgram } from '../../parse';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { createSimpleTreeType } from './type-helper';

export abstract class TypeTree extends BaseTree {
    ctx?: TypeContext;
    name: string | number = NaN;

    abstract eq(anotherType: TypeTree): boolean;

    typeDefinition: DefinitionTree;

    getInfixOperationType(operator: string, operandType: TypeTree): TypeTree {
        if (!this.typeDefinition) {
            this.typeDefinition = parseProgram(
                fs.readFileSync(path.resolve(__dirname, `../../../lib/${this.name}.xon`)).toString()
            ).definitions[0];
        }

        const infixMethodInfo = this.typeDefinition.infixOperators.find(
            (x) => x.operator == operator && x.arg.type.name == operandType.name
        );

        return createSimpleTreeType(infixMethodInfo.returnType);
    }
}
