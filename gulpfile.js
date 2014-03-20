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


gulp.task('db-backup', function() {
	var options = {
		silent: false,
		dest: "root@new.traintoproclaim.com",
		key: "/home/cambell/dev.key",
		password: gutil.env.password
	};
	gulp.src('')
		.pipe(exec('mysqldump -u cambell --password=<%= options.password %> traintoproclaim | gzip > backup/backup.sql.gz', options));
});

gulp.task('db-copy', ['db-backup'], function() {
	var options = {
		silent: false,
		dest: "root@new.traintoproclaim.com",
		key: "/home/cambell/dev.key",
		password: gutil.env.password
	};
	gulp.src('')
		.pipe(exec('ssh -C -i <%= options.key %> <%= options.dest %> mysqldump -u cambell --password=<%= options.password %> traintoproclaim2 | mysql -u cambell --password=<%= options.password %> -D traintoproclaim', options));
});

