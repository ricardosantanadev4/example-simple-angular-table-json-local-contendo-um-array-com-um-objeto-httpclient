import { Component } from '@angular/core';
import { Config } from '../models/config';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  config: Config[] = [];

  displayedColumns: string[] = ['heroesUrl', 'textfile', 'date'];

  constructor(private configService: ConfigService) {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = data);
  }
}