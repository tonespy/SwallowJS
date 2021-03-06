/**
 * The main Controller for handling all system required
 * SwallowJs(tm) : SwallowJs Framework (http://docs.swallow.js)
 *
 * For full copyright and license information, please see the LICENSE.txt
 *
 * @link          http://docs.swallow.js SwallowJs(tm) Project
 * @link          https://api.jquery.com/jquery.getscript/
 * @package       swallow.boot.js
 * @since         SwallowJs(tm) v 0.2.9
 */

if ("undefined" == typeof jQuery)
    throw new Error("SwallowJS requires jQuery");

$().ready(function () {

    $('<link>')
        .appendTo('head')
        .attr({type: 'text/css', rel: 'stylesheet', class: 'swallow_stylesheet'})
        .attr('href', 'swallow/utility/css/swallowjs.css');

    var includePath = [
        'swallow/plugins/Rx.js',
        'swallow/plugins/redux.min.js',
        'swallow/plugins/es6-promise.auto.js',
        'swallow/utility/helper.js',
        'swallow/utility/bootstrap.js',
        'config.js',
        'swallow/plugins/handlebars/handlebars.js',
        'swallow/plugins/path/path.min.js',
        'swallow/service/initializeFirebaseConnection.js',
        'swallow/utility/layout.js',
        'broadcast.js',
        'routes.js'
    ];

    var loadScript = function (includePath){
        var f = 0;
        var fPath = includePath[f];

        var getSc = function (fPath){
            $.getScript(fPath, function( data, textStatus, jqxhr ) {
                if (f === (includePath.length -1)) {
                    $(initPath);
                    logMessage('**** SwallowJs is working perfectly ****');
                } else if (textStatus === "success") {
                    f++;
                    getSc(includePath[f]);
                }
            });
        };
        getSc(fPath);
    };
    loadScript(includePath);
});