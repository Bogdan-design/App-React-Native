## 2025-05-18 - AddItemForm React Native UX and Accessibility Enhancements

**Learning:** Porting web components to React Native requires replacing generic text placeholders with `TextInput` using `editable` (instead of `disabled`) and `onSubmitEditing` for keyboard submissions. Icon-only buttons need explicit `accessibilityLabel`, `accessibilityRole="button"`, and minimum 44x44 touch targets (`minWidth: 44, minHeight: 44`).

**Action:** When converting web input elements to React Native, always use `useThemeColor` for input borders/text, handle `onSubmitEditing` for keyboard accessibility, provide clear inline validation errors, and set `displayName` on `React.memo` wrapped components.
