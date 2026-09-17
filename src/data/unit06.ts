import type { Unit } from "../types";

export const unit06: Unit = {
  id: "u6",
  title: "Grammar: Building Sentences",
  description: "de/het, word order, negation, connectors, and questions",
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
      sentences: [
        { nl: "Ik drink koffie", en: "I drink coffee" },
        { nl: "Morgen ga ik werken", en: "Tomorrow I'm going to work" },
        { nl: "Vandaag heb ik tijd", en: "Today I have time" },
        { nl: "Ga je mee?", en: "Are you coming along?" },
        { nl: "Wat doe je?", en: "What are you doing?" },
      ],
    },
    {
      id: "u6-l3",
      title: "Negation & Connectors",
      kind: "grammar",
      grammarTips: [
        {
          title: "niet vs. geen",
          body: "'Niet' negates verbs, adjectives, and definite nouns ('Ik ga niet' — I'm not going). 'Geen' negates an indefinite noun — anywhere you'd otherwise use 'een' or no article at all: 'Ik heb geen tijd' (I have no time), not 'Ik heb niet tijd'.",
        },
        {
          title: "omdat sends the verb to the end",
          body: "'Want' (because) doesn't change word order. But 'omdat' (because) is a subordinating conjunction — it pushes the conjugated verb to the very end of its clause: 'Ik blijf thuis omdat ik ziek ben' (I stay home because I sick am).",
        },
      ],
      words: [
        { nl: "niet", en: "not", phonetic: "neet" },
        { nl: "geen", en: "no / not any", phonetic: "khayn" },
        { nl: "en", en: "and", phonetic: "en" },
        { nl: "maar", en: "but", phonetic: "mahr" },
        { nl: "of", en: "or", phonetic: "of" },
        { nl: "want", en: "because (doesn't move the verb)", phonetic: "vant" },
        { nl: "dus", en: "so", phonetic: "dus" },
        { nl: "omdat", en: "because (sends verb to end)", phonetic: "OM-dat" },
        { nl: "als", en: "if", phonetic: "als" },
      ],
      sentences: [
        { nl: "Ik heb geen tijd", en: "I have no time" },
        { nl: "Ik ga niet naar school", en: "I'm not going to school" },
        { nl: "Ik wil koffie maar ik heb geen geld", en: "I want coffee but I have no money" },
        { nl: "Ik blijf thuis want ik ben ziek", en: "I'm staying home because I'm sick" },
        { nl: "Ik ben moe dus ik ga slapen", en: "I'm tired so I'm going to sleep" },
      ],
    },
    {
      id: "u6-l4",
      title: "Asking Questions",
      kind: "grammar",
      grammarTips: [
        {
          title: "Question word, then verb, then subject",
          body: "Open questions start with the question word, followed immediately by the conjugated verb, then the subject: 'Waar woon je?' (Where live you?) = 'Where do you live?'",
        },
        {
          title: "wat vs. welke",
          body: "'Wat' is a general 'what'. 'Welke' means 'which' and is used when picking from a set: 'Welke kleur wil je?' (Which color do you want?).",
        },
      ],
      words: [
        { nl: "wie", en: "who", phonetic: "vee" },
        { nl: "wat", en: "what", phonetic: "vat" },
        { nl: "waar", en: "where", phonetic: "vahr" },
        { nl: "wanneer", en: "when", phonetic: "va-NAYR" },
        { nl: "waarom", en: "why", phonetic: "VAH-rom" },
        { nl: "hoe", en: "how", phonetic: "hoo" },
        { nl: "welke", en: "which", phonetic: "VEL-kuh" },
        { nl: "hoeveel", en: "how much / how many", phonetic: "hoo-FAYL" },
      ],
      sentences: [
        { nl: "Wie ben jij?", en: "Who are you?" },
        { nl: "Wat wil je doen?", en: "What do you want to do?" },
        { nl: "Waar woon je?", en: "Where do you live?" },
        { nl: "Wanneer kom je?", en: "When are you coming?" },
        { nl: "Hoe heet je?", en: "What is your name?" },
        { nl: "Welke kleur wil je?", en: "Which color do you want?" },
      ],
    },
  ],
};
