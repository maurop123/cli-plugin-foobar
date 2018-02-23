module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.3"
    }
  })

  api.render(files => {
    files['src/foobar.txt'] = 'barfoo'
  })
}
