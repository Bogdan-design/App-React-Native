# Palette's Journal - Critical Learnings

## 2025-05-18 - Interactive Icon Buttons & Form Accessibility in Expo React Native
**Learning:** In converted/ported React Native Expo web applications, placeholder static text (e.g. `ThemedText` with text "input" or "add") leaves the UI unusable and inaccessible for screen readers. Replacing them with `TextInput` and touchable `Ionicons` with `accessibilityRole="button"`, `accessibilityLabel`, and `accessibilityState={{ disabled }}` drastically improves UX while keeping changes under 50 lines.
**Action:** When working on form inputs, always pair `TextInput` with an explicit `accessibilityLabel`, use semantic theme colors via `useThemeColor`, ensure buttons meet the 44x44 target, and clear inline validation errors on user typing.
