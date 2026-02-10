/**
 * Stub function for sending date plan + message via email.
 * Currently resolves immediately. Will be replaced with actual API call later.
 */
export async function sendPlanEmail(
  plan: string,
  message: string
): Promise<{ success: boolean }> {
  const payload = {
    plan,
    message,
    timestamp: new Date().toISOString(),
  };

  // TODO: Replace with actual API call
  console.log("sendPlanEmail payload (stub):", payload);

  return { success: true };
}
