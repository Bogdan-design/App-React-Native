## 2025-05-18 - Accessibility and UX Improvements for Input Forms
**Learning:** Text placeholders in React Native components imported from web ports need explicit `TextInput`, `Pressable`, and `Ionicons` with accessibility attributes (`accessibilityLabel`, `accessibilityRole="button"`) and standard min touch targets (44x44).
**Action:** Always replace placeholder labels with standard React Native input controls and touchable elements for better accessibility and user interaction.
