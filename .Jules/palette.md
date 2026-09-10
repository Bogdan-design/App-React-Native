## 2025-05-18 - Native React Native Controls for Form Accessibility

**Learning:** Replacing plain text placeholders with native React Native `TextInput` and `TouchableOpacity` controls (along with `@expo/vector-icons` icons) provides keyboard submission (`onSubmitEditing`), proper accessibility attributes (`accessibilityLabel`, `accessibilityRole`), and dark/light theme integration (`useThemeColor`).
**Action:** When working on input/form components ported from web text placeholders, always use native input/button components with explicit ARIA/accessibility roles and minimum 44x44 touch target sizes.
