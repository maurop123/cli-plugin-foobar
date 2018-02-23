module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.3"
    }
  })

  api.render(files => {
    const comment = "\n\n//cli-plugin-foobar was here"
    files['src/main.js'] = files['src/main.js'] + comment
  })
}
