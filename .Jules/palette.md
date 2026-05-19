## 2025-05-14 - Replacing Placeholders with Accessible Components
**Learning:** When porting from web or working with skeleton code, placeholders like "Checkbox" or "Del" text should be replaced with functional components and accessible icons. Icon-only buttons must have `accessibilityLabel`, `accessibilityRole="button"`, and a minimum 44x44 hit target.
**Action:** Search for `ThemedText` elements that act as placeholders for interactive elements and replace them with semantic components like `Checkbox` or `Ionicons` wrapped in `TouchableOpacity`.
