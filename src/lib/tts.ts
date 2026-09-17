let cachedVoice: SpeechSynthesisVoice | null | undefined;

function pickDutchVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;
  if (typeof window === "undefined" || !window.speechSynthesis) {
    cachedVoice = null;
    return cachedVoice;
  }
  const voices = window.speechSynthesis.getVoices();
  cachedVoice =
    voices.find((v) => v.lang === "nl-NL") ??
    voices.find((v) => v.lang?.startsWith("nl")) ??
    null;
  return cachedVoice;
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = undefined;
  };
}

export function isSpeechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speakDutch(text: string, rate = 0.85): void {
  if (!isSpeechAvailable()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  utterance.rate = rate;
  const voice = pickDutchVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}
