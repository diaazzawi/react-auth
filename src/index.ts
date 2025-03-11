/**
 * Entry point of the Library.
 */

export {
  default as AuthKitContext,
  useReactAuthKit,
  useReactAuthKitConfig,
  useReactAuthKitRouter,
} from "./AuthContext";
export {default as AuthProvider} from "./AuthProvider";
export {
  default as createRefresh,
  type createRefreshParamInterface,
  type RefreshTokenActionPayloadTrue,
  type RefreshTokenCallbackResponse,
} from "./createRefresh";
export {default as createStore, type createStoreReturn} from "./createStore";
export {AuthError} from "./errors";
export * from "./hooks";
export type {
  AuthKitStateInterface,
  AuthKitStateInterfaceAuthToken,
  SignInActionPayload,
  signInFunctionParams,
} from "./types";
