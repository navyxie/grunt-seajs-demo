//http://hi.baidu.com/liuda101/item/54bcf8d0b6a65602d68ed057
module.exports = function(grunt){
     grunt.initConfig({
          pkg: grunt.file.readJSON("package.json"),
          transport : {
               options : {
                    paths: ['.'],  
                    alias: '<%= pkg.spm.alias %>'                                 
               },
               application : {
                    options:{
                         idleading: "appjs/",
                         relative:true
                    },
                    files:[{
                         expand:true,
                         cwd:'application',
                         src:['**/*.js'],
                         dest:'.build/',
                         filter: 'isFile',
                         nonull: true,
                         ext : '.js'
                    }]
               }
          },
          concat : {
               main : {
                    options : {
                         paths: ['.'],
                         include: 'relative'
                    },
                    files: [{
                         expand: true,
                         cwd: '.build/',
                         src: ['**/*.js'],
                         dest: 'appjs/',
                         ext: '.js'
                    }]
               }
          },
          uglify : {
               main : {
                    options: {
                         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
                    },
                    files: [{
                         expand: true,
                         cwd: "appjs",
                         src: ["**/*.js", '!**/*-debug.js'],
                         dest: 'appjs/',
                         ext: '.js'
                    }]
               }
          },
          clean : {
               build : ['.build'] //清除.build文件
          }
     });
    
     grunt.loadNpmTasks('grunt-cmd-transport');
     grunt.loadNpmTasks('grunt-cmd-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-clean');
    
     grunt.registerTask('build',['transport','concat','uglify','clean'])
};