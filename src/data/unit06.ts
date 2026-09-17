import type { Unit } from "../types";

export const unit06: Unit = {
  id: "u6",
  title: "Grammar: Articles & Word Order",
  description: "de/het and getting your verb in the right spot",
  color: "duo-red",
  lessons: [
    {
      id: "u6-l1",
      title: "De & Het Nouns",
      kind: "grammar",
      grammarTips: [
        {
          title: "~2/3 of nouns are 'de' words",
          body: "All plurals use 'de', regardless of the singular's article: het boek → de boeken. When in doubt, 'de' is the safer guess.",
        },
        {
          title: "'het' clues",
          body: "Most diminutives (ending in -je) and many single-syllable, abstract, or borrowed nouns take 'het': het huis, het meisje, het weer.",
        },
      ],
      words: [
        { nl: "de man", en: "the man", phonetic: "duh man" },
        { nl: "de vrouw", en: "the woman", phonetic: "duh frow" },
        { nl: "het kind", en: "the child", phonetic: "hut kint" },
        { nl: "het huis", en: "the house", phonetic: "hut hoys" },
        { nl: "de tafel", en: "the table", phonetic: "duh TAH-ful" },
        { nl: "het boek", en: "the book", phonetic: "hut book" },
        { nl: "de stad", en: "the city", phonetic: "duh staht" },
        { nl: "het weer", en: "the weather", phonetic: "hut vayr" },
        { nl: "de hond", en: "the dog", phonetic: "duh hont" },
        { nl: "de kat", en: "the cat", phonetic: "duh kat" },
      ],
    },
    {
      id: "u6-l2",
      title: "Word Order",
      kind: "grammar",
      grammarTips: [
        {
          title: "Verb-second rule",
          body: "The conjugated verb is always the second element of a main clause — even if a time word or phrase starts the sentence, the subject moves after the verb: 'Morgen ga ik naar school' (Tomorrow go I to school).",
        },
        {
          title: "Questions",
          body: "Yes/no questions simply swap verb and subject: 'Ga je mee?' = 'Are you coming along?'",
        },
      ],
      words: [
        { nl: "ik drink koffie", en: "I drink coffee", phonetic: "ik drink KOF-fee" },
        { nl: "morgen ga ik werken", en: "tomorrow I'm going to work", phonetic: "MOR-khun khah ik VER-kun" },
        { nl: "vandaag heb ik tijd", en: "today I have time", phonetic: "van-DAHKH hep ik teyt" },
        { nl: "ga je mee?", en: "are you coming along?", phonetic: "khah yuh may" },
        { nl: "waarom huil je?", en: "why are you crying?", phonetic: "VAH-rom hoyl yuh" },
        { nl: "wat doe je?", en: "what are you doing?", phonetic: "vat doo yuh" },
      ],
    },
  ],
};
