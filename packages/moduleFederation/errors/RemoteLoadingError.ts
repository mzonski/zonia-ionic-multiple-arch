export class RemoteLoadingError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
    this.name = "RemoteLoadingError";
  }
}
