## 2025-05-18 - Replacing Placeholder Inputs with Accessible React Native Components

**Learning:** Replacing static placeholder text with React Native `TextInput` requires setting `editable={!disabled}` (rather than `disabled`), handling submission via `onSubmitEditing` and `onChangeText`, and providing inline error feedback alongside accessible icon buttons (`accessibilityLabel`, `accessibilityRole="button"`, touch target >= 44x44).
**Action:** Ensure all form components in this ported React Native app use `TextInput` with `editable`, `onChangeText`, and accessible `TouchableOpacity` icon buttons.
