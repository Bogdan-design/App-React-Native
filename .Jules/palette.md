## 2025-05-14 - React Native Form Accessibility and Validation
**Learning:** When porting from web, remember that `TextInput` uses `editable={!disabled}` rather than `disabled`. Icon-only buttons must have `accessibilityLabel` and `accessibilityRole="button"` for screen readers. Immediate visual feedback (border color changes, error text) is crucial for a smooth user experience.
**Action:** Always verify React Native-specific prop names and ensure every interactive element has proper accessibility attributes.
