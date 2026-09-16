## 2025-03-08 - Accessible Input Components in React Native

**Learning:** When porting web inputs to React Native, web placeholder text must be replaced with `TextInput` controls using `onChangeText` and `onSubmitEditing`. Icon-only add/submit buttons require explicit `accessibilityLabel`, `accessibilityRole="button"`, and a minimum 44x44 point touch target (`minWidth: 44, minHeight: 44`).
**Action:** Use `TextInput` with `useThemeColor` for border and text color along with `Ionicons` wrapped in a 44x44 `TouchableOpacity` with accessibility attributes for all icon-only actions.
