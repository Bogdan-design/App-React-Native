# Palette's Journal - UX & Accessibility Learnings

## 2025-05-10 - Replacing web placeholder elements with accessible React Native primitives
**Learning:** Ported web apps in React Native often leave placeholder text for interactive controls (like "input", "add", "Del"). Replacing these with native `TextInput` and `Ionicons` enclosed in `TouchableOpacity` with explicit `accessibilityLabel`, `accessibilityRole="button"`, and minimum touch targets (44x44) significantly improves usability and accessibility.
**Action:** When updating form controls, always ensure `editable={!disabled}`, `onChangeText`, `onSubmitEditing`, and semantic theme styling via `useThemeColor`.
