## 2026-05-21 - [Redux Thunk v3+ named export]
**Learning:** For Redux Thunk v3+ integration, use the named import: `import { thunk as thunkMiddleware } from 'redux-thunk'`.
**Action:** Always check the installed version of `redux-thunk` and use the named export if it's v3 or higher.

## 2026-05-21 - [Expo Router App Root Conflict]
**Learning:** When both `app/` and `src/app/` exist, Expo Router might default to `src/app/` as the root, which can cause issues if routes are defined in the root `app/` folder.
**Action:** Ensure only one app directory exists or `EXPO_ROUTER_APP_ROOT` is explicitly set.

## 2026-05-21 - [Window object in SSR/Expo]
**Learning:** Always check `if (typeof window !== 'undefined')` before accessing the `window` object to ensure compatibility with all environments, especially during SSR or in Expo.
**Action:** Wrap any `window` accesses in a conditional check.
