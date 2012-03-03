/**
 * @class todo.controller.SetupCommand
 */
puremvc.define
(
	{
		name: 'todo.controller.SetupCommand'
	,	parent: puremvc.MacroCommand
	}
	
,	{
		/** @override */
		initializeMacroCommand: function ()
		{
			this.addSubCommand(todo.controller.PrepareModelCommand);
			this.addSubCommand(todo.controller.PrepareViewCommand);			
			this.addSubCommand(todo.controller.PrepareControllerCommand);			
		}
	}
);
