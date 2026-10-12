## 2025-05-18 - Accessible Icon Buttons in React Native Forms

**Learning:** Interactive icon-only buttons in React Native must specify `accessibilityLabel` and `accessibilityRole="button"` along with minimum touch target dimensions (44x44) to guarantee full accessibility and hit target compliance.
**Action:** Always wrap `@expo/vector-icons` inside `TouchableOpacity` / `Pressable` with explicit `accessibilityLabel`, `accessibilityRole="button"`, and `minWidth: 44, minHeight: 44` styles.
