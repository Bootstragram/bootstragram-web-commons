module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> */'
          },
      bootstragram: {
        files: [{
          expand: true,
          cwd: 'dist/assets/js',
          src: '**/*.js',
          dest: 'dist/assets/js',
          ext: '.min.js'
        }]
      }
    },
    copy: {
      fontawesome: {
        files: [
          {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.css'], dest: 'vendor/assets/css/'},
          {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.min.css'], dest: 'vendor/assets/css/'},
          {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['*'], dest: 'vendor/assets/fonts/'}
        ]
      },
      waitForImages: {
        files: [
          {expand: true, cwd: 'bower_components/waitForImages/dist/', src: ['jquery.waitforimages.js'], dest: 'vendor/assets/js/'},
          {expand: true, cwd: 'bower_components/waitForImages/dist/', src: ['jquery.waitforimages.min.js'], dest: 'vendor/assets/js/'}
        ]
      },
      jQuery: {
        files: [
          {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.js'], dest: 'vendor/assets/js/'},
          {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.*'], dest: 'vendor/assets/js/'}
        ]      
      },
      bootstrap: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.js'], dest: 'vendor/assets/js/'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'vendor/assets/js/'},
          {expand: true, cwd: 'bower_components/bootstrap/scss/', src: ['**/*'], dest: '_sass/'},
        ]      
      }
    },
  
    sassdoc: {
      default: {
        src: '_sass',
      },
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sassdoc');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('pre', [ 'copy' ])
  grunt.registerTask('post', [ 'uglify' ]);
  //grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);
};