declare module "virtual:__federation__" {
  import { ComponentType } from 'react';

  /**
   * Represents a module fetched from a remote entry. Default export is expected to be a React exposedModule.
   */
  type RemoteModule<T = unknown> = { default: ComponentType<T> };

  /**
   * Configuration for setting up a remote module, detailing how and from where the module should be loaded.
   */
  type RemoteConfig = { url: string; format: "esm" | "systemjs" | "var"; from: "vite" | "webpack" };

  /**
   * Ensures the initialization of a remote module, loading it if not already done.
   * @param remoteId The unique identifier for the remote module to ensure is loaded.
   * @returns A promise that resolves when the module is loaded and initialized.
   */
  function __federation_method_ensure(remoteId: string): Promise<void>;

  /**
   * Configures a remote module with the specified name and configuration.
   * @param remoteName The unique identifier for the remote module.
   * @param remoteConfig The configuration object for the remote module.
   */
  function __federation_method_setRemote(remoteName: string, remoteConfig: RemoteConfig): void;

  /**
   * Asynchronously retrieves a remote module by its name and the name of the exposedModule it exports.
   * @param remoteName The unique identifier for the remote module.
   * @param componentName The name of the exposedModule within the remote module to retrieve.
   * @returns A promise that resolves to the requested module.
   */
  function __federation_method_getRemote<T>(remoteName: string, componentName: string): Promise<RemoteModule<T>>;

  /**
   * Optionally wraps a module's default export within an object if it doesn't already have a default export.
   * @param module The module to potentially wrap with a default export.
   * @param need Indicates whether wrapping is necessary.
   * @returns The original module or a modified version with a default export.
   */
  function __federation_method_wrapDefault<T>(module: RemoteModule<T>, need: boolean): RemoteModule<T>;

  /**
   * Unwraps the default export from a module, providing direct access to it.
   * @param module The module from which to extract the default export.
   * @returns The default export of the module.
   */
  function __federation_method_unwrapDefault<T>(module: RemoteModule<T>): ComponentType<T>;

  /**
   * Updates or defines the configuration for a remote module after its initial setup.
   * Can be used to dynamically change module loading behavior.
   * @param remoteName The unique identifier for the remote module to update.
   * @param remoteConfig The new configuration object for the remote module.
   */
  function __federation_method_setRemoteConfig(remoteName: string, remoteConfig: RemoteConfig): void;
}
