## 2025-05-18 - Accessibility and UX Improvements for Input Forms
**Learning:** Text placeholders in React Native components imported from web ports need explicit `TextInput`, `Pressable`, and `Ionicons` with accessibility attributes (`accessibilityLabel`, `accessibilityRole="button"`) and standard min touch targets (44x44).
**Action:** Always replace placeholder labels with standard React Native input controls and touchable elements for better accessibility and user interaction.

## 2025-05-18 - Netlify CI Build Script and Expo Router Structure
**Learning:** Netlify CI deployment requires a `"build": "expo export -p web"` script in `package.json` to export build artifacts to `dist`. Non-route files under `src/app` cause route generation errors during Expo web export and should be moved outside `src/app/`, leaving `src/app/index.tsx` as the main route entry point.
**Action:** Ensure `"build"` script is present in `package.json` and keep `src/app/` clean of non-route/store files.
