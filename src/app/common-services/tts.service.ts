import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor() { }

  sayMessage(message: string) {
      // Enonciation du message placé en paramètre
      const vocalMessage = new SpeechSynthesisUtterance(message);

    speechSynthesis.speak(vocalMessage);
  }
}
