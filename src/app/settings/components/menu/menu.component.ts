import { Component, OnInit } from '@angular/core';
import { SettingsService }  from '../../../common-services/settings.service';

@Component({
  selector: 'settings-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
  private settingsService: SettingsService) { }

  ngOnInit() {
  }

  onSetNextStartSpeech() {
      if (this.settingsService.getSettingValue('nextStartSpeech') == 'true')
      this.settingsService.setOnOffSetting('nextStartSpeech', 'false', 'Désactivé');
      else
      this.settingsService.setOnOffSetting('nextStartSpeech', 'true', 'Activé');
  }
}
