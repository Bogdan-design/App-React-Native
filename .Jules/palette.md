## 2025-07-22 - [React Hooks Unconditional Theme Hooks]
**Learning:** In React Native Expo, custom theme hooks like `useThemeColor` must be called unconditionally at the top-level of components. Calling them inside ternary expressions or conditionally based on component states (like an input error status) violates the Rules of Hooks and causes React Native bundling/runtime errors.
**Action:** Always invoke `useThemeColor` unconditionally at the very top of the React component's body, and store the output in separate variables that can be selected from later.
