import {CharacterNode, newCharacterTypeSemantic, SemanticContext} from '#analyzer';

export function semantifyCharacterNode(this: CharacterNode, context: SemanticContext): void {
  const character = this.content?.text.first();

  if (!character) {
    return;
  }

  this.semantic = newCharacterTypeSemantic(character);
}
