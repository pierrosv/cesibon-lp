import { NgxCookiebotConfig } from '@halloverden/ngx-cookiebot';

export class CookiebotConfig extends NgxCookiebotConfig {
  override blockingMode: 'auto' | 'manual' | string = 'manual';
  override cbId = 'b14a6594-5817-4486-8a70-7b8c53a69a1f';
  override cdn: 'com' | 'eu' | string = 'eu';
  override culture?: string;
  override framework?: string;
  override level?: string;
  override loadScript = true;
  override type?: string;
}
