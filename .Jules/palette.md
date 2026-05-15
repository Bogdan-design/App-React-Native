## 2025-05-15 - [Themed UI Components and Store Stability]
**Learning:** React Native components in this codebase often use placeholders. Using theme-aware colors and standardizing Redux thunk imports ensures both visual consistency and runtime stability across different environments (Web, Mobile, Node).
**Action:** Always check for `typeof window !== 'undefined'` before accessing `window` in store configurations, use named `thunk` imports for Redux Thunk v3+, and utilize `useThemeColor` for all interactive elements.
