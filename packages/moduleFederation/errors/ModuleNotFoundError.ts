class ModuleNotFoundError extends Error {
  constructor(public moduleName: string) {
    super(`Module "${moduleName}" could not be found.`);
    this.name = 'ModuleNotFoundError';
  }
}

export default ModuleNotFoundError;
