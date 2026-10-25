## 2024-10-25 - Accessible Add Item Controls in React Native

**Learning:** Replacing plain text placeholders in React Native components with properly configured `TextInput` and `TouchableOpacity` controls (using `accessibilityLabel`, `accessibilityRole="button"`, and explicit touch target sizes) significantly improves screen reader usability and keyboard submission behavior.

**Action:** Always include explicit `accessibilityLabel`, `accessibilityRole`, and `onSubmitEditing` handlers on custom form input groups.
