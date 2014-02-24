var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('gulp-exec');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('upload', function() {
	var options = {
		silent: false,
		src: "htdocs",
		dest: "root@new.traintoproclaim.com:/var/www/virtual/new.traintoproclaim.com/htdocs/",
		key: "/home/cambell/dev.key"
	};
	gulp.src('htdocs')
		.pipe(exec('rsync -rzlt --chmod=Dug=rwx,Fug=rw,o-rwx --delete --exclude-from="upload-exclude.txt" --stats --rsync-path="sudo -u vu2003 rsync" --rsh="ssh -i <%= options.key %>" <%= file.path %>/ <%= options.dest %>', options));
	gulp.src('htdocs/images')
		.pipe(exec('rsync -rzlt --chmod=Dug=rwx,Fug=rw,o-rwx --stats --rsync-path="sudo -u vu2003 rsync" --rsh="ssh -i <%= options.key %>" <%= file.path %>/ <%= options.dest %>images/', options));
});