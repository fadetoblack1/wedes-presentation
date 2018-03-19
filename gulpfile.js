require('babel-core/register');

require('./gulp/tasks/twig.js');
require('./gulp/tasks/stylus.js');
require('./gulp/tasks/scripts.js');
require('./gulp/tasks/livereload.js');
require('./gulp/tasks/sprite-svg.js');

require('./gulp/tasks/default.js');
require('./gulp/tasks/build.js');
