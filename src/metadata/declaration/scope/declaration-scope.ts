import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { Boolean } from '../../../lib/core';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { CoreDeclarationScope } from './core/core-declaration-scope';

export class DeclarationScope {
  static _core: CoreDeclarationScope;
  get core(): CoreDeclarationScope {
    return DeclarationScope._core;
  }

  parameters: ParameterMetadata[] = [];
  definitions: DefinitionMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  create() {
    return new DeclarationScope(this);
  }

  addParameter(metadata: ParameterMetadata) {
    this.parameters.push(metadata);
  }

  filter(predicate: (x: ParameterMetadata) => Boolean): ParameterMetadata[] {
    const declarations = this.parameters.filter(predicate);
    const parentDeclarations = this.parent?.filter(predicate) || [];
    return [...declarations, ...parentDeclarations];
  }

  filterByName(name: String, predicate?: (x: ParameterMetadata) => Boolean): ParameterMetadata[] {
    return this.filter((x) => x.name === name && (!predicate || predicate(x)));
  }

  findByName(name: String, predicate?: (x: ParameterMetadata) => Boolean): ParameterMetadata {
    const results = this.filterByName(name, predicate);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
      );
      throw new Error(`Too many '${name}' declarations found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Declaration '${name}' not found`);
    }

    return results[0];
  }

  // definitions

  addDefinition(metadata: DefinitionMetadata) {
    this.definitions.push(metadata);
  }

  filterDefinitions(predicate: (x: DefinitionMetadata) => Boolean): DefinitionMetadata[] {
    const declarations = this.definitions.filter(predicate);
    const parentDeclarations = this.parent?.filterDefinitions(predicate) || [];
    return [...declarations, ...parentDeclarations];
  }

  filterDefinitionsByName(
    name: String,
    predicate?: (x: DefinitionMetadata) => Boolean,
  ): DefinitionMetadata[] {
    return this.filterDefinitions((x) => x.name === name && (!predicate || predicate(x)));
  }

  findDefinitionByName(
    name: String,
    predicate?: (x: DefinitionMetadata) => Boolean,
  ): DefinitionMetadata {
    const results = this.filterDefinitionsByName(name, predicate);

    if (results.length > 1) {
      const issues = results.map((x) =>
        Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
      );
      throw new Error(`Too many '${name}' definitions found:\n${issues.join('\n')}`);
    }
    if (!results.length) {
      throw new Error(`Definition '${name}' not found`);
    }

    return results[0];
  }

  // operators
  union(other: DeclarationScope): DeclarationScope {
    const left = this.filter((x) => true);
    const right = other.filter((x) => true);
    const scope = new DeclarationScope(this.core);
    scope.parameters = left.concat(right);
    return scope;
  }

  intersect(other: DeclarationScope): DeclarationScope {
    const left = this.filter((x) => true);
    const right = other.filter((x) => true);
    const scope = new DeclarationScope(this.core);
    const commons = left.filter((x) => right.some((z) => x.name === z.name));
    scope.parameters = left.concat(right).filter((x) => !commons.some((z) => x.name === z.name));
    return scope;
  }
}
