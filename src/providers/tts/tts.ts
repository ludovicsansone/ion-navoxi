import { Injectable } from '@angular/core';

@Injectable()
export class TtsProvider {

    constructor() { }

    sayMessage(message: string) {
        const vocalMessage = new SpeechSynthesisUtterance(message);

        speechSynthesis.speak(vocalMessage);
    }
}
