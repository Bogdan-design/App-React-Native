## 2025-05-14 - [AddItemForm Accessibility and UX]
**Learning:** Icon-only buttons must always have `accessibilityLabel` and `accessibilityRole="button"` in React Native to be usable by screen readers. Providing inline visual feedback (like red borders and error text) for empty submissions significantly improves form usability.
**Action:** Always include accessibility props for icon buttons and implement clear error states for user inputs.
