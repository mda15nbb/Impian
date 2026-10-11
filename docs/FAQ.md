# Impian FAQ

Version 0.3.0 · Updated 11 October 2026

## Do I need an account to use Impian?

No. Goals, tasks, the local calendar, focus sessions and reviews work without an account or internet connection.

## What changed in this release?

Logo #8, Steady Progress, replaces the earlier monogram. Sage green remains the default, with ten other themes in Settings. The tagline is **I'm the possibility of my dream**. Account-login adapters, Google Drive backups and ChatGPT sign-in have been added, along with this FAQ and a user guide.

## Are the online features ready for everyone?

Not yet. The code, settings and local tests are in place. Google, Apple and email login still need the app owner's authentication-service setup. Google Drive needs a Google registration. Live sign-ins, backup uploads and AI responses must be tested with real consenting accounts before treating this as a fully verified public release.

## Which colours can I choose?

Sage green, Electric Iris, Cobalt & Coral, Tropical Spark, Tangerine Sunset, Midnight Pop, Dusty Lilac, Soft Slate Blue, Terracotta & Cream, Dusty Rose, and Honey & Oat. Your selection is saved. Midnight Pop is always dark; the other themes support the dark-appearance option.

## Why are Google, Apple or email login buttons unavailable?

The app owner has not completed account-service setup, or you are using the demo workspace. This cannot be fixed by entering your Google or Apple password into the email-password form. Use the matching sign-in button after setup is complete.

## Does signing in make all my data appear on another computer?

No. This release keeps one local planner per Windows user. Account login identifies you but does not provide live cloud synchronisation or separate in-app profiles. You can connect Google Drive on another computer and deliberately restore a backup.

## Can I use my own ChatGPT account?

The app includes **Continue with ChatGPT**. OpenAI must allow your account and this integration to use your plan. Choose an available model and run the test in Settings. Your existing subscription limits still apply; the connection is not a promise of unlimited use.

## Can Impian see my old ChatGPT conversations?

No. This sign-in integration does not give Impian access to your existing ChatGPT conversations. Impian sends the text you submit for its planning request.

## Can I ask the AI to do anything in Impian?

Not in this release. AI helps clarify a season and suggest goals and next actions. You review those suggestions. A general chat assistant that independently changes tasks, calendars or other applications has not been built.

## Will AI cost extra?

In ChatGPT-account mode, eligible text requests use your permitted ChatGPT plan usage or credits under OpenAI's terms and limits. In API-key mode, your own OpenAI API billing applies. Impian does not silently fall back from one to the other.

## Can I use my ChatGPT account for voice transcription?

The current sign-in route does not support the transcription API. You can type instead. Voice transcription requires choosing API-key mode and supplying your own key. Review the transcript before inserting it.

## Where do Google backups go?

To Impian's private app-data area in the Google Drive account you select. It is hidden from the ordinary Drive file list. Use **Browse / restore backups** inside Impian to see or download your copies. It is separate from Google's phone/device-backup area.

## Does Google login also connect Google backup or Google Calendar?

No. These are separate permissions. Connect each service you want to use in its own Settings section.

## What does weekly or monthly mean?

Weekly means seven days after the last successful backup. Monthly means one calendar month after it, including shorter month-end dates. A successful manual backup also starts that interval again.

## Will backups run when the app is closed?

Only if you enable the closed-app option and save it. Windows then checks the schedule daily while you are signed in. Your computer needs to be on and online. If you move the app folder, save the schedule again. Without that option, automatic backups run when Impian is open, including in its tray mode.

## Does a failed backup delete my previous copy?

No. A new successful backup creates another copy. A failure keeps the previous successful record and shows an error. Automatic retries are delayed so the app does not continually send requests.

## What happens when I restore?

The selected backup replaces the current planner after you confirm. Impian first saves the current database as **before-import.db**. Calendar writes need review and application blocking is disabled. Login credentials are not included in the backup, so you may need to reconnect services.

## Are passwords or tokens in my backup?

No. They are stored separately using Windows protection. Planner backups do include your goals, notes, calendar information, history and ordinary planner settings. Treat downloaded backups as private documents.

## Are backups encrypted with a password only I know?

No. Impian does not add its own password encryption to the planner database or cloud backup file. Google controls access to your Drive account. Someone who obtains a downloaded backup can read its planner content.

## How long are cloud copies kept?

This release retains them and lists the newest 100. It does not automatically prune old copies. Storage counts against your Google account. Disconnecting inside Impian keeps existing backups. Removing Impian's application data through Google can delete those copies.

## Can two people share the same Windows account?

They would share the same local planner. Use separate Windows accounts for separate private workspaces. Google, Apple or email sign-in does not create isolated planners in this release.

## Does signing out disconnect everything?

No. Impian account login, ChatGPT, backup storage and calendars are separate connections. Sign out or disconnect in each relevant section. Some provider permissions can also be revoked from that provider's account settings.

## What if AI or the internet is unavailable?

Keep using the local planner. Your draft stays available. Reconnect the affected service or retry later. An incomplete AI response is not treated as a confirmed plan.

## Is this a signed Microsoft Store application?

No. The current delivery is an unsigned portable Windows ZIP. Only download it from the app owner's trusted link and keep its extracted files together.

## What is GitHub, and do I need it to use Impian?

GitHub is a website where a project can keep documents, updates and downloadable releases. You do not need to understand programming to read a public guide there. You do not need a GitHub account to use Impian or read public documentation.

## What will be shared publicly?

The prepared documentation package contains the user guide, FAQ, setup information. Personal planner databases, backups, credentials and test-account data are excluded. Publishing the documents is separate from publishing the Windows app or its source code.

For step-by-step instructions, read the [user guide](USER-GUIDE.md).
