# Windows application blocking

This is opt-in process enforcement. While a consented focus session runs, Impian checks about once per second for selected executable paths in the same Windows session and forcibly closes matching processes. Programs can launch briefly before the next check. It is not an OS-level launch prohibition or an anti-tampering security boundary.

**Save your work first.** Force-closing can discard unsaved work. Each start/resume requires explicit consent naming the selected executables. The default is off; demo workspaces never enforce rules. Import/restore turns the option off, and app restart recovers focus as paused with no armed enforcement.

Windows-directory executables, critical processes, Impian, common shells and recovery tools are excluded. Paths must exist, end in `.exe`, and have no symbolic links or junctions. Enforcement checks the complete process image path and session, skips Impian's own PID, and never kills descendant process trees. Elevated/protected processes may reject access and remain available; a status explains access-denied cases. There is no administrator elevation, driver, registry restriction, process suspension, input interception or window overlay.

Emergency release: **Ctrl+Alt+Shift+F12**, the tray's Emergency release item, the Focus Pause button, or Esc while Impian has focus. The global hotkey must register successfully before enforcement can be armed. If another app owns it, disable blocking or free that shortcut. Website rules are separate and clear on the extension's next poll, not instantly with the hotkey.

No OS restrictions survive process exit. If Impian crashes or is closed, checking stops and selected apps can be opened normally. Already terminated apps and their unsaved data cannot be restored. This behavior was tested with a disposable helper executable: pause and mismatched sessions leave it running; active enforcement closes it; disarm and a fresh blocker instance allow it to run again.

Implementation references: Microsoft's [Process.Kill documentation](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.process.kill?view=net-10.0) and [RegisterHotKey documentation](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerhotkey).
