import { handleMessage, handleCallbackQuery, bot } from "../miki_core.js";

/**
 * Vercel webhook endpoint for Telegram updates.
 * Make sure to set environment variables in Vercel:
 * BOT_TOKEN, CHANNEL_ID, ADMIN_IDS, FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, WEBHOOK_URL
 */

export default async function handler(req, res) {
  try {
    console.log("🔔 Webhook received. Headers:", JSON.stringify(req.headers));
    const update = req.body;
    console.log("🔎 Update body (truncated):", JSON.stringify(update).substring(0,800));

    if (update.message) {
      await handleMessage(update.message);
    }

    if (update.callback_query) {
      await handleCallbackQuery(update.callback_query);
    }

    // Fast response for Telegram
    res.status(200).send('OK');
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).send('Error');
  }
}
