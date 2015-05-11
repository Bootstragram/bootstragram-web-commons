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
    bootstragram: {
      files: {
        'js/bootstragram.min.js': '_javascript/bootstragram.js'
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
        '_javascript/bootstragram.js': '_coffeescript/bootstragram.js.coffee'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('javascript', [ 'coffee', 'uglify' ])
grunt.registerTask('default', [ 'less', 'coffee', 'uglify', 'copy' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};