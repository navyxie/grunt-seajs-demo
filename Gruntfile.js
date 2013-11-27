//http://hi.baidu.com/liuda101/item/54bcf8d0b6a65602d68ed057
module.exports = function(grunt){
    
     grunt.initConfig({
          transport : {
               options : {
                    format : 'application/dist/{{filename}}'  //生成的id的格式
               },
               application : {
                    files:[{
                         expand:true,
                         cwd:'application',
                         src:['application.js','util.js'],
                         dest:'.build',
                         ext : '.js'
                    }]
               }
          },
          concat : {
               main : {
                    options : {
                         relative : true
                    },
                    files : {
                         'dist/application.js' : ['.build/util.js','.build/application.js'],  // 合并.build/application.js文件到dist/application.js中
                         'dist/application-debug.js' : ['.build/util-debug.js','.build/application-debug.js']
                    }
               }
          },
          uglify : {
               main : {
                    files : {
                         'dist/application.js' : ['dist/application.js'] //对dist/application.js进行压缩，之后存入dist/application.js文件
                    }
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
    
     grunt.registerTask('build',['transport','concat','uglify'])
};