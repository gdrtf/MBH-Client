import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'primeng/resources/primeng.min.css', inject: true },
      { src: 'primeng/resources/themes/rhea/theme.css', inject: true },
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    const additionalPackages: ExtendPackages[] = [
      {
        name: '@auth0/angular-jwt',
        path: 'node_modules/@auth0/angular-jwt/bundles/core.umd.js',
        packageMeta: {
          defaultExtension: 'js'
        }
      },
      {
        name: 'primeng',
        path: 'node_modules/primeng',
        packageMeta: {
           defaultExtension: 'js'
        }
      },
      {
        name: 'rxjs',
        path: 'node_modules/rxjs',
        packageMeta: {
          defaultExtension: 'js'
        }
      },
      {
        name: 'rxjs/internal-compatibility',
        path: 'node_modules/rxjs/internal-compatibility/index.js'
      },
      {
        name: 'rxjs/operators',
        path: 'node_modules/rxjs/Operator.js'
      },
      {
        name: 'rxjs/ajax',
        path: 'node_modules/rxjs/ajax/index.js'
      },
      {
        name: 'rxjs/testing',
        path: 'node_modules/rxjs/testing/index.js'
      },
      {
        name: 'rxjs/webSocket',
        path: 'node_modules/rxjs/webSocket/index.js'
      },
      {
        name: 'rxjs/bindCallback',
        path: 'node_modules/rxjs/add/observable/bindCallback.js'
      },
      {
        name: 'rxjs-compat',
        path: 'node_modules/rxjs-compat',
        packageMeta: {
          defaultExtension: 'js',
          main: 'Rx'
        }
      },
      {
        name: '@angular/http',
        path: 'node_modules/@angular/http/bundles/http.umd.js',
      },
    ];
    
    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
