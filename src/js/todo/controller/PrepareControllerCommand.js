/**
 * @class todo.controller.PrepareControllerCommand
 * 
 * Associates application notifications with commands
 */
puremvc.define
(
	{
		name: 'todo.controller.PrepareControllerCommand'
	,	parent: puremvc.SimpleCommand
	}
	
,	{
		/** @override */
		execute: function (note)
		{
			this.facade.registerCommand(todo.AppConstants.CREATE_TODO, todo.controller.CreateTodoCommand);
		}	
	}
);
