import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SquareAuthService from "../api/squareAuth";
import { initializeAuth } from "../reducers/userReducer";

/**
 * Hook to initialize authentication state on app load
 */
export const useAuthInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeAuthState();
  }, [dispatch]);

  const initializeAuthState = async () => {
    try {
      const token = SquareAuthService.getToken();
      const user = SquareAuthService.getUser();

      if (token && user) {
        // Check if token is still valid
        const isValid = await SquareAuthService.verifyToken();

        if (isValid) {
          // Try to refresh token if needed
          await SquareAuthService.refreshTokenIfNeeded();

          // Initialize auth state
          dispatch(initializeAuth({ user, token }));
        } else {
          // Token is invalid, clear auth state
          SquareAuthService.logout();
          dispatch(initializeAuth(null));
        }
      } else {
        // No auth data found
        dispatch(initializeAuth(null));
      }
    } catch (error) {
      console.error("Error initializing auth state:", error);
      // Clear potentially invalid auth data
      SquareAuthService.logout();
      dispatch(initializeAuth(null));
    }
  };
};

export default useAuthInit;
