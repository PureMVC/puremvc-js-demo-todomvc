puremvc.define
(
	{
		name: 'todo.view.component.TodoItem'
	,	parent: todo.view.component.UiComponent
	,	constructor: function TodoItem (todoVo)
		{
			this.initDom(this.constructor.HTML);

			this.label= this.child('label');
			this.textField= this.child('input[type=text]');
			this.removeButton= this.child('a.destroy');
			this.checkBox= this.child('input[type=checkbox].toggle');
			
			this.removeButton.addEventListener('click', this);
			this.checkBox.addEventListener('change', this);
			this.textField.addEventListener('keyup', this);
			
			this.setLabelText(todoVo.text);
			this.setTodoText(todoVo.text);
		}
	}

,	{
		setLabelText: function (value)
		{
			this.label.innerHTML= value;
		}
		
	,	setTodoText: function (value)
		{
			this.textField.value= value;
		}
		
	,	getTodoText: function ()
		{
			return this.textField.value;
		}
		
	,	setSelected: function (checked)
		{
			this.checkBox.checked= !!checked;
			this.handleEvent({type: 'change'})
		}
		
	,	isSelected: function ()
		{
			return this.checkBox.checked;
		}
		
	,	handleEvent: function (domEvent)
		{
			var eventType
			,	todoEvent
			,	eventData
						
			switch (domEvent.type)
			{
				case 'click':
					// the TodoItem's remove button has been clicked
					eventType= this.constructor.REMOVE
					break;
					
				case 'change':
					// the TodoItem has been checked or unchecked
					if (this.checkBox.checked)
						eventType= this.constructor.SELECTED
					else
						eventType= this.constructor.DESELECTED
					break;
					
				case 'keyup' :
					// the TodoItem has been edited
					if (13 !== domEvent.keyCode)
						return;
						
					eventType= this.constructor.EDITED
					eventData= {text: this.getTodoText()};
			}
			
			todoEvent= this.createEvent(eventType, eventData);
			this.dispatchEvent(todoEvent);
		}
	}
	
,	{
		/**
		 * The markup used to define an individual TodoItem.
		 * The toggle checkbox is used to select the TodoItem
		 * The destroy button should delete the TodoItem.
		 * If the TodoItem has been completed, the li should 
		 * have a className of done.
		 * Double clicking a TodoItem should make the
		 * text editable. Pressing return after editing should
		 * commit the TodoItem.
		 * The label text and the input text should be
		 * synchonized once an edit has been committed or
		 * the item has been restored from localStorage
		 * 
		 * @static
		 * @private
		 * @type {string}
		 */
		HTML: '<li>'
			+ 	'<div class="view">'
			+     '<input class="toggle" type="checkbox">'
			+     '<label><label>'
			+     '<a class="destroy"><a>'
			+ 	'</div>'
			+ 	'<input class="edit" type="text">'
			+ '</li>'
		
		/**
		 * The TodoItems's destroy button has been clicked.
		 * @static
		 * @type {string}
		 */	
	,	REMOVE: 'todoItemRemove'
	
		/**
		 * The TodoItem's content has been edited
		 * @static
		 * @type {string}
		 */
	,	EDITED: 'todoItemEdited'
	
		/**
		 * The TodoItem's checkbox has been ticked
		 * 
		 * @static
		 * @type {string}
		 */
	,	SELECTED: 'todoItemSelected'
	
		/**
		 * The TodoItem's checkbox has been unticked
		 * 
		 * @static
		 * @type {string}
		 */
	,	DESELECTED: 'todoItemDeselected'
	}
);

/*
kevin mc daid- boi
0766243114
*/