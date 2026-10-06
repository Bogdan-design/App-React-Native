# Palette Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Replacing Placeholder Text with Native Accessible Components
**Learning:** In ported React Native Expo web apps, components using plain `<ThemedText>` placeholders instead of proper `TextInput` and touchable icon controls lack accessibility, visual feedback, and keyboard interaction.
**Action:** Replace placeholder elements with `TextInput` and `TouchableOpacity`/`Ionicons` with explicit `accessibilityLabel`, `accessibilityRole`, error handling, and theme color integration.
