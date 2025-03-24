import {DeclarationStatementNode, DiagnosticContext} from '#analyzer';

export function diagnoseDeclarationStatementNode(
  this: DeclarationStatementNode,
  context: DiagnosticContext,
): void {
  if (this.annotation?.expression?.diagnose) {
    this.annotation?.expression.diagnose(context);
  }

  if (this.assignment?.expression?.diagnose) {
    this.assignment?.expression.diagnose(context);
  }
}
