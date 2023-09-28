// src/reducers/authReducer.ts
const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'LOGIN':
        // Handle login action and return a modified state
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        // Handle logout action and return a modified state
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        // For unknown actions, return the current state
        return state;
    }
  };
  
  
  export default authReducer;
  