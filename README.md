# portfolio

The portfolio is a static HTML/CSS/JavaScript site. The Ask page uses a server-side endpoint to keep the Anthropic API key private. `server.js` provides the local Express server, and `functions/api/ask.js` provides the matching Cloudflare Pages Function at `/api/ask`.

## Run locally

1. Install Node.js 20 or newer.
2. Install the dependencies and create your local environment file:

   ```sh
   npm install
   cp .env.example .env
   ```

3. Add your Anthropic API key to `.env`:

   ```text
   ANTHROPIC_API_KEY=your_api_key
   ```

4. Start the site:

   ```sh
   npm start
   ```

5. Open [http://localhost:18789](http://localhost:18789) or [http://localhost:18789/ask](http://localhost:18789/ask).

For a Cloudflare Pages deployment, configure `ANTHROPIC_API_KEY` as a server-side environment variable. For local Pages Functions development, copy `.dev.vars.example` to `.dev.vars` and add your key. GitHub Pages alone cannot run the Ask API or the `/ask` server route.

The local Express server loads the Ask bot's source material from `knowledge.md`; that file is not served as a public static file. Keep `.env` and `.dev.vars` private; both are git-ignored. The bot directs visitors to the public email address rather than exposing a phone number.
