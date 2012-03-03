puremvc.define
(
	{
		name: 'todo.view.component.TodoCreator'
	,	parent: todo.view.component.UiComponent
	
	,	constructor: function TodoCreator (domReference)
		{
			this.initDom(domReference);
			this.textField= this.child('input[type=text]');
			this.addEventListener('keyup', this);
		}
	}
	
,	{
	
		getText: function ()
		{
			return this.textField.value;
		}
		
	,	clearText: function ()
		{
			this.textField.value= '';
		}
	
	,	handleEvent: function (domEvent)
		{
			if (13 !== domEvent.keyCode)
				return;
			
			var todoText= this.getText()
			,	eventType= this.constructor.TODO_CREATED
			,	eventData= {text: todoText}
			,	createdEvent= this.createEvent(eventType, eventData);	
			
			this.clearText();
			this.dispatchEvent(createdEvent);
		}
	}
	
,	{
		TODO_CREATED: 'todoCreated'
	}
);
