import {DeclarationNode, DiagnosticContext} from '#analyzer';

export function diagnoseDeclarationNode(this: DeclarationNode, context: DiagnosticContext): void {
  if (this.type?.expression?.diagnose) {
    this.type?.expression.diagnose(context);
  }

  if (this.value?.expression?.diagnose) {
    this.value?.expression.diagnose(context);
  }
}
