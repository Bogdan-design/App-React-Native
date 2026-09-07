## 2025-05-18 - React Native TextInput Accessibility and Form Validation

**Learning:** Replacing web placeholder elements in React Native Expo components requires explicit `accessibilityLabel`, `accessibilityRole`, and `editable` props (instead of web-standard `disabled`). Providing inline red validation feedback on `TextInput` border and error text prevents standard form submit crashes.
**Action:** Always wrap icon-only buttons with `TouchableOpacity` / `Pressable` having explicit `accessibilityLabel` and `accessibilityRole="button"` and `minWidth: 44, minHeight: 44`.
