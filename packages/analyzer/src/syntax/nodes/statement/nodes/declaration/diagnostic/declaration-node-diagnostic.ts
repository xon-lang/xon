import {DeclarationNode, DiagnosticContext} from '#analyzer';

export function diagnoseDeclarationNode(this: DeclarationNode, context: DiagnosticContext): void {
  if (this.annotation?.expression?.diagnose) {
    this.annotation?.expression.diagnose(context);
  }

  if (this.assignment?.expression?.diagnose) {
    this.assignment?.expression.diagnose(context);
  }
}
