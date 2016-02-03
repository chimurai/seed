'use strict';

import gulp        from 'gulp';
import requireDir  from 'require-dir';

var tasks = requireDir('./gulp/tasks');

gulp.task('default', () => {
    console.log(':: default');
});
