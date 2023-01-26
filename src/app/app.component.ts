import { Component } from '@angular/core';
import { FeatureFlagService } from './routes/feature.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Feature Flag Protected Lazy-Loading Route';
  secretPageDisabled = true;

  constructor(private features: FeatureFlagService) {}

  toggleSecretPage() {
    this.secretPageDisabled = !this.secretPageDisabled;

    if (this.secretPageDisabled) {
      this.features.disable('secret-page-enabled');
    } else {
      this.features.enable('secret-page-enabled');
    }
  }
}
