JU Confession Bot - Vercel Deployment
=====================================

Files:
- /api/webhook.js   -> Vercel webhook endpoint (required)
- miki_core.js      -> Bot core (handlers). This file is derived from your uploaded file and patched.
- package.json

Important environment variables (set in Vercel Project > Settings > Environment Variables):
- BOT_TOKEN (required)               e.g. 123456:ABC-DEF
- WEBHOOK_URL (required)             e.g. https://your-project.vercel.app
- CHANNEL_ID (required)              e.g. @yourchannel or -1001234567890
- ADMIN_IDS (comma-separated user ids)
- FIREBASE_PROJECT_ID
- FIREBASE_PRIVATE_KEY (with \n for newlines)
- FIREBASE_CLIENT_EMAIL

Deployment steps:
1. Upload the project to your repository or zip and import into Vercel.
2. Set the environment variables listed above.
3. Deploy.
4. Set Telegram webhook (replace below with your values):

curl -F "url=https://your-project.vercel.app/api/webhook" https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook

5. Verify:
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo

Notes:
- Monitor Vercel Function logs to debug.
- If your FIREBASE_PRIVATE_KEY contains newlines, in Vercel set them escaped (replace actual newlines with \n).
