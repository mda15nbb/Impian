# Known limitations and external verification blockers

This is an expanded functioning desktop release, **not completion of every acceptance criterion**. The following are explicit implementation gaps or verification gaps, rather than simulated features.

## External verification blockers

- Impian login: Google, Apple and email flows are implemented against Supabase Auth. The app owner requested integration first and service setup later. The service, email sender, provider registrations and hosted recovery page are not configured. Real sign-in is pending.
- ChatGPT: official account sign-in and text inference are implemented and fixture-tested. Live consent, account eligibility, model access and renewal remain unverified. ChatGPT mode does not transcribe audio or import chat history.
- Google backups: upload, list, download, validation, restore and manual/weekly/monthly scheduling are implemented. Windows task creation/removal passed. Actual Google consent and upload/restore still need the app's OAuth registration and a consenting account.

- Google: no desktop OAuth registration or consenting test account was supplied. Code and fixture tests cover OAuth structure, pagination, retry IDs, incremental tokens, mappings and conflicts; real account sign-in, refresh, recurring exceptions and two-way sync are unverified.
- Outlook: no public-client registration, personal account or Microsoft 365 consent was supplied. Real MSAL and stable Graph adapters are implemented, but actual tenant policy, token renewal and live delta behaviour are unverified.
- AI/voice: no OpenAI API key or authorised microphone recording was supplied. Real API implementation and local validation tests exist. Live model response, quota errors and English/Bahasa Melayu/mixed-language transcription require testing.
- Browser blocker: no companion was installed into a user's browser profile. Rule logic has tests; actual Chrome/Edge blocking and crash/sleep cleanup are unverified.
- Signing: no code-signing certificate supplied. The portable build is unsigned.

## Implementation gaps

- Windows app enforcement closes selected exact-path processes after per-session consent. It cannot prevent the first instant of a launch or close every protected/elevated process. Unsaved work can be lost after consent. The disposable-helper test passes; third-party app compatibility and global-hotkey interaction still need acceptance testing.
- Imported events start read-only. Individual appointments without attendees or recurrence can be explicitly enabled for editing with write permission. Meetings and recurring series remain read-only; imported-event deletion has no UI. Live editing permission transitions still require account testing.
- Undo now stages provider compensation and preserves unrelated entities, focus and history. It is session-local and covers checkpointed goal/task/habit/calendar actions. Provider conflicts block publication. Undo of an already-published deletion creates a new event identity. Live provider verification remains outstanding.
- Week suggestions can replan explicitly flexible, future local task blocks. Fixed, imported and published blocks remain in place. The deterministic greedy planner is not a global optimizer. Working days are configurable; there is one daily break, and additional unavailable periods use busy blocks.
- Overlapping blocks have separate lanes and details in tooltips/editors; narrow week columns truncate long titles. The all-day header now shows all entries within a scrollable area.
- Habits have a series editor and pause/resume with reversible suppression of future unstarted, unscheduled occurrences. Completed, scheduled and previously focused occurrences are retained. Generation covers the next 28 days when edited and 14 days on launch.
- Coaching covers underserved goals, repeated deferrals, goal-scoped short-action batching and overload. It does not infer time-of-day productivity or provide general AI coach chat.
- Plan Strength uses disclosed weak proxies for text clarity and capacity. Focus quality is a self-report plus timer/pause evidence, not a composite proprietary score.
- Meeting notes support pasted text and UTF-8 `.txt` / `.md`. Deterministic extraction recognises Action/TODO/checkbox and Decision markers plus explicit ISO dates. No PDF/DOCX parser, semantic extraction or live Fathom/Granola/Slack connector.
- Local Disconnect removes the selected account token/cache entry, pauses its queue and retains cached events. Provider-side OAuth consent revocation remains a provider-account action.
- SQLite persists a full JSON aggregate transactionally. Large histories/calendars may need a normalized model and background write batching for scale. Text field draft saving currently occurs on each edit.
- Focus recovery deliberately excludes unobserved gaps over 30 seconds and may lose up to five seconds after a crash. Countdown reaching zero does not auto-finish.
- Reminders use tray balloons. Live notification policy, start-at-login, sleep/resume, audio devices and physical microphone behaviour were not comprehensively exercised.
- UI screenshots cover all eleven colour themes, light/dark appearance, all views, compact width and 150% render density. Physical Windows multi-monitor DPI switching and comprehensive screen-reader testing remain manual.

## Safety boundaries

No calendar cross-copying. No imported meeting cancellation, attendee mutation, invitation sending or response change. No API keys/tokens in exports. No silent remote overwrites. A changed server version halts publication. Calendar sync does not run while closed. Optional backup-only scheduling can run while the user is signed into Windows; this is not background calendar sync. No telemetry or browsing-content observation. The SQLite database itself is unencrypted.


