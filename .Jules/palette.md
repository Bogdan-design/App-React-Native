## 2025-05-18 - Accessibility & Form Controls in React Native

**Learning:** Replacing placeholder text in form controls with `TextInput` and `TouchableOpacity` with `accessibilityLabel="Add item"` and `accessibilityRole="button"` significantly improves accessibility for screen reader users and interactive usability.
**Action:** Always provide explicit accessibility labels, roles, touch target sizing (min 44x44), and keyboard submit (`onSubmitEditing`) handlers on form controls.
