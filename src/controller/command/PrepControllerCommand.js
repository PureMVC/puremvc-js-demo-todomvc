/**
 * @author Mike Britton
 * 
 * @class PrepControllerCommand
 * @link https://github.com/mbritton/todopuremvc.git
 * 
 * 
 */

puremvc.define
(
    {
        name:'todomvc.controller.command.PrepControllerCommand',
        parent:puremvc.SimpleCommand
    },
  
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {   // This registers multiple notes to a single command. 
            // In a more complex app, it would be the other way around
            this.facade.registerCommand(todomvc.AppConstants.LOAD_TODOS, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.SAVE_TODOS, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.COMPUTE_STATS, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.ADD_TODO, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.REFRESH_DATA, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.REMOVE_TODOS_COMPLETED, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.DELETE_TODO, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.UPDATE_TODO, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.STATS_UPDATED, todomvc.controller.command.TodoCommand);
            this.facade.registerCommand(todomvc.AppConstants.TOGGLE_TODO_STATUS, todomvc.controller.command.TodoCommand);
        }
    }    
);
