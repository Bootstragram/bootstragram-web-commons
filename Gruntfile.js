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
        'js/bsg-umd-root.min.js': '_javascript/bsg-umd-root.js',
        'js/bootstragram.min.js': '_javascript/bootstragram.js',
        'js/bsg-blender-canvas.min.js': '_javascript/bsg-blender-canvas.js',
        'js/bsg-animal.min.js': '_javascript/bsg-animal.js'
      }
    }
  },
  copy: {
    fontawesome: {
      files: [
        {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.min.css'], dest: 'assets/css/'},
        {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['*'], dest: 'assets/fonts/'}
      ]
    },
    waitForImages: {
      files: [
        {expand: true, cwd: 'bower_components/waitForImages/dist/', src: ['jquery.waitforimages.js'], dest: '_javascript/'},
        {expand: true, cwd: 'bower_components/waitForImages/dist/', src: ['jquery.waitforimages.min.js'], dest: 'js/'}
      ]
    },
    jQuery: {
      files: [
        {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.js'], dest: '_javascript/'},
        {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.*'], dest: 'js/'}
      ]      
    },
    bootstrap: {
      files: [
        {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.js'], dest: '_javascript/'},
        {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'js/'}
      ]      
    }
  },
  coffee: {
    compile: {
      files: {
        '_javascript/bootstragram.js': '_coffeescript/bootstragram.js.coffee',
        '_javascript/bsg-blender-canvas.js': '_coffeescript/bsg-blender-canvas.js.coffee',
        '_javascript/bsg-animal.js': '_coffeescript/bsg-animal.js.coffee'
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