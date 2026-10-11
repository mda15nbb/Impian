# Connection setup for the app owner

Version 0.3.0. The user requested implementation first and service configuration later. No live credentials or registered providers were supplied. Do not describe these connections as live-verified until the acceptance steps below pass.

## What users should see

End users choose Google, Apple or email login; they should not need to create developer accounts. The owner completes this one-time setup and distributes the configured app. Impian remains usable offline before setup.

## Google, Apple and email accounts

Impian uses Supabase Auth as the account service. Only identity and authentication go there; the app does not upload its planner database to Supabase. Sessions are stored with Windows DPAPI. The current planner remains a single workspace per Windows user, not an account-isolated cloud workspace.

1. Create a Supabase project you control.
2. Enable email/password authentication and email confirmation. Configure a production email sender and appropriate service rate limits before public distribution.
3. Enable Google in Supabase and configure its web OAuth client. Use the provider callback URL shown by Supabase.
4. Enable Apple with your Apple Developer configuration, Services ID and required server-side credentials. Keep Apple private keys and provider secrets on the server. Follow Apple's and Supabase's current renewal requirements.
5. Add `http://127.0.0.1:42817/auth/**` to the Supabase redirect allowlist. This fixed port is for the desktop app. Every attempt uses an unpredictable path and a fresh PKCE challenge. Provider-to-Supabase callbacks remain HTTPS.
6. Host the included `account-pages` folder over HTTPS. Edit its `configuration.js` with your public Supabase URL and publishable key. Set the project's Site URL to that page so email verification and password recovery can finish there. Do not use the documentation repository's file-view URL as a hosted page.
7. Copy `services.example.json` to `services.json` beside `Impian.exe`, and enter the public Supabase project URL and publishable key. The desktop client supports publishable keys or legacy anon keys. It rejects service-role and `sb_secret_` keys.
8. Alternatively, configure the values in Settings → Connection setup (app owner). A locally saved override takes precedence over the packaged file. Sign out before changing the authentication service.

The package must never contain Google web secrets, Apple private keys, Supabase secret/service-role keys, account passwords or live session tokens.

## Google Drive backups

1. Create or use a Google Cloud project you control and enable the Drive API.
2. Configure its OAuth consent screen and an **installed desktop** OAuth client.
3. Request `openid`, `email` and `https://www.googleapis.com/auth/drive.appdata`. This grants access to the app's own hidden data area, not all of a user's Drive files.
4. Put the desktop client ID in `GoogleDesktopClientId` in the configuration file or owner setup panel. If Google requires your desktop registration's client secret, enter it in the existing Google registration section; it is protected locally and never exported.
5. Review Google's testing/publishing requirements. OAuth testing-mode grants may expire; a short-lived test grant is not a reliable long-term backup setup.
6. Sign in with a consenting test account inside the normal app workspace. Upload a small test backup, list it, download it, and restore into a separate test workspace.

Backup permission and token storage are separate from Google Calendar permission. Switching backup accounts resets the last-success record. Backup preferences and credentials remain local to the device and are not imported with a planner backup. Cloud files have a versioned JSON envelope with a SHA-256 integrity check. This detects accidental corruption; it is not password encryption or a signature against a malicious file author.

Automatic schedules run in the open app or through an optional per-user Windows scheduled task. The task uses the current executable path, checks daily at 9 a.m., starts when available, and runs with the current Windows user's interactive token. It does not store a Windows password or run as administrator. Due dates are seven days or one calendar month after success. Failures wait at least 30 minutes before automatic retries. Files are not automatically pruned.

## ChatGPT account integration

Impian implements the documented dynamic registration flow for eligible open-source/locally hosted clients. It opens OpenAI's system-browser sign-in, uses PKCE/state/nonce, validates the ID token against OpenAI JWKS, and stores each issued client registration separately. Host identity persists across restarts. Requests use the selected account's model catalog, streamed Responses with `store:false`, and no unsupported output-limit field.

The default AI mode is the user's ChatGPT account. API-key mode is an explicit separate choice. ChatGPT-account mode never falls back to API billing. Its current supported workload in Impian is structured text season planning. The sign-in route does not support the transcription API.

Confirm this application's eligibility for OpenAI's current program before distribution; documentation describes preview access and account restrictions. Do not reuse another application's OAuth client ID or extract browser session cookies. No developer API key is required by the documented dynamic sign-in flow, but the user must authorize eligible plan usage.

Test first registration, repeated sign-in, denied plan permission, refresh, model selection, an actual planning response, cancellation, quota/eligibility errors, switching saved accounts, and sign-out. Remote revocation failure must be shown honestly. Never paste credentials into a support ticket.

## Acceptance checklist before a public release

- Google and Apple login return to the desktop and show the verified identity.
- Email signup sends verification; sign-in works after verification; password recovery changes the password.
- Expired and revoked sessions fail clearly and do not invent a successful login.
- Google Drive upload, list, download and restore succeed for the selected account.
- A failed upload preserves the previous successful copy and schedule state.
- Weekly/monthly schedules, Windows task registration, restart, sleep, network loss and moved app folders are checked.
- ChatGPT completes a real response for an eligible account; refusal, incomplete stream and denied plan permission leave drafts unchanged.
- No credentials appear in JSON exports, cloud files, source archives, screenshots or GitHub documents.

## Official references

- [Supabase PKCE flow](https://supabase.com/docs/guides/auth/sessions/pkce-flow)
- [Supabase Apple sign-in](https://supabase.com/docs/guides/auth/social-login/auth-apple)
- [Supabase authentication HTTP endpoints](https://github.com/supabase/auth)
- [Google Drive application data](https://developers.google.com/workspace/drive/api/guides/appdata)
- [OpenAI registration and sign-in](https://developers.openai.com/siwc/token-sharing-open-source/sign-in)
- [OpenAI account sessions](https://developers.openai.com/siwc/token-sharing-open-source/profiles-and-sessions)
- [OpenAI models and inference](https://developers.openai.com/siwc/token-sharing-open-source/models-and-inference)
- [OpenAI preview limitations](https://developers.openai.com/siwc/token-sharing-open-source/preview-limitations)
