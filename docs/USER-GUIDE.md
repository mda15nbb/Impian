# Impian user guide

**I'm the possibility of my dream**

Version 0.3.0 · Windows desktop · Updated 11 October 2026

Impian helps you turn dreams into goals, small actions and time in your calendar. You can use the planner without creating an account or connecting an online service.

## 1. Open Impian

1. Download the Windows ZIP supplied by the app owner.
2. Right-click it and choose **Extract All**.
3. Open the extracted folder and double-click **Impian.exe**.
4. Keep the files in that folder together. You do not need to install .NET separately.

This build is unsigned. Windows may show an unfamiliar-app warning; check that the download came from the app owner before deciding whether to run it.

Your normal planner starts empty. To explore with sample data, open **Settings → Your data → Open separate demo workspace**. The demo keeps its own data and does not connect to online accounts.

## 2. Choose your colours

Open **Settings → Appearance**, choose a colour theme, and press **Apply theme**.

Sage green is the default. The other choices are Electric Iris, Cobalt & Coral, Tropical Spark, Tangerine Sunset, Midnight Pop, Dusty Lilac, Soft Slate Blue, Terracotta & Cream, Dusty Rose, and Honey & Oat.

You can also choose dark appearance. Midnight Pop always uses dark surfaces. **Reset to sage green** returns to the default light appearance. Your choice is saved for the next time you open Impian. Custom calendar colours stay as you set them; the default Impian calendar tint follows the theme.

The logo is **Steady Progress**, the infinity-shaped mark with a gold dot.

## 3. Start with your dream

1. Open **Season**.
2. Choose a period you want to plan for.
3. Write what is on your mind: dreams, responsibilities, worries and what you want more of.
4. Work through the questions and choose a few goals.
5. Review the proposed outcomes and next actions before confirming them.

You can do all of this manually. AI is optional and is explained below.

## 4. Turn goals into actions

Open **Goals & Tasks** to add or edit goals and tasks. Give an action a clear title and a realistic time estimate. Add a due date only when one is needed. You can link an action to a goal, set priorities and record completion.

Habits create dated actions on your chosen days. You can edit, pause and resume a habit without removing its completed history.

## 5. Give your actions time

Open **Calendar**. Choose Day, Week, Work Week, Month or Agenda.

- Drag an action from the task list into an open calendar slot.
- Use **+ Block** to add time directly.
- Use **Suggest my week** to review a possible schedule before accepting it.
- Mark appropriate future local blocks as flexible if you want the replanning tool to move them.

Set your working days, working hours, breaks, daily task limit and buffers in Settings. Hidden calendars can still reserve busy time, depending on their calendar settings.

Google and Outlook calendar connections are separate from signing in to Impian. They require their own setup and consent. They start read-only. Imported meetings and recurring series have editing restrictions.

## 6. Focus on one action

Choose a task and open **Focus**. Set an intention, choose a timer, and start. Pause when needed; finish the session to record your reflection and whether the work was completed.

Optional website blocking uses the included browser extension. Optional Windows application blocking requires you to select exact applications and approve closing them for each focus session. Save work in those applications first.

To release blocking, pause focus, choose the tray's emergency release, or press **Ctrl+Alt+Shift+F12**. The timer does not automatically mark an action complete when it reaches zero.

## 7. Sign in to Impian

Open **Settings → Your Impian account**.

- **Google:** choose **Continue with Google**, then finish in your browser.
- **Apple:** choose **Continue with Apple**, then finish in your browser.
- **Email:** enter your email and password, then choose **Sign in with email**. For a new account, choose **Create email account** and follow the verification email. Use **Forgot password** if needed.

**Setup status:** these options need the app owner to configure the account service first. If the app says that setup is pending, you cannot activate them just by entering an email. The local planner still works.

This release has one local planner workspace per Windows user. Signing in identifies an account; it does not switch to another person's planner or automatically synchronise data between computers. Use separate Windows accounts when different people share a computer.

## 8. Use your ChatGPT account for AI

1. Open **Settings → AI with your ChatGPT account**.
2. Choose **Continue with ChatGPT**.
3. Sign in on OpenAI's page and approve eligible ChatGPT plan usage.
4. Choose an available model when Impian asks.
5. Keep **Use AI through → ChatGPT account** selected and save the choice.
6. Use **Test ChatGPT planning** to check the connection.
7. In Season, use **Ask AI to help clarify**. Review and edit suggestions before confirming them.

Availability depends on your ChatGPT account, plan, workspace rules and OpenAI's current eligibility requirements. ChatGPT usage limits still apply. Impian does not receive your ChatGPT password or automatically read your existing conversations.

AI currently helps with season questions, candidate goals and next actions. A general assistant that accepts arbitrary commands across the app is not included in this release.

ChatGPT sign-in currently supports text planning, not voice transcription. For voice, explicitly select **API key (separate billing)** and configure your own OpenAI API key in **Optional AI & voice**. Impian never silently switches between these payment methods.

Live ChatGPT sign-in and model responses still need testing with a consenting eligible account. Local tests verify request handling and failure cases; they cannot establish your account's eligibility.

## 9. Back up to your own Google Drive

1. Open **Settings → Back up to your Google Drive**.
2. Choose **Connect Google Drive** and select the Google account where you want your backups stored.
3. Approve access to Impian's app-data storage.
4. Choose **Manual**, **Weekly** or **Monthly**.
5. Press **Save backup schedule**.
6. Press **Back up now** to create your first copy. Check the last-successful-backup message.

The app owner's Google connection must be configured first. Signing in to Impian with Google does not automatically grant permission to store backups.

**Manual** backs up when you press the button. **Weekly** becomes due seven days after the last successful backup. **Monthly** becomes due one calendar month after that backup. A scheduled plan with no successful backup is due on the next check.

While the app is open, Impian checks whether a backup is due about once a minute. A failed attempt does not replace the last successful backup; it waits at least 30 minutes before another automatic attempt.

To back up while the app is closed, tick **Allow scheduled backups while Impian is closed** and save. Windows Task Scheduler checks daily at about 9 a.m. according to Windows local time. You must be signed in to Windows and have an internet connection. A computer that is off cannot upload a backup. Missed work is checked again when Windows or Impian can run it.

Keep the app in its installed folder. If you move or extract it to a different folder, open that copy and save the backup schedule again so Windows uses the correct path.

Backups are stored in a private application-data area belonging to your own Google Drive. That area is not shown as an ordinary Drive folder. Use Impian to browse and download its backups. Backups are not uploaded to the app owner's Google account.

## 10. Restore a backup

1. Connect the Google account containing your backups.
2. Choose **Browse / restore backups**.
3. Find the date you want. The newest 100 copies are listed.
4. Choose **Download JSON** to keep a local copy, or **Restore this backup** to replace the current planner.
5. Read the confirmation, including the number of goals and tasks, before approving.

Impian checks the backup for corruption and saves the current database as **before-import.db** before replacing it. Restored pending calendar changes require review before publication. Application blocking is disabled after a restore. Credentials and backup schedules are device settings and are not restored from a planner backup.

Cloud backup is a saved copy, not continuous two-way synchronisation. Copies are retained; this release does not automatically delete older cloud backups. Google Drive storage limits apply.

## 11. Local copies and privacy

Settings also offers **Export JSON**, **Import JSON**, **Backup database** and **Restore database backup**. Store important copies somewhere you control.

Planner data is saved under your Windows user profile, normally `%LOCALAPPDATA%\Impian\Data`. The local database and exported planner content are not encrypted by Impian. Google backups contain readable planner data once downloaded. Sign-in tokens and API keys are stored separately using Windows protection and are excluded from exports and backups.

Google, Apple, email login, Google Drive backup, ChatGPT and calendar connections are separate permissions. Signing out of one does not disconnect the others. Disconnect each service in its own Settings section when needed.

## 12. Helpful shortcuts and troubleshooting

| Action | Shortcut or place |
|---|---|
| Add an action | Ctrl+N |
| Undo a supported recent action | Ctrl+Z, outside text-entry fields |
| Pause focus | Esc |
| Emergency blocking release | Ctrl+Alt+Shift+F12 |
| Change colours | Settings → Appearance |
| Check backups | Settings → Back up to your Google Drive |

If a connection fails, keep working locally and check its Settings section. Do not send anyone your password, API key or sign-in tokens. See the [FAQ](FAQ.md) for common questions and [connection setup](CONNECTION-SETUP.md) for the app owner's checklist.
