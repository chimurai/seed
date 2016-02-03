# Build Lifecycle:

Inspired by [Apache Maven](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference)

- clean
- compile
    * html `{html,hbs,swig}`
    + assets
        * favicon
        * js `{js,es6,ts}`
        * css `{sass,scss,less}`
            - postcss
                + autoprefix
        * img `{png,gif,jpg,jpeg}`
            - imagemin
        * font
    + angular
        * ng-template
        * concat
        * ng-annotate
    + react
- test
    + lint
        * html
        * js
        * css
    + unit
    + e2e
- package
    + uglify
    + sourcemaps
    + rev
- deploy
- serve
    + serve:dev (compile > serve)
    + serve:dist (package > serve)
