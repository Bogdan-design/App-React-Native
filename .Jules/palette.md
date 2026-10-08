## 2025-05-18 - Replacing web text placeholders in React Native input forms
**Learning:** Migrating ported web components with placeholder text (`<ThemedText>input</ThemedText>`) requires replacing them with native `TextInput` and `TouchableOpacity` controls. Interactive icon buttons must include `accessibilityLabel`, `accessibilityRole="button"`, and a minimum 44x44 target size for touch/accessibility compliance.
**Action:** Always wrap icon-only action triggers in accessible `TouchableOpacity` components with theme-aware borders and colors.
