export class NotYetImplementedError extends Error {
  constructor(message?: string) {
      super(message || "Method not yet implemented");
      this.name = "NotImplementedYetError";
  }
}
