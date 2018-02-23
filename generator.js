module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.3"
    }
  })

  api.postProcessFiles(files => {
    const comment = "//cli-plugin-foobar was here\n\n"
    files['src/main.js'] = comment + files['src/main.js']
  })
}
