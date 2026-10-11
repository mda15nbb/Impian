# Verification record — 2026-10-11

Environment: Windows x64 (build 26200), PowerShell 7.6.5, official .NET SDK 10.0.401, .NET / Windows Desktop runtime 10.0.12. The repository was empty and had no applicable AGENTS.md. SDK/dependencies were installed locally for building; they are not required by the self-contained application.

## Passed

- Release compilation and Windows x64 self-contained publish. The final compilation reports no C# warnings.
- **79 application regression cases**, covering SQLite migrations/restart, backup/restore, preserved identifiers/history/queue, DPAPI, scheduling capacity/conflicts/hidden busy calendars/prerequisites/cycles/deadlines/splits, habit occurrence history, all-day dates, Kuala Lumpur and DST boundaries, focus restart/sleep, reminder deduplication, explicit metrics, evidence-based advice, notes attribution, AI validation/error handling, provider retries/pagination/mappings/deletions, crash-after-create recovery, snapshot horizon moves, attendee mutation prevention and If-Match conflicts.
- **14 extension assertions**, including lease expiry/domain validation and a mocked Chrome service-worker lifecycle covering process loss, session end, repeated refresh and emergency exit.
- Packaged executable launched with an isolated workspace and without DOTNET_ROOT set.
- Packaged executable rendered 13 actual WPF views and exited successfully: all five calendar views, planning, focus, Compass, dark theme, compact width and 150% render density. Additional captures cover three all-day entries and app-blocking controls. PNGs are in `artifacts/screenshots`. The calendar/planning/focus/Compass and theme images were visually inspected; a transparent render background was found and corrected.
- The native running calendar was separately inspected with Windows UI Automation. A dark-button text contrast issue was found and corrected.

Full outputs: `artifacts/test-results.txt` and `artifacts/extension-test-results.txt`. Render result: `artifacts/screenshots/capture-result.txt`.

- The new regression cases cover entity-scoped local and staged remote undo, stale previews, remote deletion restoration, configurable workdays, habit pause/resume, flexible replanning, overload/batching evidence, protected executable exclusions and real disposable Windows helper termination/relaunch. No personal application was selected or terminated.

## Not established by these results

Fixtures are not live Google/Outlook accounts. No live sign-in, multi-provider reconciliation, network retry against a real server, organisation consent, API model response or actual transcription was exercised. No real Chrome/Edge profile installed the extension. Physical microphone/audio devices, tray notification policies, start-at-login, OS sleep/resume and display-scale switching still need the interactive checklist.

The expanded portable app exposed the native calendar, navigation and Undo controls through Windows UI Automation. Input automation could not activate the hidden test window (coordinate geometry unavailable; activation retry failed), so a complete click-through creation/restart journey is not claimed. Persistence itself is verified with real SQLite restart tests. The earlier native calendar inspection and final packaged WPF render tests succeeded.

See [WINDOWS-VERIFICATION.md](WINDOWS-VERIFICATION.md) for the exact follow-up procedure, and [KNOWN-LIMITATIONS.md](KNOWN-LIMITATIONS.md) for implementation gaps. All known gaps are also represented in FEATURE_PARITY.md.




## Selected branding update — 0.2.1

Concept 09 (the Impian monogram) is applied to the executable icon, WPF window icon, system-tray resource and light/dark sidebar signatures. Release compilation passed with zero warnings/errors; the app's 13 rendered views passed and both sidebar themes were visually inspected. Windows System.Drawing decoded the ICO frames at 16, 20, 24, 32, 40, 48, 64 and 128 pixels. Sharp separately decoded the embedded 256px PNG frame; System.Drawing selected the 128px fallback for that request. The 79 application and 14 extension assertions above are the prior functional verification; this branding-only update uses compilation, icon decoding and render checks.

## Account, theme and backup update — 0.3.0

- **99 application cases and 14 extension assertions pass** after the update, including token rotation and identity checks, corruption rejection, upload failure preservation, calendar-month schedules, credential exclusion, all eleven theme button contrasts and protection against sending an old logout token to a changed service.
- Real Windows Task Scheduler registration, enabled-state inspection and removal passed using an isolated workspace. No actual cloud backup was run; the test task was removed.
- The expanded capture suite covers 26 native WPF views: the existing workflows, two connection/settings views and all eleven colour palettes. Logo 08 and the exact singular-dream tagline were inspected on real rendered screens.
- Provider HTTP tests use fixtures. Google/Apple/email service setup is deferred by request. ChatGPT account consent/inference and actual Google Drive backup/restore remain pending live verification.
