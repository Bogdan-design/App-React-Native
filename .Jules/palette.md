## 2025-08-15 - React Native Input and Icon Button Accessibility

**Learning:** When porting web form inputs to React Native, replacing raw text placeholders with `TextInput` and `Ionicons` within a `Pressable` requires explicit accessibility props (`accessibilityLabel`, `accessibilityRole="button"`) and a minimum hit target size (44x44) to ensure proper screen reader and touch accessibility.
**Action:** Always wrap icon-only interactive controls in `Pressable` with `accessibilityLabel`, `accessibilityRole="button"`, and `minWidth: 44, minHeight: 44` styles.
