const GUEST_MODE_KEY = "ecoplay.guest_mode";
const GUEST_STATE_KEY = "ecoplay.state.guest";

export function isGuestMode(): boolean {
  try {
    return localStorage.getItem(GUEST_MODE_KEY) === "true";
  } catch {
    return false;
  }
}

export function enterGuestMode(): void {
  try {
    localStorage.setItem(GUEST_MODE_KEY, "true");
  } catch {
    // ignore storage failures
  }
}

export function exitGuestMode(): void {
  try {
    localStorage.removeItem(GUEST_MODE_KEY);
  } catch {
    // ignore storage failures
  }
}

export function hasGuestState(): boolean {
  try {
    return localStorage.getItem(GUEST_STATE_KEY) !== null;
  } catch {
    return false;
  }
}

export function clearGuestState(): void {
  try {
    localStorage.removeItem(GUEST_STATE_KEY);
    localStorage.removeItem(GUEST_MODE_KEY);
  } catch {
    // ignore storage failures
  }
}
<<<<<<< HEAD
export function getGuestId(): string {
  try {
    const existing = localStorage.getItem('ecoplay.guest_id');
    if (existing) return existing;
    const id = `guest-${crypto.randomUUID()}`;
    localStorage.setItem('ecoplay.guest_id', id);
    return id;
  } catch {
    return 'guest-local';
  }
}

=======
>>>>>>> 0c69beec0f426888f135a46b565d4e2e3408f3fe
