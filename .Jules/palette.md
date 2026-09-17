## 2025-09-17 - Upgrading Web Placeholder Components to Accessible Native Components

**Learning:** When porting web applications with placeholder `ThemedText` tags ("input", "add") in React Native Expo, replacing them with native `TextInput` and `TouchableOpacity` requires careful accessibility styling (`accessibilityLabel`, `accessibilityRole="button"`, min 44x44 touch targets) and theme color hooks (`useThemeColor`).

**Action:** Ensure native `TextInput` uses `editable={!disabled}` and `onSubmitEditing` for keyboard interaction, and couple icon buttons with `TouchableOpacity` with explicit `accessibilityRole="button"`.
