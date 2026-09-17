import type { Unit } from "../types";

export const unit11: Unit = {
  id: "u11",
  title: "Past Tense & Separable Verbs",
  description: "Talk about what happened, and split your verbs in two",
  color: "duo-red",
  lessons: [
    {
      id: "u11-l1",
      title: "Past Tense Basics",
      kind: "verbs",
      grammarTips: [
        {
          title: "Regular verbs: 't kofschip",
          body: "If the verb stem ends in one of the consonants in 't kofschip (t, k, f, s, ch, p), add -te(n) for the past tense. Otherwise add -de(n): werken → werkte, wonen → woonde.",
        },
        {
          title: "zijn and hebben are irregular",
          body: "Just like in the present tense, 'zijn' and 'hebben' don't follow the regular pattern in the past tense — memorize them separately.",
        },
      ],
      words: [
        { nl: "ik werkte", en: "I worked", phonetic: "ik VER-tuh" },
        { nl: "ik woonde", en: "I lived", phonetic: "ik VOHN-duh" },
        { nl: "ik was", en: "I was", phonetic: "ik vas" },
        { nl: "ik had", en: "I had", phonetic: "ik hat" },
        { nl: "wij waren", en: "we were", phonetic: "wey VAH-run" },
        { nl: "wij hadden", en: "we had", phonetic: "wey HAD-dun" },
      ],
      conjugations: [
        {
          infinitive: "zijn",
          infinitiveEn: "to be (past)",
          tense: "past",
          rows: [
            { pronoun: "ik", form: "was", phonetic: "vas" },
            { pronoun: "jij / je", form: "was", phonetic: "vas" },
            { pronoun: "hij / zij / het", form: "was", phonetic: "vas" },
            { pronoun: "wij / we", form: "waren", phonetic: "VAH-run" },
            { pronoun: "jullie", form: "waren", phonetic: "VAH-run" },
            { pronoun: "zij", form: "waren", phonetic: "VAH-run" },
          ],
        },
        {
          infinitive: "hebben",
          infinitiveEn: "to have (past)",
          tense: "past",
          rows: [
            { pronoun: "ik", form: "had", phonetic: "hat" },
            { pronoun: "jij / je", form: "had", phonetic: "hat" },
            { pronoun: "hij / zij / het", form: "had", phonetic: "hat" },
            { pronoun: "wij / we", form: "hadden", phonetic: "HAD-dun" },
            { pronoun: "jullie", form: "hadden", phonetic: "HAD-dun" },
            { pronoun: "zij", form: "hadden", phonetic: "HAD-dun" },
          ],
        },
      ],
    },
    {
      id: "u11-l2",
      title: "Separable Verbs",
      kind: "grammar",
      grammarTips: [
        {
          title: "Splitting in a main clause",
          body: "Separable verbs (op + staan, aan + komen...) split apart in a main clause: the prefix jumps to the very end. 'Opstaan' → 'Ik sta om 7 uur op' (I get up at 7 o'clock).",
        },
      ],
      words: [
        { nl: "opstaan", en: "to get up", phonetic: "OP-stahn", tag: "verb" },
        { nl: "ik sta op", en: "I get up", phonetic: "ik stah op" },
        { nl: "aankomen", en: "to arrive", phonetic: "AHN-koh-mun", tag: "verb" },
        { nl: "de trein komt aan", en: "the train arrives", phonetic: "duh treyn komt ahn" },
        { nl: "meenemen", en: "to take along", phonetic: "MAY-nay-mun", tag: "verb" },
        { nl: "opbellen", en: "to phone (call)", phonetic: "OP-bel-lun", tag: "verb" },
        { nl: "uitgaan", en: "to go out", phonetic: "OYT-khahn", tag: "verb" },
        { nl: "instappen", en: "to get on/board", phonetic: "IN-stap-pun", tag: "verb" },
        { nl: "weggaan", en: "to leave, go away", phonetic: "VEKH-khahn", tag: "verb" },
      ],
    },
  ],
};
