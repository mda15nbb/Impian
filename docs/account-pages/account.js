(() => {
  const status = document.getElementById('status');
  const form = document.getElementById('reset');
  const config = window.impianAccountConfiguration;
  const fragment = new URLSearchParams(location.hash.slice(1));
  let token = fragment.get('access_token');
  const type = fragment.get('type');
  history.replaceState(null, '', location.pathname);
  async function request(method, path, body) {
    const response = await fetch(config.url.replace(/\/$/, '') + '/auth/v1/' + path, {
      method, redirect: 'error', referrerPolicy: 'no-referrer',
      headers: { apikey: config.publicKey, Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    });
    if (!response.ok) throw new Error('This account link is invalid or has expired. Request a new email from Impian.');
    return response;
  }
  async function start() {
    if (!config || !config.url.startsWith('https://') || !config.publicKey) throw new Error('The app owner still needs to configure this account page.');
    if (!token) { status.textContent = 'Return to Impian to sign in or request a fresh account email.'; return; }
    await request('GET', 'user');
    if (type === 'recovery') { status.textContent = 'Choose a new password, then return to Impian to sign in.'; form.hidden = false; }
    else { status.textContent = 'Your email is verified. Return to Impian and sign in.'; try { await request('POST', 'logout?scope=local', {}); } finally { token = null; } }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password !== document.getElementById('confirmation').value) { status.textContent = 'The two passwords do not match.'; return; }
    const button = form.querySelector('button'); button.disabled = true;
    try { await request('PUT', 'user', { password }); try { await request('POST', 'logout?scope=local', {}); } catch {} token = null; form.reset(); form.hidden = true; status.textContent = 'Password updated. Return to Impian and sign in with your new password.'; }
    catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  });
  start().catch(error => { status.textContent = error.message; });
})();
