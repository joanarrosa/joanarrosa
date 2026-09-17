import type { Unit } from "../types";

export const unit08: Unit = {
  id: "u8",
  title: "Directions & Travel",
  description: "Find your way and get where you're going",
  color: "duo-blue",
  lessons: [
    {
      id: "u8-l1",
      title: "Getting Around",
      kind: "vocab",
      words: [
        { nl: "links", en: "left", phonetic: "links" },
        { nl: "rechts", en: "right", phonetic: "rekhts" },
        { nl: "rechtdoor", en: "straight ahead", phonetic: "REKHT-dohr" },
        { nl: "hier", en: "here", phonetic: "heer" },
        { nl: "daar", en: "there", phonetic: "dahr" },
        { nl: "dichtbij", en: "nearby", phonetic: "DIKHT-bey" },
        { nl: "ver", en: "far", phonetic: "ver" },
        { nl: "de straat", en: "the street", phonetic: "duh straht" },
        { nl: "het station", en: "the station", phonetic: "hut stah-SHON" },
        { nl: "de trein", en: "the train", phonetic: "duh treyn" },
        { nl: "het vliegtuig", en: "the airplane", phonetic: "hut VLEEKH-toykh" },
        { nl: "de bus", en: "the bus", phonetic: "duh bus" },
        { nl: "de auto", en: "the car", phonetic: "duh OW-toh" },
        { nl: "het hotel", en: "the hotel", phonetic: "hut hoh-TEL" },
      ],
    },
    {
      id: "u8-l2",
      title: "Asking for Directions",
      kind: "phrases",
      words: [
        { nl: "waar is het station?", en: "where is the station?", phonetic: "wahr is hut stah-SHON" },
        { nl: "hoe kom ik bij het centrum?", en: "how do I get to the city center?", phonetic: "hoo kom ik bey hut SEN-trum" },
        { nl: "kunt u me helpen?", en: "can you help me?", phonetic: "kunt ew muh HEL-pun" },
        { nl: "een kaartje", en: "a ticket", phonetic: "un KAHRT-yuh" },
        { nl: "enkele reis", en: "one-way (ticket)", phonetic: "EN-kuh-luh reys" },
        { nl: "retour", en: "round trip", phonetic: "ruh-TOOR" },
        { nl: "ik ben verdwaald", en: "I'm lost", phonetic: "ik ben ver-DWAHLT" },
        { nl: "de ingang", en: "the entrance", phonetic: "duh IN-khang" },
        { nl: "de uitgang", en: "the exit", phonetic: "duh OYT-khang" },
      ],
    },
  ],
};
