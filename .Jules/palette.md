## 2025-05-18 - React Native Item Form UX & Accessibility
**Learning:** Replacing web-placeholder text nodes with React Native `TextInput` and `TouchableOpacity` with `@expo/vector-icons` requires explicit `accessibilityLabel`, `accessibilityRole="button"`, minimum touch target size (44x44px), `editable` prop, and `onSubmitEditing` support for mobile keyboard accessibility.
**Action:** Always provide accessible labels, hit target dimensions, soft-keyboard submit handlers, and `useThemeColor` styling when converting placeholder text inputs into interactive mobile components.
