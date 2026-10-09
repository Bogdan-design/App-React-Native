## 2025-05-10 - Accessible Input and Button Pattern for AddItemForm
**Learning:** React Native `TextInput` components require `editable={!disabled}` instead of HTML `disabled` attributes, and icon-only buttons require `accessibilityLabel` and `accessibilityRole="button"` along with a minimum 44x44 touch target to satisfy accessibility standards.
**Action:** When building interactive forms, always provide `accessibilityLabel`, minimum 44x44 hit areas for icon buttons, and inline validation error text for clear feedback.
