import type { Unit } from "../types";

export const unit03: Unit = {
  id: "u3",
  title: "Key Verbs: Be, Have, Go",
  description: "The three verbs you'll use in almost every sentence",
  color: "duo-purple",
  lessons: [
    {
      id: "u3-l1",
      title: "To Be — zijn",
      kind: "verbs",
      grammarTips: [
        {
          title: "zijn (to be)",
          body: "Completely irregular, just like English 'to be'. You must memorize this one — it's the most common verb in the language.",
        },
      ],
      words: [
        { nl: "zijn", en: "to be", phonetic: "zeyn", tag: "verb" },
        { nl: "ik ben", en: "I am", phonetic: "ik ben" },
        { nl: "jij bent", en: "you are", phonetic: "yey bent" },
        { nl: "hij is", en: "he is", phonetic: "hey is" },
        { nl: "wij zijn", en: "we are", phonetic: "wey zeyn" },
      ],
      conjugations: [
        {
          infinitive: "zijn",
          infinitiveEn: "to be",
          tense: "present",
          rows: [
            { pronoun: "ik", form: "ben", phonetic: "ben" },
            { pronoun: "jij / je", form: "bent", phonetic: "bent" },
            { pronoun: "hij / zij / het", form: "is", phonetic: "is" },
            { pronoun: "wij / we", form: "zijn", phonetic: "zeyn" },
            { pronoun: "jullie", form: "zijn", phonetic: "zeyn" },
            { pronoun: "zij", form: "zijn", phonetic: "zeyn" },
          ],
        },
      ],
    },
    {
      id: "u3-l2",
      title: "To Have — hebben",
      kind: "verbs",
      words: [
        { nl: "hebben", en: "to have", phonetic: "HEB-bun", tag: "verb" },
        { nl: "ik heb", en: "I have", phonetic: "ik hep" },
        { nl: "jij hebt", en: "you have", phonetic: "yey hept" },
        { nl: "zij heeft", en: "she has", phonetic: "zey hayft" },
        { nl: "wij hebben", en: "we have", phonetic: "wey HEB-bun" },
      ],
      conjugations: [
        {
          infinitive: "hebben",
          infinitiveEn: "to have",
          tense: "present",
          rows: [
            { pronoun: "ik", form: "heb", phonetic: "hep" },
            { pronoun: "jij / je", form: "hebt", phonetic: "hept" },
            { pronoun: "hij / zij / het", form: "heeft", phonetic: "hayft" },
            { pronoun: "wij / we", form: "hebben", phonetic: "HEB-bun" },
            { pronoun: "jullie", form: "hebben", phonetic: "HEB-bun" },
            { pronoun: "zij", form: "hebben", phonetic: "HEB-bun" },
          ],
        },
      ],
    },
    {
      id: "u3-l3",
      title: "To Go — gaan",
      kind: "verbs",
      words: [
        { nl: "gaan", en: "to go", phonetic: "khahn", tag: "verb" },
        { nl: "ik ga", en: "I go", phonetic: "ik khah" },
        { nl: "jij gaat", en: "you go", phonetic: "yey khaht" },
        { nl: "wij gaan naar huis", en: "we go home", phonetic: "wey khahn nahr hoys" },
        { nl: "waar ga je heen?", en: "where are you going?", phonetic: "wahr khah yuh hayn" },
      ],
      conjugations: [
        {
          infinitive: "gaan",
          infinitiveEn: "to go",
          tense: "present",
          rows: [
            { pronoun: "ik", form: "ga", phonetic: "khah" },
            { pronoun: "jij / je", form: "gaat", phonetic: "khaht" },
            { pronoun: "hij / zij / het", form: "gaat", phonetic: "khaht" },
            { pronoun: "wij / we", form: "gaan", phonetic: "khahn" },
            { pronoun: "jullie", form: "gaan", phonetic: "khahn" },
            { pronoun: "zij", form: "gaan", phonetic: "khahn" },
          ],
        },
      ],
    },
  ],
};
