## 2025-05-20 - Accessible Native AddItemForm

**Learning:** When migrating React Native Expo forms from web stubs, replacing placeholder text stubs with standard `TextInput` and `TouchableOpacity` with `accessibilityLabel`, `accessibilityRole="button"`, and minimum touch target size (44x44) significantly improves both visual polish and screen-reader accessibility.
**Action:** Always provide explicit accessibility labels, role attributes, and proper theme color integration when building form components in React Native.
