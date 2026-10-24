## 2026-10-24 - React Native AddItemForm Accessible Controls

**Learning:** Replacing plain string placeholders in input forms with native React Native `TextInput` and accessible `Pressable` icon buttons significantly enhances keyboard accessibility, screen reader support, and theme adaptability across light and dark modes.
**Action:** When updating form components, always use `accessibilityRole="button"`, `accessibilityLabel`, and `accessibilityState={{ disabled }}` alongside `useThemeColor` for consistent styling and a minimum touch target size of 44x44.
