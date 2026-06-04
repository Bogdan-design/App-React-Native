## 2025-05-20 - [TextInput and Button Accessibility]
**Learning:** In React Native, interactive elements must use specific props for accessibility (`accessibilityLabel`, `accessibilityRole`) and state (`editable` for TextInput, `disabled` for TouchableOpacity). Minimum hit targets of 44x44 are essential for mobile usability.
**Action:** Always include `accessibilityLabel` and `accessibilityRole` on icon-only buttons and ensure touch targets meet the 44x44 standard. Use `editable` instead of `disabled` for `TextInput`.
