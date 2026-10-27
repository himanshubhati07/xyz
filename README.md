# check

A native (Expo) conversion of the "Your organization is live on XCore" onboarding email: hero, status strip, intro with CTA, platform capabilities, organization link card, recommended next steps and footer, served at `/xcore-onboarding-email-1`.

## Tech stack
React Native (Expo) + TypeScript, React Navigation, react-native-svg, expo-linear-gradient.

## Getting started
```
npm install --legacy-peer-deps
cp .env.example .env
npx expo start
```
Scan the QR code with Expo Go, or press w for the web preview.

## Environment variables
See .env.example. No variable is read by the app; the page has no data or API layer.

## Project structure
- src/screens — the page screen and NotFound
- src/components — EmailWrapper (the page markup)
- src/navigation — stack navigator
- src/theme — colors and spacing

## Known differences
- React Native has no CSS engine, so `styles/01.css` is copied unchanged to `design-assets-src/01.css` for reference but cannot style the page; its rules were translated to StyleSheet values by hand.
- Assets are copied to `public/design-assets/01.png` and bundled natively as `assets/logo.png`.
- `head.html` tags (title/meta/Google Fonts) don't apply natively; Inter and JetBrains Mono load through expo-google-fonts.
- Not reproduced: backdrop blur, the SVG wave watermark in the capabilities card, radial glows in the org-link card (approximated with a linear gradient), uppercase CSS transform (text is written uppercase), responsive media query.
- Template placeholders such as `{{portal_url}}` are kept verbatim as link targets, so they won't open anything.
