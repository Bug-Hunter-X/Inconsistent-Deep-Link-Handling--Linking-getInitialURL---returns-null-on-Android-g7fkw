# Inconsistent Deep Link Handling in Expo

This repository demonstrates a bug in Expo's `Linking` API on Android where `Linking.getInitialURL()` intermittently returns `null`, preventing the app from properly handling deep links. The issue is challenging to consistently reproduce.

## Bug Description

The app fails to recognize deep links, causing expected actions to not trigger.  The behavior is sporadic, working in some instances and failing in others.  This makes debugging and resolving the problem significantly difficult.

## Steps to Reproduce

While consistent reproduction is unreliable, the problem usually appears after an app restart or when navigating back to the app from another application after clicking on a deep link.

## Solution (bugSolution.js)

The solution involves adding additional checks and potential retries to account for the inconsistent `getInitialURL` behavior. See `bugSolution.js` for the implementation.

## Further Investigation

The root cause of this inconsistency is currently unknown and requires further investigation. This may involve analysis of Expo's internal handling of Android intents and examining Android system logs during deep link events.