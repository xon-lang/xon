/* eslint-disable max-classes-per-file */
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { Issue } from '../issue-service/issue';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { parseSource } from '../tree/parse';
import { SourceTree } from '../tree/source/source-tree';
import { createFunctionType } from '../tree/type/type-tree.helper';
import { TypeTree } from '../tree/type/type.tree';
import { GenericsMap } from '../inference/generics-map';

export interface DependencyProvider {
  get(scope: string, name: string): Dependency;
}

export class Dependency {
  definitions: DefinitionTree[] = [];

  constructor(public modules: SourceTree[]) {
    modules.forEach((x) => {
      this.definitions.push(...x.definitions);
    });
  }

  findDefinition(name: string): DefinitionTree {
    return this.definitions.find((x) => x.name === name);
  }

  // eslint-disable-next-line class-methods-use-this
  dependencies(): Dependency[] {
    return [];
  }
}

export class DirectoryDependencyProvider implements DependencyProvider {
  constructor(public libraryDirectory: string) {}

  public get(scope: string, name: string): Dependency {
    const libPath = path.resolve(this.libraryDirectory, scope, name);
    const codeFiles = glob.sync(`${libPath}/**/*.xon`);
    const modulesTrees = codeFiles.map((x) => parseSource(fs.readFileSync(x).toString(), x));
    return new Dependency(modulesTrees);
  }
}

export const dependencyProvider = new DirectoryDependencyProvider('xon-project-sample');
export const coreDependency = dependencyProvider.get('lib/xon', 'core');
export const srcDependency = dependencyProvider.get('src', '');

export function findDefinition(name: string): DefinitionTree {
  const definition = srcDependency.findDefinition(name) || coreDependency.findDefinition(name);
  if (!definition) throw new Error(`Couldn't find type "${name}"`);
  return definition;
}

export function findDefinitionByType(type: TypeTree): DefinitionTree {
  return findDefinition(type.name);
}

export function findOperatorMember(
  name: string,
  leftType: TypeTree,
  rightType: TypeTree,
): TypeTree {
  const definition = findDefinitionByType(leftType);
  if (leftType.genericArguments.length !== definition.genericParameters.length)
    throw Issue.errorFromTree(definition, 'Wrong generics count');

  const definitionGenericsMap: GenericsMap = new Map(
    definition.genericParameters.map((x, i) => [x, leftType.genericArguments[i]]),
  );
  const operatorMembers = definition.operators.filter(
    (x) =>
      x.name === name &&
      x.parameters[1].type.useGenericsMap(definitionGenericsMap).equals(rightType),
  );

  if (operatorMembers.length === 0)
    throw Issue.errorFromTree(
      leftType,
      `Operator "${name}" not found in the class "${leftType.name}"`,
    );

  if (operatorMembers.length > 1)
    throw Issue.errorFromTree(
      operatorMembers[0],
      `Cannot choose right operator "${name}" from ${operatorMembers.length} overloads in the class "${leftType.name}"`,
    );

  if (!operatorMembers[0].returnType)
    throw Issue.errorFromTree(operatorMembers[0], `Operator "${name}" must have return type`);

  return operatorMembers[0].returnType.useGenericsMap(definitionGenericsMap);
}

export function getMemberType(type: TypeTree, name: string): TypeTree {
  const definition = findDefinitionByType(type);
  if (type.genericArguments.length !== definition.genericParameters.length)
    throw Issue.errorFromTree(definition, 'Wrong generics count');

  const members = definition.members.filter((x) => x.name === name);

  if (members.length === 0) throw Issue.errorFromTree(definition, `Member "${name}" not found`);

  if (members.length > 1)
    throw Issue.errorFromTree(
      members[0],
      `Cannot choose right member "${name}" of ${members.length}`,
    );

  const genericsMap: GenericsMap = new Map(
    definition.genericParameters.map((x, i) => [x, type.genericArguments[i]]),
  );

  const member = members[0];

  if (member instanceof PropertyDefinitionMemberTree) {
    return member.type.useGenericsMap(genericsMap);
  }
  if (member instanceof MethodDefinitionMemberTree) {
    return createFunctionType(
      member.genericParameters,
      member.parameters.map((x) => x.type.useGenericsMap(genericsMap)),
      member.returnType.useGenericsMap(genericsMap),
    );
  }

  throw Issue.errorFromTree(definition, `Couldn't find member ${name}`);
}
