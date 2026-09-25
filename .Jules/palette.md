## 2025-05-18 - Task Delete Button Accessibility and Touch Target

**Learning:** Replacing unstyled text placeholders like "Del" with standard icon buttons (e.g. Ionicons `trash-outline`) drastically improves visual hierarchy and screen reader UX. For React Native touch targets, always set explicit minimum dimensions (44x44) and hitSlop to ensure compliance with WCAG touch target guidelines and accessible experience.

**Action:** When replacing plain text placeholders in React Native components, wrap vector icons in `TouchableOpacity` or `Pressable`, provide dynamic `accessibilityLabel` containing context (such as task title), and enforce 44x44 minimum touch target styling with `hitSlop`.

## 2025-05-18 - Netlify CI Build Configuration for Expo Web

**Learning:** Netlify deployment requires a `"build": "expo export -p web"` script in `package.json` alongside a `netlify.toml` configuring `publish = "dist"` and `/* /index.html 200` SPA rewrite rules.

**Action:** Ensure `netlify.toml` and `"build"` npm script are configured for Expo Web applications deploying to Netlify.
