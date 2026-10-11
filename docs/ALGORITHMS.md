# Explainable Impian equivalents

## Scheduling

Tasks sort by priority (1 first), due date, then stable ID. Pending prerequisites are planned first. Missing dependencies and cycles are surfaced. A dependent task begins only after all unfinished prerequisites have sufficient scheduled duration. Habits cannot run before their occurrence date. Suggestions use the selected working days (default Monday–Friday); week start controls grouping.

The planner enumerates snapped times inside working hours and outside the configured daily break. Hidden calendars still count when their busy toggle is enabled. Each existing busy event gets the configured buffer on both sides. Task minutes per day cannot exceed the limit. Durations are never silently shortened. Splitting is opt-in, using up to 60-minute chunks; if the whole task cannot fit, none of its new chunks is proposed. Past deadlines yield an explicit unscheduled reason.

Preview reports available and requested hours, additions, and all unplaced tasks. Applying rechecks overlaps against current local data. Opt-in replanning may move or remove future blocks explicitly marked flexible and stored locally, with all changes listed before Apply. Fixed, imported and published time stays in place. Applying rejects stale task, calendar or availability inputs as well as new overlaps. Manual block dragging opens a reviewable editor rather than immediately committing a move. All-day end dates are exclusive. Ambiguous/nonexistent DST wall times are rejected for manual local creation; provider events retain absolute instants.

## Plan Strength

The score is a heuristic, **not a probability of success** and not Superfocus's undisclosed formula. Per goal:

| Component | Maximum | Rule |
|---|---:|---|
| Outcome clarity | 15 | Description at least 20 characters; a deliberately weak proxy, disclosed in UI |
| Success measure | 20 | Nonblank user-entered success measure |
| Next actions | 15 | At least one open action |
| Capacity | 15 | All goal actions fit in the current week's deterministic proposal |
| Protected time | 20 | min(20, floor(20 × upcoming scheduled minutes / open action estimates)); zero when no requested time |
| Prerequisites | 10 | At least one open action and every listed prerequisite completed |
| Conflicts | 5 | Some future protected time and no overlaps with selected busy calendars |

Each point contribution is shown with its evidence. Outcome progress is explicitly entered by the user; action completion does not imply outcome achievement. Scheduled hours and recorded session hours are displayed separately. Goal trajectory predictions are not fabricated.

## Coaching

Rules currently surface goals with open actions but no future protected minutes, and goals whose open actions have at least three recorded moves. The suggestion quotes counts from history, and never invents a best-performing time of day. Preview opens the deterministic schedule. Edit changes the goal or availability; Dismiss persists the advice identity. Additional rules identify three or more unscheduled actions of at most 30 minutes for one goal, and requests exceeding the remaining weekly capacity. Goal-scoped previews group related actions while retaining buffers and deadlines; deferral previews may replan flexible local time. No statistical productivity-hour inference is made.

## Focus timing and quality

Every one-second heartbeat accumulates wall-clock elapsed time only when the gap is at most 30 seconds. Longer gaps trigger a pause and do not count sleep/unobserved time. State is persisted every five heartbeats. Restart recovers unfinished sessions as paused; at most the unsaved heartbeat interval may be lost in a crash. Paused observed time is recorded separately. Countdown expiry does not automatically mark a task complete; a session can continue beyond its planned duration.

Quality feedback is the optional 1–5 **user-reported rating**, plus active session time, pause time and interruption count. There is no composite productivity percentage and no activity monitoring. Absence of a rating is labelled Insufficient data. Timer runtime is never described as productive work.

## Reminders

Local reminders use `(block ID, start instant, offset)` deduplication persisted in SQLite. A notification is eligible only during the 30 seconds after its trigger and before the block begins. This avoids stale bursts after sleep. Notifications use Windows tray balloons; OS notification settings may suppress them. Provider reminder configuration is untouched.

