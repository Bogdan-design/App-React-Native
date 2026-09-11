## 2025-03-10 - Accessible Form Input and Icon Button Pattern in React Native Expo

**Learning:** When porting web form components to React Native, placeholder text components (`<ThemedText>input</ThemedText>`) should be replaced with native `TextInput` and `TouchableOpacity` using `@expo/vector-icons/Ionicons`. Accessible icon buttons require explicit `accessibilityLabel`, `accessibilityRole="button"`, and `hitSlop` or `minWidth`/`minHeight` of 44x44.

**Action:** Ensure all interactive input forms use `TextInput` with `onChangeText`, `onSubmitEditing`, and `editable={!disabled}`, coupled with accessible icon buttons having minimum 44x44 touch targets and clear `accessibilityLabel` descriptions.
