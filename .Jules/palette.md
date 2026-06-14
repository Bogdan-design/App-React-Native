## 2025-05-14 - [Placeholders in React Native Port]
**Learning:** When porting from web to React Native, interactive elements often use placeholder text (e.g., "Checkbox", "Del"). These must be replaced with native components (Checkbox, Pressable + Ionicons) and accessibility attributes (accessibilityLabel, accessibilityRole) to meet mobile UX standards.
**Action:** Scan for text placeholders in interactive components and replace them with semantic native components and proper ARIA-equivalent props.
