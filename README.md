# Leer Nederlands — Learn Dutch

A self-paced reading app for learning Dutch: browse vocabulary, verb
conjugations, and example phrases at your own pace, with pronunciation for
every word — no quizzes, no right/wrong answers, no sign-up, no ads.

## Features

- **12 units / 27 lessons**: greetings, numbers, key verbs (zijn/hebben/gaan),
  more verbs, everyday phrases, grammar (de/het, word order, negation,
  questions), food & restaurant, directions & travel, time & dates, shopping,
  past tense & separable verbs, and more vocabulary (colors, adjectives,
  family).
- **All lessons open from the start** — browse in any order, no locked
  levels.
- **Pure reading, no quizzes**: every lesson is a deck of cards you flip
  through at your own pace — words, verb conjugation tables, and example
  sentences — with nothing to get "wrong".
- **Pronunciation for everything**: every word, verb form, and example
  sentence shows a simplified phonetic guide (e.g. *goedemorgen* →
  `KHOO-duh-MOR-khun`) plus a speaker button that plays real Dutch audio
  using your browser's built-in text-to-speech.
- **Verb conjugation tables**: full present/past tense tables for core verbs
  (zijn, hebben, gaan, willen, kunnen, moeten, mogen...), each row with audio.
- **Grammar tips**: short explainer cards (de/het, word order, 't kofschip,
  separable verbs) shown before the relevant lesson.
- **Streak and XP tracking**, saved locally in your browser — no account
  needed.

## Using it — no install needed

Once GitHub Pages is enabled for this repo (see below), the app is live at:

**https://joanarrosa.github.io/**

Just open that link — nothing to download or run. It's also a installable
app (PWA):

- **iPhone/iPad (Safari)**: open the link → Share button → "Add to Home
  Screen". It'll appear as an app icon and open full-screen.
- **Android (Chrome)**: open the link → tap the "Install app" prompt (or
  menu → "Install app"/"Add to Home screen").
- **Desktop (Chrome/Edge)**: open the link → click the install icon (⊕) in
  the address bar, or menu → "Install Leer Nederlands...".

Once installed, previously-visited lessons keep working offline.

### One-time setup for the site to go live

GitHub Pages needs to be turned on once, by whoever owns this repo:
**Settings → Pages → Source → "GitHub Actions"**. After that, every push
automatically rebuilds and redeploys the site via
`.github/workflows/deploy.yml` — no further steps needed.

## Running it locally instead

If you'd rather run it from source:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Notes

- Progress is stored in `localStorage` in your browser, so it's per-device
  and will be lost if you clear site data.
- Spoken pronunciation uses the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
  with a Dutch (`nl-NL`) voice if your browser/OS provides one. Voice
  quality and availability vary by browser.
