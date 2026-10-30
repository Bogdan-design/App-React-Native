## 2024-10-30 - Accessible Input Component Migration

**Learning:** When migrating Web React UI components to React Native / Expo Web, placeholder text nodes (e.g. `<ThemedText>input</ThemedText>`) should be upgraded to `TextInput` and `Pressable` + `Ionicons`. Ensuring both `aria-label` (web) and `accessibilityLabel`/`accessibilityRole` (React Native) are supplied provides optimal cross-platform screen reader support.

**Action:** Always provide both ARIA and React Native accessibility props when creating interactive input forms, and set touch targets to a minimum of 44x44px for icon buttons.
