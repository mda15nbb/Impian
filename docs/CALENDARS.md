# Google and Outlook setup

Use your own registrations and accounts. Impian does not embed a confidential application secret, hardcode email addresses, or connect automatically. Connections are disabled in demo mode.

## Google

1. In Google Cloud, create/select a project and enable the Google Calendar API.
2. Configure the OAuth consent screen. While the app is in testing, add the Google accounts you will use as test users. Public distribution may need Google's verification.
3. Create an OAuth client of type **Desktop app**. Enter its client ID in Settings. If your desktop registration requires a client secret for token exchange, enter its provided desktop secret in the optional password field. It is stored locally with DPAPI, never compiled into the app. A desktop secret cannot be treated as confidential.
4. Save registration IDs, then Connect Google. Sign in in the system browser. The application uses a random loopback port, PKCE S256 and a checked state value. Do not register this as a web/confidential application.
5. Select calendars separately for display and busy time. Initial scopes: `openid email` and Calendar read-only. Use **Enable write permissions** only when you want to publish blocks; the additional scope is `calendar.events`.

Reference: [installed desktop OAuth](https://developers.google.com/identity/protocols/oauth2/native-app), [incremental synchronization](https://developers.google.com/workspace/calendar/api/guides/sync), [event insertion](https://developers.google.com/workspace/calendar/api/v3/reference/events/insert).

## Microsoft Outlook / Microsoft 365

1. Create an app registration in Microsoft Entra. Select personal Microsoft accounts plus organisational accounts if both are needed.
2. Add a **Mobile and desktop applications** redirect URI `http://localhost` and enable public-client flows as appropriate. Do not create or embed a confidential client secret.
3. Configure delegated `User.Read` and `Calendars.Read`; `Calendars.ReadWrite` is requested separately for publishing. Organisation policies may require administrator consent, which Impian cannot bypass.
4. Save the client/application ID in Settings, then Connect Outlook. MSAL.NET handles system-browser sign-in, cached accounts and silent refresh. Its cache is protected with DPAPI.

Reference: [MSAL system browsers](https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/using-web-browsers), [stable calendarView delta](https://learn.microsoft.com/en-us/graph/api/event-delta?view=graph-rest-1.0), [event creation and transactionId](https://learn.microsoft.com/en-us/graph/api/user-post-events?view=graph-rest-1.0).

## Publication and reconciliation

Saving an Impian block to a writable provider calendar is the explicit publication action. Local Impian is the default; week suggestions stay local. Google never automatically copies into Outlook or vice versa. Provider/account/calendar/event identifiers are persisted; titles are never keys.

Google uses a stable event ID and a private client-block identifier. Microsoft uses a stable `transactionId` on creation. Retries preserve these identifiers. Before update/delete, Impian fetches the current remote version and sends `If-Match`. A conflicting version is retained in the block, along with the local version. Choose **Use remote** or **Keep local & recheck** in details. Offline failures remain in the durable queue with bounded exponential retry delay; HTTP throttling observes Retry-After. Incomplete pulls do not advance sync cursors.

Google stores a collection sync token, follows pagination, resets invalidated tokens, and obtains a bounded expanded snapshot each sync to include recurring instances/exceptions. This is more API work than a fully optimized recurrence cache. Outlook uses stable primary-calendar delta. Non-primary calendars use a paginated bounded calendarView snapshot because the relevant stable delta API is restricted to the primary calendar. Missing mapped events are individually fetched to distinguish deletion from movement outside the window. The initial horizon spans 30 days back and 180 days forward, then rolls when fewer than 60 future days remain.

All selected calendars refresh before queued publishing starts. A failed calendar pull postpones publication so busy-time checks are not based on an incomplete refresh. There remains an unavoidable race if another client creates a conflicting event after the final check; providers do not offer an atomic cross-calendar reservation transaction.

Imported events begin read-only. A writable, nonrecurring appointment with no attendees offers an explicit Enable editing this appointment action. Series and events with attendees remain read-only; a remote attendee or recurrence addition also blocks queued edits/deletes. No UI changes attendees, sends invitations, responds to meetings or cancels imported meetings. New publications are individual Impian blocks. Automatic local undo is currently restricted when accounts are connected; use an explicit block edit as the compensating operation and inspect conflicts. This is a documented gap against the requested staged-undo workflow.

Synchronization runs on launch, reconnect, manual refresh and the configured interval **while running**. It does not run while the app is closed. Exact live behavior still requires testing with consenting Google, personal Outlook and Microsoft 365 accounts; none were supplied during this build.

