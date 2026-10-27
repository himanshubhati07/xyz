# check — Screens & Navigation

## How to run
cd /workspace/frontend_runs/e71f2c6e-f85b-4ef5-9434-7ea1e963b595/project
npm install --legacy-peer-deps && npx expo start
# Press 'a' for Android, 'i' for iOS simulator, 'w' for web,
# or scan the QR code with the Expo Go app.

## Screens
| Screen | File | Description |
|--------|------|-------------|
| XcoreOnboardingEmail1 (/xcore-onboarding-email-1) | src/screens/XcoreOnboardingEmail1Screen.tsx | Onboarding email page |
| NotFound | src/screens/NotFoundScreen.tsx | Catch-all with Go Back |

## Navigation map
- XcoreOnboardingEmail1 is the only entry screen; its links open external URLs.
- Unknown routes -> NotFound (Go Back button returns).

## Shared components
- src/components/EmailWrapper.tsx — the full email markup (hero, intro, capabilities, org link, next steps, footer).

## Design tokens
primary, primaryDark, primaryLight, accent, background, surface, card, border, textPrimary, textSecondary, textDisabled, textInverse, success, warning, error, info, shadowColor.
