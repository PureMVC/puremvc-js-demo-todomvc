/**
 * @author Mike Britton
 *
 * @class Application
 * @link https://github.com/mbritton/todopuremvc.git
 *
 * PureMVC JavaScript port of the ToDoMVC demo app
 * Created for demonstration purposes only.
 *
 * https://github.com/PureMVC/puremvc-js-multicore-framework
 *
 *
 */

/**
 * @class tododemo.Application
 */
puremvc.define(
    // CLASS INFO
    {
        name : 'todomvc.Application',
        constructor : function() 
        {
            // register the startup command and trigger it.
            this.facade.registerCommand(todomvc.AppConstants.STARTUP, todomvc.controller.command.StartupCommand );
            this.facade.sendNotification(todomvc.AppConstants.STARTUP );
        }
    },

    // INSTANCE MEMBERS
    {
        // Startup note name
        STARTUP:'startup',
               
        // Get an instance of the facade
        facade: puremvc.Facade.getInstance(todomvc.AppConstants.NAME)
    }
);
