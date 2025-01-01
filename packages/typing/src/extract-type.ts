import {$Model, $Type, is} from '#typing';

// todo remove when all types will be models
export function extractType(model: unknown): $Type {
  if (is(model, $Model)) {
    return model.$;
  }

  return $Model;
}
