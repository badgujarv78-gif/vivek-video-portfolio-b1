# Vivek Badgujar — Creative Video Editor Portfolio

A responsive React + Vite portfolio designed for Vercel. Dark editorial art direction, electric-blue accents, lime highlights, video project grid, filters, about, toolkit and contact sections.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Unzip this project and open the folder in Terminal / VS Code.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a new GitHub repository, for example `vivek-video-portfolio`.
2. Upload the contents of this folder to the repository (not the ZIP file itself).
3. Sign in at https://vercel.com/ and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically. Use:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Click **Deploy**. Vercel will give you a public URL.
7. Every future push to your connected GitHub branch will trigger a new deployment.

### Option B — Vercel CLI
Install the CLI with `npm i -g vercel`, run `vercel` in this folder and follow the prompts. For a production deployment, run `vercel --prod`.

## Add or replace videos

Open `src/main.jsx` and find the `projects` array near the top. Each item looks like:

```js
{
  id: "SeBXgxVKD9E", // YouTube video ID
  number: "01",
  type: "SHOWREEL",
  title: "Selected work / showreel",
  note: "A short description of the project.",
  tag: "Showreel"
}
```

- For a YouTube link like `https://www.youtube.com/watch?v=ABC123xyz`, set `id` to `ABC123xyz`.
- For a YouTube Shorts URL like `https://www.youtube.com/shorts/ABC123xyz`, use the same ID.
- Change `title`, `type`, `note`, and `tag` to match your project.
- Add another object to the array to add a card. Keep each `id` unique.
- The thumbnail is loaded automatically from YouTube. The card opens the video on YouTube.
- If you use Vimeo or a self-hosted MP4, the current thumbnail/link logic needs to be changed; the included starter is optimized for YouTube.

The six starter cards use video IDs previously shared in the conversation. Review them and replace any that aren't intended for public display.

## Personalize before launch

Search in `src/main.jsx` for:
- `hello@vivekbadgujar.com` — replace with your real email address.
- LinkedIn and Instagram URLs — replace the generic profile links with your actual profile URLs.
- Bio copy — update experience, location or specialties if needed.
- Project cards — replace generic starter titles and descriptions with actual project details.

Also update the page title and meta description in `index.html` if you want.

## Notes

- No paid services or database are required.
- Google Fonts and YouTube thumbnails are loaded remotely, so those require an internet connection.
- The site is responsive and supports reduced-motion preferences.
