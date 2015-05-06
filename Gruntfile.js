module.exports = function(grunt) {

grunt.initConfig({
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
    jquery: {
      files: {
        'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
      }
    },
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/collapse.js',
                                       'bower_components/bootstrap/js/scrollspy.js',
                                       'bower_components/bootstrap/js/tooltip.js',
                                       'bower_components/bootstrap/js/button.js',
                                       'bower_components/bootstrap/js/affix.js']
      }
    },
    deadrooster: {
      files: {
        'assets/js/deadrooster.min.js': 'assets/_javascript/deadrooster.js'
      }
    }
  },
  copy: {
    fontawesome: {
      files: [
        {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.min.css'], dest: 'assets/css/'},
        {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['*'], dest: 'assets/fonts/'}
      ]
    }
  },
  coffee: {
    compile: {
      files: {
        'assets/_javascript/deadrooster.js': 'assets/_coffeescript/deadrooster.js.coffee'
      }
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('javascript', [ 'coffee', 'uglify' ])
grunt.registerTask('default', [ 'less', 'coffee', 'uglify', 'copy', 'exec:build' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};