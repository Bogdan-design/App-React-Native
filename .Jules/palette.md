## 2025-05-15 - Redux Thunk and Expo Router prioritisation
**Learning:** For Redux Thunk v3+ integration, use the named import: import { thunk as thunkMiddleware } from 'redux-thunk'. Also, move test files and Storybook files outside the routing tree (e.g., to __tests__ subdirectories) to avoid rendering errors in Expo Router.
**Action:** Always check Redux Thunk import style and move non-route files out of the app directory.

## 2025-05-15 - React Native Input and Checkbox Events
**Learning:** React Native component event handlers use onChangeText for TextInput and onValueChange for Checkbox; web-standard onChange and checked properties from HTML inputs are incompatible.
**Action:** Use native event props for input components in React Native.
