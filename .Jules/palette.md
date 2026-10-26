## 2025-05-10 - React Native Port Component Placeholders
**Learning:** In this Expo/React Native port from a web app, interactive input components like `AddItemForm` contained simple `<ThemedText>` placeholders ("input", "add") rather than functional `TextInput` and touchable icon components.
**Action:** Replace text placeholders with native `TextInput` (using `editable={!disabled}`) and `TouchableOpacity` buttons with proper `accessibilityLabel` and `accessibilityRole="button"`.
