## 2025-05-18 - Replacing text placeholders in React Native input components

**Learning:** When porting web applications to React Native Expo, interactive form controls like input fields and submit buttons may have been temporarily stubbed out with `<ThemedText>`. Replacing them with native `TextInput` and `TouchableOpacity` buttons with `Ionicons` drastically improves usability and keyboard accessibility (`onSubmitEditing`), provided proper accessibility attributes (`accessibilityLabel`, `accessibilityRole="button"`, and `minWidth`/`minHeight` targets) are included.

**Action:** When updating form controls, ensure `TextInput` uses `editable={!disabled}`, `TouchableOpacity` includes `accessibilityLabel` and `accessibilityRole="button"`, and the component sets `displayName` for memoization debugging.
