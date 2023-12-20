
const path = require('path');



module.exports = {

    entry: {

        Deities: './src/Deities.js',

        deitiesScript: './src/deitiesScript.js',

        dynamicTimeline: './src/dynamicTimeline.js',

        Inspirations: './src/Inspirations.js',

        inspirationsScript: './src/inspirationsScript.js',

        login: './src/login.js',

        Myths: './src/Myths.js',

        mythsScript: './src/mythsScript.js',
        
        profile: './src/profile.js',

        register: './src/register.js',

        Timeline: './src/Timeline.js',

        timelineData: './src/timelineData.js',

    },

    output: {

        path: path.resolve(__dirname, 'docs'),

        filename: '[name].js'

    },

    mode: 'development'

}