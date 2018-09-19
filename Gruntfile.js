module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    const taskConfig = {
        stylus: {
            options: {
                use: [
                    function () {
                        return require('autoprefixer-stylus')('last 2 versions', 'ie 11');
                    },
                    function () {
                        return require('rupture')();
                    }
                ]
            },
            prod: {
                files: [{
                    src: './src/styles/**/*.styl',
                    dest: './dist/css/main.css'
                }]
            }
        },
        clean: {
            prod: ['./dist/*']
        },
        copy: {
            static: {
                files: [
                    {
                        cwd: './src/html',
                        src: '**/*',
                        dest: './dist/',
                        expand: true
                    }
                ]
            }
        }
    };

    grunt.initConfig(taskConfig);
    grunt.registerTask('build', ['clean', 'stylus', 'copy']);
};