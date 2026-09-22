## 2025-05-18 - Replacing UI Placeholders with Accessible Native Components

**Learning:** When porting web React applications with Material UI to React Native / Expo, placeholder text elements (e.g. `<ThemedText>input</ThemedText>`) lack interactive accessibility properties (`accessibilityLabel`, `accessibilityRole`, keyboard handling). Native form elements in Expo require `editable={!disabled}`, `onSubmitEditing` for keyboard actions, and explicit 44x44 minimum touch targets.
**Action:** Always replace placeholder form controls with accessible `TextInput` and `TouchableOpacity` icon buttons, specifying explicit `accessibilityLabel`, `accessibilityRole="button"`, and theme-aware colors via `useThemeColor`.
