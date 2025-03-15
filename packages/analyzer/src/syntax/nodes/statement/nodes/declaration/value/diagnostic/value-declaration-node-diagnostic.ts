import {DiagnosticContext, ValueDeclarationNode} from '#analyzer';

export function diagnoseValueDeclarationNode(this: ValueDeclarationNode, context: DiagnosticContext): void {
  if (this.type?.expression?.diagnose) {
    this.type?.expression.diagnose(context);
  }

  if (this.value?.expression?.diagnose) {
    this.value?.expression.diagnose(context);
  }
}
