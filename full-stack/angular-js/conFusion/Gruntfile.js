'use strict';
module.exports = function(grunt){
    
    
    //Time how long tasks take. Can help with optimizing build tasks
        require('time-grunt')(grunt);
        
    //Automaticaly load required Grunt Tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({
        
        pkg:grunt.file.readJSON('package.json'),
        
        jshint:{
            options:{
                jshintrc:'.jshintrc',
                reporter:require('jshint-stylish')
            },
            
            all:{
                src:['Gruntfile.js',
                     'app/scripts/{,*/}*.js'
                    ]
            }
            
        }
    });
    
    grunt.registerTask('build',['jshint']);
    grunt.registerTask('default',['build']);
    
    
    


};