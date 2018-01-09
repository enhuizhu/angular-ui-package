
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundles/GlencoreUIModule.umd.js',
    format: 'umd',
    name: 'GlencoreUIModule',
    sourcemap: true,
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }
}