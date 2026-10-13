## 2025-05-18 - Replacing Stub Text with Accessible React Native Form Components

**Learning:** Replacing placeholder text elements (e.g., `<ThemedText>input</ThemedText>`) with React Native `TextInput` and `@expo/vector-icons` `TouchableOpacity` improves accessibility and user experience significantly.
**Action:** Always include `accessibilityLabel` ("New item title" / "Add item"), `accessibilityRole="button"`, minimum 44x44 touch targets, theme awareness (`useThemeColor`), and `displayName` when upgrading stubbed components.
