## 2025-05-18 - Replacing web text placeholders with native accessible interactive components

**Learning:** When porting web React applications to React Native Expo, temporary string placeholders like `<ThemedText>Checkbox</ThemedText>` or `<ThemedText>Del</ThemedText>` lack interactive state, keyboard accessibility, and screen reader labels. Replacing them with native components (`expo-checkbox`, `Ionicons`) requires explicit `accessibilityLabel`, `accessibilityRole="button"`, and adequate touch hit targets (`hitSlop`).
**Action:** Always wrap native icon actions in `TouchableOpacity` or `Pressable` with `accessibilityLabel`, `accessibilityRole="button"`, `hitSlop`, and proper callback bindings.
