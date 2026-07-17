# Palette Journal

## 2026-07-17 - Prevent App Crashes from Root API Requests and Route Collisions
**Learning:** Initializing asynchronous API requests at application start-up without catch blocks triggers uncaught Promise rejections that lead to hard app crashes on network failures. Additionally, leaving non-routing files like test (`.test.ts`) or storybook (`.stories.tsx`) files inside the Expo Router directory tree (`src/app/`) causes route collision errors such as `beforeEach is not defined` during compilation.
**Action:** Always intercept network requests with robust `.catch()` clauses mapped to a visible top-level UI error banner. Relocate test and story files to outside the routing folder tree to prevent Metro bundler route conflicts.
