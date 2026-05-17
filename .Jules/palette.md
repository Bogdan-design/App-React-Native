## 2026-05-17 - [Improved AddItemForm UX and fixed rendering]
**Learning:** Found that the app root directory was incorrectly returning JSX without a 'return' keyword. Also, the Redux Thunk v3+ integration requires named imports in this environment.
**Action:** Always check for 'return' in functional components and use named imports for thunk when dealing with Redux Thunk v3+.
