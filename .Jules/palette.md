## 2025-02-18 - Replacing Web Placeholders with Accessible React Native Components

**Learning:** When porting web components to React Native, replacing text placeholders with native `TextInput` and `TouchableOpacity` (with `@expo/vector-icons`) significantly improves UX and accessibility. Icon-only buttons must explicitly state `accessibilityLabel`, `accessibilityRole="button"`, and maintain a minimum target size of 44x44.

**Action:** Always check interactive components for web placeholder text (`input`, `add`, `Del`, `Checkbox`) and convert them to native React Native components with explicit accessibility props and theme color integration.
