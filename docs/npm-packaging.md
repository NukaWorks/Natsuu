# NPM Package

## Relationship between natsuu and Content

When you're working on just the [content](https://github.com/NukaWorks/content) you
don't need all the things of natsuu. For example, you don't need the
`create-react-app` front-end dev server on `localhost:3000`. You also don't
need all the things natsuu needs for running automated tests.

So, we package up natsuu as an NPM tarball, released to
[npmjs.com as `@nukaworks/natsuu`](https://www.npmjs.com/package/@nukaworks/natsuu) and that's
what Content depends on. This package should contain everything you need to
start a server that contains all the editing and previewing features, plus
the ability to natsuu build a document to its final `index.html` form.

In natsuu, a [GitHub Action](https://github.com/NukaWorks/natsuu/blob/main/.github/workflows/npm-publish.yml)
runs on every commit to `main` and that creates
[a `git` tag](https://github.com/NukaWorks/natsuu/tags) and a tarball release
on npmjs.com.

## As slim as possible

The general idea is that the npm tarball can and should be as small as
possible. This is based on the fact that it should only contain what's
actually needed to use natsuu from the Content repo to do your previewing
and other various "CRUD" (Create, Read, Update, Delete) tools.

To accomplish this, you use the `.npmignore` to control which files
don't get included in the tarball. For example, source code that isn't
needed once the builds/dists have been made.

You can always investigate what gets included in the tarball by running,
at any time, this:

    cat .git/info/exclude >> .npmignore
    npm pack --dry-run
    git checkout .npmignore

Or, you can omit the `--dry-run`, let it create a `nukaworks-natsuu-0.x.y.tgz` which
you can extract into your `/tmp/` directory and manually inspect the files
in there.

But note, it's not just about what's included in the tarball. What also
matters is what what happens when someone installs the tarball. Because the
tarball contains a `package.json` and consecuent `yarn install` (or
`npm install` for that matter) will start to download those dependencies too.

In natsuu, any dependency that you don't need in Content, but you need in
natsuu should go into the `devDependencies` (rather than `dependencies`) in
the `package.json`. For example, things that are used to for automated
testing of natsuu:

    yarn add --dev jest-environment-jsdom-sixteen

## Debugging the tarball

There might be easier ways to do this, but this works. Suppose you have two
directories: `~/natsuu` and `~/content`. And you want to know if some edit
to the `package.json` would work when shipped.

First of all, make you relevant edits in `~/natsuu` then run:

    export REACT_APP_DISABLE_AUTH=true
    export REACT_APP_CRUD_MODE=true
    yarn prepare-build
    echo .git/info/exclude >> .npmignore
    echo .env >> .npmignore
    npm pack

This is essentially what the `npm-publish.yml` workflow does in a GitHub
Action, with the only difference that you use `npm pack` instead of
`npm publish`. This will produce a `nukaworks-natsuu-x.y.z.tgz` file on your disk.

Now, go to `~/content` and run:

    rm -fr node_modules
    yarn add ~/natsuu/nukaworks-natsuu-x.y.z.tgz
    yarn start
    open http://localhost:5042

Make sure you actually test it out fully. For example, just because
`yarn start` starts the server OK, doesn't mean it can do all things
it needs to do. The best place to start is to navigate into
<http://localhost:5042> to an actual page which
will need to built-on-the-fly.
