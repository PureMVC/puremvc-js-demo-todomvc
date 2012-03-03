puremvc.define
(
	{
		name: 'todo.ApplicationFacade'
	,	parent: puremvc.Facade
	}
	
,	{
		
		setup: function (app)
		{
			this.registerCommand(todo.AppConstants.SETUP, todo.controller.SetupCommand);
			this.sendNotification(todo.AppConstants.SETUP, app);
		}
	}
	
,	{
		/**
		 * @static
		 * @param {string} [multitonKey]
		 * @return todo.ApplicationFacade
		 */
		getInstance: function (multitonKey)
		{
			var key= multitonKey || 'ApplicationFacade'
			,	instanceMap= puremvc.Facade.instanceMap
			,	instance= instanceMap[multitonKey]
			
			if (instance)
				return instance;
				
			return instanceMap[multitonKey]= new todo.ApplicationFacade(multitonKey);
		}
	}
)
