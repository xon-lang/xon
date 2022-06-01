import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { CoreDeclarationScope } from '../core/core-declaration-metadata';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';

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

  addDefinition(metadata: DefinitionMetadata) {
    this.definitions.push(metadata);
  }

  filter(predicate: (x: ParameterMetadata) => boolean): ParameterMetadata[] {
    const declarations = this.parameters.filter(predicate);
    const parentDeclarations = this.parent?.filter(predicate) || [];
    return [...declarations, ...parentDeclarations];
  }

  filterByName(name: String, predicate?: (x: ParameterMetadata) => boolean): ParameterMetadata[] {
    return this.filter((x) => x.name === name && (!predicate || predicate(x)));
  }

  findByName(name: String, predicate?: (x: ParameterMetadata) => boolean): ParameterMetadata {
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
  filterDefinitionByName(
    name: String,
    predicate?: (x: DefinitionMetadata) => boolean,
  ): DefinitionMetadata[] {
    return this.definitions.filter((x) => x.name === name && (!predicate || predicate(x)));
  }
}
