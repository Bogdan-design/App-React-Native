## 2025-05-20 - Accessible TextInput & Icon Button in AddItemForm

**Learning:** Replacing raw text placeholders in React Native / Expo apps with `TextInput` and `@expo/vector-icons` significantly improves UX when proper accessibility props (`accessibilityLabel`, `accessibilityRole="button"`, `hitSlop`) and theme hooks (`useThemeColor`) are applied.

**Action:** Ensure icon buttons have at least 44x44 touch targets via `minWidth`/`minHeight` or `hitSlop`, clear inline error states when input changes, and provide proper `accessibilityLabel` attributes.
