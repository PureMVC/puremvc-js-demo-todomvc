puremvc.define
(
	{
		name: 'todo.view.mediator.ComponentMediator'
	,	parent: puremvc.Mediator
	,	constructor: function (component, name)
		{
			puremvc.Mediator.call(this, name, component);
		}
	}
)
