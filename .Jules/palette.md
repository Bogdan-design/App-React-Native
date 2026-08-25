## 2025-08-25 - Unconditional Theme Hook Calls & Expo Router Tree Isolation

**Learning:** Dynamic custom theme hooks like `useThemeColor` must be invoked unconditionally at the top level of component scope rather than conditionally inside ternary operators. In Expo Router, non-route test/story files placed inside `src/app/` cause static build errors during web bundling.

**Action:** Always invoke `useThemeColor` at the top level of React Native components and ensure test/story files are placed outside the `src/app` route directory tree.
