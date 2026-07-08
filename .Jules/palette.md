## 2025-05-15 - [Redux Thunk v3+ Integration]
**Learning:** For Redux Thunk v3+ integration, use the named export: `import { thunk as thunkMiddleware } from 'redux-thunk'`.
**Action:** Always check the installed version of `redux-thunk` and use the named export for version 3+.

## 2025-05-15 - [Expo Router Rendering Errors]
**Learning:** Test files (e.g., `.test.ts`) and Storybook files (e.g., `.stories.tsx`) located within the routing tree (`src/app` in this project) cause rendering errors in Expo Router.
**Action:** Ensure that all non-route files are moved outside the routing tree or into designated folders if the project structure allows.

## 2025-05-15 - [React Native Nesting Constraints]
**Learning:** In React Native, nesting complex components or multi-line layouts inside a `<ThemedText>` (which uses the native `<Text>` component) is invalid and leads to rendering issues.
**Action:** Use `<ThemedView>` for layout nesting and reserve `<ThemedText>` only for text content.
