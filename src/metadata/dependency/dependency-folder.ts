import { AssignmentTree } from '../../tree/assignment/assignment.tree';
import { DefinitionTree } from '../../tree/definition/definition.tree';
import { ExtensionMethodTree } from '../../tree/definition-extension/extension-method.tree';
import { MethodTree } from '../../tree/method/method.tree';

export class DependencyFolder {
  public name: string;
  public definitions: DefinitionTree[];
  public extensionMembers: ExtensionMethodTree[];
  public functions: MethodTree[];
  public assignments: AssignmentTree[];
}
