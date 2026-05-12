# Palette Journal - UX/Accessibility Learnings

## 2025-05-14 - [Placeholder Interactive Elements]
**Learning:** The application uses `ThemedText` as placeholders for interactive elements like checkboxes, delete buttons, and inputs, which lacks both functionality and accessibility (no roles, labels, or appropriate hit targets).
**Action:** Replace these placeholders with native interactive components (e.g., `Checkbox` from `expo-checkbox`, `TouchableOpacity` with `Ionicons`) and ensure proper accessibility attributes are added.
