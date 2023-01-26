import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  private flags: Record<string, unknown> = {};

  enable(key: string, value: unknown = true) {
    this.flags[key] = value;
  }

  disable(key: string, value: unknown = false) {
    this.flags[key] = value;
  }

  set(flags: Record<string, unknown>) {
    Object.assign(this.flags, flags);
  }

  get(key: string) {
    return this.flags[key];
  }
}

@Injectable()
export class FeatureFlagGuard implements CanMatch, CanActivate {
  constructor(private router: Router, private features: FeatureFlagService) {}

  canMatch(route: Route) {
    return this.isEnabled(route) || this.router.createUrlTree(['/']);
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.isEnabled(route.routeConfig) || this.router.createUrlTree(['/']);
  }

  isEnabled(route: Route | null) {
    if (!route?.data?.['feature']) {
      return false;
    }

    return !!this.features.get(route.data['feature']);
  }
}
