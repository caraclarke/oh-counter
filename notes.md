## HMR how to

From [here](https://github.com/angular/angular-cli/issues/893).

Install the HMR stuff: `npm i -D @angularclass/hmr @angularclass/hmr-loader`

Create a shared/hmr.class.ts, copying [this](https://github.com/radusuciu/webpacked-angular-with-dll/blob/master/src/utils/hmr.ts)
Have app.module.ts import and extend [it](https://github.com/radusuciu/webpacked-angular-with-dll/blob/master/src/app.module.ts#L27)

**node_modules/angular-cli/addon/ng2/tasks/serve-webpack.ts:**

```
config.entry.main.unshift(`webpack-dev-server/client?http://${commandOptions.host}:${commandOptions.port}/`, 'webpack/hot/dev-server');

const webpackDevServerConfiguration: IWebpackDevServerConfigurationOptions = {
  contentBase: path.resolve(this.project.root, `./${CliConfig.fromProject().defaults.sourceDir}`),
  historyApiFallback: true,
  stats: webpackDevServerOutputOptions,
  inline: true,
  hot: true // **add this**
};
```

Add this to plugins inside `node_modules/angular-cli/addon/ng2/models/webpack-build-common.ts`: `new webpack.HotModuleReplacementPlugin(),`
