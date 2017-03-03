module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      dist: {
        files: {
          'js/bsg-get-script.js': '_es2015/bsg-get-script.js',
          'js/bsg-social-share-es2015.js': '_es2015/bsg-social-share.js'
        }
      }
    },
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less", "bower_components/components-font-awesome/less"],
          yuicompress: true
        },
        files: {
          "css/bootstragram.min.css": "_less/bootstragram.less"
        }
      }
    },
    uglify: {
      bower: {
        files: [{
          expand: true,
          cwd: 'dist/js',
          src: '*.js',
          dest: 'dist/js/min',
          ext: '.min.js'
        }]
      },
    },
    copy: {
      fontawesome: {
        files: [
          {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.min.css'], dest: 'vendor/assets/css/'},
          {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['*'], dest: 'vendor/assets/fonts/'}
        ]
      },
      waitForImages: {
        files: [
          {expand: true, cwd: 'bower_components/waitForImages/dist/', src: ['jquery.waitforimages*.js'], dest: 'vendor/assets/js'}
        ]
      },
      jQuery: {
        files: [
          {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.*.js'], dest: 'vendor/assets/js/'},
        ]
      },
      bootstrap: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.*.js'], dest: 'vendor/assets/js'},
        ]
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/bsg-float-animation.css': '_sass/bsg-float-animation.scss'
        }
      }
    },
    sassdoc: {
      default: {
        src: '_sass',
      },
    }

  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sassdoc');

  grunt.registerTask('bower', [ 'uglify:bower' ])
  grunt.registerTask('default', [ 'less', 'copy' ]);
};
