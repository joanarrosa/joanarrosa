import type { Unit } from "../types";

export const unit09: Unit = {
  id: "u9",
  title: "Time & Dates",
  description: "Days, months, and telling the time",
  color: "duo-purple",
  lessons: [
    {
      id: "u9-l1",
      title: "Days & Relative Time",
      kind: "vocab",
      words: [
        { nl: "maandag", en: "Monday", phonetic: "MAHN-dakh" },
        { nl: "dinsdag", en: "Tuesday", phonetic: "DINS-dakh" },
        { nl: "woensdag", en: "Wednesday", phonetic: "VOONS-dakh" },
        { nl: "donderdag", en: "Thursday", phonetic: "DON-dur-dakh" },
        { nl: "vrijdag", en: "Friday", phonetic: "VREY-dakh" },
        { nl: "zaterdag", en: "Saturday", phonetic: "ZAH-tur-dakh" },
        { nl: "zondag", en: "Sunday", phonetic: "ZON-dakh" },
        { nl: "vandaag", en: "today", phonetic: "van-DAHKH" },
        { nl: "morgen", en: "tomorrow", phonetic: "MOR-khun" },
        { nl: "gisteren", en: "yesterday", phonetic: "KHIS-tuh-run" },
        { nl: "de week", en: "the week", phonetic: "duh vayk" },
      ],
    },
    {
      id: "u9-l2",
      title: "Telling Time",
      kind: "vocab",
      grammarTips: [
        {
          title: "Half past means half TO",
          body: "'Half acht' means 7:30 (halfway to eight), not 8:30 — this trips up a lot of learners!",
        },
      ],
      words: [
        { nl: "hoe laat is het?", en: "what time is it?", phonetic: "hoo laht is ut" },
        { nl: "het uur", en: "the hour", phonetic: "hut ewr" },
        { nl: "de minuut", en: "the minute", phonetic: "duh mee-NEWT" },
        { nl: "de ochtend", en: "the morning", phonetic: "duh OKH-tunt" },
        { nl: "de middag", en: "the afternoon", phonetic: "duh MID-dakh" },
        { nl: "de avond", en: "the evening", phonetic: "duh AH-vont" },
        { nl: "de nacht", en: "the night", phonetic: "duh nakht" },
        { nl: "het is drie uur", en: "it's three o'clock", phonetic: "hut is dree ewr" },
        { nl: "half acht", en: "half past seven (7:30)", phonetic: "half akht" },
        { nl: "kwart voor negen", en: "quarter to nine (8:45)", phonetic: "kwart vohr NAY-khun" },
        { nl: "kwart over vijf", en: "quarter past five (5:15)", phonetic: "kwart OH-vur veyf" },
      ],
    },
  ],
};
