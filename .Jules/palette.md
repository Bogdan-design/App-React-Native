## 2025-06-02 - Expo Router and src/app Conflict
**Learning:** Expo Router may prioritize `src/app` over the root `app` directory if both exist, leading to rendering errors if `src/app` contains non-routing files like `store.ts`.
**Action:** Rename internal app logic directories (e.g., to `src/core`) to avoid conflicts with filesystem-based routing.

## 2025-06-02 - React Native Accessibility and Placeholders
**Learning:** Initial ports from web often contain text placeholders and invalid nesting (e.g., View inside Text). Icon-only buttons must use `TouchableOpacity` with `accessibilityLabel` and `accessibilityRole="button"`.
**Action:** Replace placeholders with native components and ensure proper accessibility props.
