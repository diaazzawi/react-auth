"use client";

import {useReactAuthKit} from "../AuthContext";
import useIsAuthenticated from "./useIsAuthenticated";

/**
 * Auth Header React Hook
 *
 * Call the hook,
 * to get the auth header for network request
 *
 * **Format: `type token` (authType-space-authToken)**
 *
 * @example
 * Here is a simple example
 * ```jsx
 * import useAuthHeader from '@diaazzawi/react-auth/hooks/useAuthHeader'
 *
 * const Component = () => {
 *  const authHeader = useAuthHeader();
 *  const headers = {
 *    'Authorization': authHeader
 *  }
 *  // use the headers in the network request
 *  ...
 * }
 * ```
 *
 * @returns If the user is authenticated,
 * then `'auth.type auth.token'` is returned.
 * If the user is not authenticated, then `null` is returned.
 *
 * @throws AuthError
 * Thrown if the Hook is used outside the Provider Scope.
 */
const useAuthHeader = (): (() => string | null) => {
  const {value} = useReactAuthKit();
  const isAuthenticated = useIsAuthenticated();

  return () => {
    if (!!value.auth && isAuthenticated()) {
      return `${value.auth.type} ${value.auth.token}`;
    } else {
      return null;
    }
  };
};

export default useAuthHeader;
