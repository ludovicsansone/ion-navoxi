import { Injectable } from '@angular/core';

@Injectable()
export class TtsProvider {

    constructor() {
        console.log('Hello TtsProvider Provider');
    }

    sayMessage(message: string) {
        // Enonciation du message placé en paramètre
        const vocalMessage = new SpeechSynthesisUtterance(message);

        speechSynthesis.speak(vocalMessage);
    }
}
