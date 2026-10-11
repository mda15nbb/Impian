# Chromium focus companion

The `extension` directory contains an opt-in Manifest V3 extension for Chrome/Edge 120+. It uses declarative session request rules to redirect **new top-level navigations** to configured domains and their subdomains. It does not inspect browsing content, transmit history, close tabs, prevent app switching, or block every resource in already-open pages. It is not tamper-resistant; the user can disable it at any time.

## Setup

1. Open Chrome's or Edge's extension management page, enable developer mode, and use **Load unpacked** to select the `extension` directory.
2. Review permissions. Broad HTTP/HTTPS host access is needed to redirect user-configured websites. The local connection is `http://127.0.0.1:47832/focus`.
3. In the extension popup, enable focus boundaries. In Impian Settings, enable website blocking and enter domains one per line (e.g. `example.com`).
4. Start a focus session. Click Refresh now in the popup for immediate rule refresh, or wait for the next polling alarm (nominally 30 seconds).
5. Pause, finish, abandon or press Esc in Impian to release the session. The next refresh removes the rules.

The loopback bridge sends only active state, domain rules and a 45-second lease timestamp; no task names, titles, accounts or secrets. It accepts no mutations. Website code gets no CORS permission. Any local process may read this minimal endpoint; it is not an authenticated local IPC channel. A second Impian process cannot bind the same port; the owner reports the conflict. The desktop bridge and extension must be running on the same Windows machine.

## Cleanup and emergency exit

The popup's enable switch is the emergency exit. Rules are session-only, so browser restart clears them. When polling cannot reach Impian, rules are cleared; an expiry alarm also clears them if the worker loses contact. Chromium alarms are best-effort and can be delayed by browser sleep, suspension or load. Therefore cleanup has **no hard 45-second guarantee**. After resume, use Refresh now or disable the extension if necessary. The blocked page explains this boundary.

No Windows process blocker is shipped. Suspending arbitrary programs risks locks, audio/device failures and unsaved work; terminating them would violate the requested non-destructive default. This build exposes the limitation rather than an overlay or reminder masquerading as enforcement. Cross-device blocking is deferred.

The rule generator, expiry, domain validation, deduplication and inactive cleanup decision are tested in Node. Actual installation, navigation enforcement and browser crash/resume cleanup remain **manual verification items**; this development session did not install an extension in the user's browsing profile.

Official references: [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest), [alarms](https://developer.chrome.com/docs/extensions/reference/api/alarms).
