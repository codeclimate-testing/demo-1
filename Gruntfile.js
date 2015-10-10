module.exports = function (grunt) {

    grunt.initConfig({});

    grunt.loadNpmTasks('grunt-requiresafe');

    grunt.registerTask('default', ['requiresafe-check']);
};
