# TODO

Not writing issues at the moment, obviously still pretty in a WIP-state.

Bugfix

- (#1) Repair pre-commit hook (this shit:
  `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Failed to load plugin 'vue' declared in '.eslintrc.js': Package subpath './lib/rules/array-bracket-spacing' is not defined by "exports" in /home/hackerman/Dev/nuxt3-template/node_modules/eslint/package.json`)
- Weirdly, we need to refresh /car/:id. That's problematic.

Features

- Add basic pages and components
- Add more queries
- Add mutations
- Add i18n translations (see: https://github.com/intlify/nuxt3)
- Add styles (style-component?)

Docs

- Add golden rules
- Add list of chosen technologies
- Add doc for each common component

DevEx

- Add CI
- Add jest unit tests
- Add storybook

One day

- Create more generic template for any programming project (with docs, maybe some golden rules?)
- Create more generic template for any TS project (with docs!)
- Move eslint and prettier configs to a separate repo (+ add inheritance for TS and various frameworks)
- Create an API to be used here (would provider good GQL mutation examples)
