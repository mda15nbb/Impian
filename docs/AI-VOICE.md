# AI and voice in Impian

The planner works without AI. Settings offers two explicit connection modes.

## Your ChatGPT account

Choose **Continue with ChatGPT**, finish browser sign-in and select a model offered for that account. Run **Test ChatGPT planning** before submitting personal season text. Eligible accounts use their ChatGPT plan limits. This follows OpenAI's published sign-in flow; Impian does not ask for your ChatGPT password or read existing conversations.

The client uses PKCE, state and nonce, validates the signed identity token, stores credentials with Windows DPAPI and rotates refresh tokens. Profiles retain issued client identifiers. Identity-only sign-in does not grant inference access. Planning uses streamed Responses requests with an input array, `store:false` and strict structured output. Only completed responses are accepted.

Availability depends on account eligibility and rollout. **Live consent, renewal, model discovery and inference have not yet been verified in Impian.** See [connection setup](CONNECTION-SETUP.md).

## Optional API-key mode

Explicitly select **OpenAI API key**, then save your key and models in the optional API settings. API usage has separate billing. No key is shipped. Impian never silently falls back from ChatGPT to this mode. Keys are encrypted for your Windows user and excluded from planner exports.

## What AI helps with

AI can ask up to three season questions and propose up to five goals with editable actions. Review suggestions before adding them. Invalid, refused, incomplete or failed responses never become confirmed goals. Original input is retained. Connection tests send a synthetic reading prompt.

Only season text and clarification answers are submitted. Calendar descriptions and account contents are excluded. AI does not directly write calendars or control the scheduling engine. This release has no general-purpose chat assistant or arbitrary-command executor.

## Voice

ChatGPT account mode does not currently support Impian's transcription endpoint. To transcribe, explicitly choose API-key mode and configure a transcription-capable API model.

Use **Season → Let it all out → Speak your thoughts → Start recording → Stop → Send audio & transcribe**. Edit before accepting. NAudio records mono 16 kHz WAV locally for up to five minutes. Cancel removes the temporary recording. Audio is transmitted only after Send. The transcription prompt preserves English/Bahasa Melayu code-switching and allows automatic language detection.

Timeouts, cancellation, quota failures and microphone errors leave manual input available. Live microphone capture and English/Bahasa Melayu/mixed-language transcription require testing with permission and credentials.

Official references: [ChatGPT sign-in](https://developers.openai.com/siwc/token-sharing-open-source/sign-in), [profiles and sessions](https://developers.openai.com/siwc/token-sharing-open-source/profiles-and-sessions), [models and inference](https://developers.openai.com/siwc/token-sharing-open-source/models-and-inference), [preview limitations](https://developers.openai.com/siwc/token-sharing-open-source/preview-limitations), [speech transcription](https://developers.openai.com/api/docs/guides/speech-to-text).
