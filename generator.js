module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.3"
    }
  })

  api.postProcessFiles(files => {
    const comment = "//cli-plugin-foobar was here\n\n"
    const file = 'src/main.js'
    const main = files[file]
    if (main) {
      files[file] = comment + main
    }
  })
}
