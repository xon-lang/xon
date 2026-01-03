import {CharacterNode, newCharacterSemantic, SemanticContext} from '#analyzer';

export function semantifyCharacterNode(this: CharacterNode, context: SemanticContext): void {
  const character = this.content?.getText().first();

  if (!character) {
    return;
  }

  this.semantic = newCharacterSemantic(character);
}
