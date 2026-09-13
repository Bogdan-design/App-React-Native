## 2025-05-18 - Native Controls in Ported Expo Apps

**Learning:** When porting web React code to React Native Expo, replacing plain text placeholders (`<ThemedText>input</ThemedText>`) with native interactive controls (`TextInput`, `TouchableOpacity`, `@expo/vector-icons`) significantly improves form usability. Always specify explicit `accessibilityLabel`, `accessibilityRole="button"`, and theme-aware colors (`useThemeColor`) to ensure screen reader accessibility and dark/light mode consistency.

**Action:** When working on form inputs or icon buttons in React Native Expo components, always use native `TextInput` with `onChangeText`/`onSubmitEditing` and wrap icons in `TouchableOpacity` with `accessibilityLabel` and `accessibilityRole`.
