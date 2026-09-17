# Leer Nederlands — Learn Dutch

A Duolingo-style app for learning Dutch: daily lessons, verb conjugations,
everyday phrases, and pronunciation help — all with no sign-up, no backend,
and no ads.

## Features

- **11 units / 24 lessons**: greetings, numbers, key verbs (zijn/hebben/gaan),
  more verbs, everyday phrases, grammar (de/het, word order), food &
  restaurant, directions & travel, time & dates, shopping, and past tense &
  separable verbs.
- **Pronunciation help**: every word shows a simplified phonetic guide
  (e.g. *goedemorgen* → `KHOO-duh-MOR-khun`), plus a speaker button that
  plays real Dutch audio using your browser's built-in text-to-speech.
- **Listening exercises**: hear a word or phrase spoken and pick what it
  means, to train your ear alongside reading/writing.
- **Verb conjugation drills**: fill-in-the-blank exercises for present and
  past tense of core verbs.
- **Grammar tips**: short explainer cards (de/het, word order, 't kofschip,
  separable verbs) shown before the relevant lesson.
- **Streaks, XP, and a daily goal**, saved locally in your browser — no
  account needed.

## Running it locally

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
