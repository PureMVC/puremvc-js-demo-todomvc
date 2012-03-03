/**
 * @class todo.controller.PrepareModelCommand
 */
puremvc.define
(
	{
		name: 'todo.controller.PrepareModelCommand'
	,	parent: puremvc.SimpleCommand
	}
	
,	{
		/** @override */
		execute: function ()
		{
			this.facade.registerProxy(new todo.model.proxy.TodoProxy);
		}
	}
);
