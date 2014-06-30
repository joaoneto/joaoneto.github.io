module.exports = function (grunt) {
  var conf = {
    appDir:   '.',
    distDir:  'assets',
    imgDir:   '<%= conf.appDir %>/img',
    jsDir:    '<%= conf.appDir %>/js',
    cssDir:   '<%= conf.appDir %>/css',
    fontsDir: '<%= conf.appDir %>/fonts',
    bowerDir: '<%= conf.appDir %>/bower_components'
  };

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    conf: conf,
    clean: {
      assets: ['<%= conf.distDir %>/*']
    },
    copy: {
      assets: {
        files: [
          {
            cwd: '<%= conf.bowerDir %>',
            src: [
              '**',
              '!**/.*',
              '!**/LICENSE',
              '!**/Gruntfile.js',
              '!bootstrap/{fonts,js}/**',
              '!**/{*.md,*.json,*.tpl,*.txt,*.map}',
              '!**/{test*,grunt,src,scss,less}/**'
            ],
            dest: '<%= conf.distDir %>',
            expand: true
          }
        ]
      }
    },
  });

  grunt.registerTask('dist', ['clean:assets', 'copy:assets']);
};
