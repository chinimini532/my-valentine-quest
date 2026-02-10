import emailjs from "@emailjs/browser";

/**
 * Sends the selected date plan + message via EmailJS.
 * Does NOT throw if email fails (keeps UI behavior unchanged).
 */
export async function sendPlanEmail(
  plan: string,
  message: string
): Promise<{ success: boolean }> {
  const payload = {
    date_plan: plan,                 // MUST match EmailJS template
    message: message,
    timestamp: new Date().toISOString(),
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // If env vars are missing, silently succeed (safe fallback)
  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS env vars missing. Email not sent.", payload);
    return { success: true };
  }

  try {
    await emailjs.send(serviceId, templateId, payload, {
      publicKey,
    });
    console.log("Valentine email sent successfully 💌", payload);
    return { success: true };
  } catch (err) {
    console.error("Failed to send Valentine email:", err);
    return { success: false };
  }
}
