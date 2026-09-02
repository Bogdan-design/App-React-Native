## 2025-05-15 - Interactive Input Controls in React Native Ports

**Learning:** When migrating or updating web inputs to React Native, replacing text placeholder elements with functional `TextInput` and `Pressable` controls requires explicit accessibility attributes (`accessibilityLabel`, `accessibilityRole="button"`) and touch targets (minimum 44x44 points) to remain screen-reader accessible and touch-friendly.
**Action:** Always wrap icon buttons in `Pressable` with `accessibilityLabel` and `accessibilityRole="button"`, and use `onSubmitEditing` on `TextInput` for keyboard accessibility.
