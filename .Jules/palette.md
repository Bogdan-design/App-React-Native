## 2025-05-18 - Task Delete Button Accessibility and Touch Target

**Learning:** Replacing unstyled text placeholders like "Del" with standard icon buttons (e.g. Ionicons `trash-outline`) drastically improves visual hierarchy and screen reader UX. For React Native touch targets, always set explicit minimum dimensions (44x44) and hitSlop to ensure compliance with WCAG touch target guidelines and accessible experience.

**Action:** When replacing plain text placeholders in React Native components, wrap vector icons in `TouchableOpacity` or `Pressable`, provide dynamic `accessibilityLabel` containing context (such as task title), and enforce 44x44 minimum touch target styling with `hitSlop`.
