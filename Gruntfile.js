module.exports = function(grunt) {

   grunt.initConfig({
      bowercopy: {
         options: {
            srcPrefix: 'bower_components' 
         },
         scripts: {
            options: {
               destPrefix: 'public/script/lib'
            },
            files: {
               'jquery.js': 'jquery/dist/jquery.min.js',
               'vue.js': 'vue/dist/vue.min.js',
               'tether.js': 'tether/dist/js/tether.min.js',
               'socket.io.js': 'socket.io-client/dist/socket.io.min.js',
               'bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js'
            },
         },
         style: {
            options: {
               destPrefix: 'public/css'
            },
            files: {
               'tether.css': 'tether/dist/css/tether.min.css',
               'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css'
            },
         },
      },   
   });

   grunt.loadNpmTasks('grunt-bowercopy');
};
