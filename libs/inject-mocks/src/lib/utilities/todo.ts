import { NotYetImplementedError } from './not-yet-implemented-error';

export const todo = (): never => {
  throw new NotYetImplementedError();
}
