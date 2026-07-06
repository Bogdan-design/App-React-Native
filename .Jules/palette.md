## 2025-05-14 - [Placeholders in ported components]
**Learning:** Some components in this React Native port still contain `ThemedText` placeholders (e.g., "input", "add", "Del") instead of actual interactive native components. This breaks core functionality and accessibility.
**Action:** When encountering components with "input" or "add" text labels, replace them with appropriate native components like `TextInput`, `Checkbox`, and `Ionicons` while ensuring proper accessibility props are added.
