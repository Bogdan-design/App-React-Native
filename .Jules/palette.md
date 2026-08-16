## 2026-03-31 - Expo Router Non-Route Files Conflict

**Learning:** Placing test files or non-route files directly in the Expo Router root (`src/app`) causes bundling or static rendering errors (e.g. `beforeEach is not defined`).
**Action:** Always place test files in a dedicated `__tests__` or `src/tests` directory outside the Expo Router tree.
