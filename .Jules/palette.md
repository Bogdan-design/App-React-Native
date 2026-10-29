## 2024-10-29 - React Native Web Button Accessibility & Input Controls
**Learning:** React Native interactive buttons using icons require both `accessibilityRole="button"`, `accessibilityLabel`, and `aria-label` for cross-platform screen reader support. Using `Pressable` rather than `TouchableOpacity` avoids deprecation warnings in newer React Native/Expo builds.
**Action:** Always wrap icon buttons in `Pressable` with minimum 44x44 touch targets (`hitSlop`), `aria-label`, `accessibilityLabel`, and `accessibilityRole="button"`.
