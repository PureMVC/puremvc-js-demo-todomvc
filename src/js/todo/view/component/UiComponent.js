/**
 * @class todo.view.component.UiComponent
 * 
 * An experimental thin wrapper around HTMLElements, facilitating
 * their use in an OOP approach loosely based on ActionScript3
 * UiComponents.
 * 
 * TODO consider renaming- possibly misleading to both JavaScript
 * and Flash users. 
 * 
 * TODO should not belong to the demo code. Should be a PureMVC JS
 * addon. Consider removing this as part of the TodoMVc app and use
 * a third party library component instead.
 */
puremvc.define
(
	{
		name: 'todo.view.component.UiComponent'
		
		/**
		 * 
		 * 
		 * @param {string|Object} domReference
		 * 	A html string, css selector or HTMLElement
		 * 
		 * @param {HTMLELement} [parentElement]
		 * 	An optional parent element which owns the DOM hierarchy
		 *  to which this UiComponent's htmlElement should belong. Only
		 *  used in cases where selectors are provided as the domReference
		 *  parameter
		 * @constructor
		 */
	,	constructor: function UiComponent (domReference, parentElement)
		{
			if (null == parentElement)
				this.parentElement= document;
				
			if (domReference)
				this.initDom(domReference);
		}
	}
	
,	{
		/**
		 * @protected
		 * @type {HTMLElement}
		 */
		parentElement: document
		
		/**
		 * The UiComponents top level HTMLElement. UiComponent htmlElements
		 * are decorated with a #codeBehind property which will reference
		 * the UiComponent instance.
		 * 
		 * @protected
		 * @type {HTMLElement}
		 */
	,	htmlElement: null
		
		/**
		 * Implementation of the W3C EventListener interface. Allows
		 * the UiComponent to be passed directly to HTMLElement#addEventListener
		 * methods without specifying a Function callback.
		 * 
		 * Subclasses should override this method when listening to other
		 * HTMLElements or UiComponents
		 * 
		 * @param {Event}
		 * @return {void}
		 */
	,	handleEvent: function (domEvent) { }
		
		/**
		 * Listen to DOM events dispatched via this UiComponents #htmlElement
		 * 
		 * @param {string} type
		 * @param {Function|Object} listener
		 * @param {boolean} [useCapture]
		 * @return {void}
		 */
	,	addEventListener: function (type, listener, useCapture)
		{
			// delegates to the UiComponent's htmlElement
			this.htmlElement.addEventListener(type, listener, useCapture);
		}
		
		/**
		 * Stop listening to DOM events dispatched via this UiComponents #htmlElement
		 * 
		 * @param {string} type
		 * @param {Function|Object} listener
		 * @return {void}
		 */
	,	removeEventListener: function (type, listener)
		{
			// delegates to the UiComponent's htmlElement
			this.htmlElement.removeEventListener(type, listener);
		}
		
		/**
		 * Dispatch a DOM event via this UiComponet
		 * 
		 * @param {Event} domEvent
		 * 	A DOM event.
		 * 
		 * @return {void}
		 */
	,	dispatchEvent: function (domEvent)
		{
			this.htmlElement.dispatchEvent(domEvent);
		}
		
		/**
		 * Create a DOM event for dispatch.
		 * 
		 * @protected
		 * @param {string} type
		 * 	The event type
		 * 
		 * @param {Object} [descriptor]
		 * 	An optional event descriptor. If supplied, its properties
		 * 	will be copied to the event
		 * 
		 * @return {Event}
		 * 	A synthetic DOM event
		 */
	,	createEvent: function (type, descriptor)
		{
			var newEvent= document.createEvent('Events')
			newEvent.initEvent(type);
			if (null == descriptor)
				return newEvent;
				
			for (var accessor in descriptor)
				newEvent[accessor]= descriptor[accessor];
				
			return newEvent;
		}
		
		/**
		 * @param 
		 * @return {HTMLElement|null}
		 */
	,	findChild: function (selector)
		{
			return this.htmlElement.querySelector(selector);
		}
		
		/**
		 * Find
		 * 
		 * @param {string} selector
		 * 	A valid css selector string as defined by the W3C
		 *  selector API
		 * @return {NodeList|null}
		 * @see {@link http://www.w3.org/TR/selectors-api/ W3C selectors api}
		 */
	,	findChildren: function (selector)
		{
			return this.htmlElement.querySelectorAll(selector);
		}
		
		/**
		 * Performs the same function as #findChild, except that in 
		 * cases where no children ere found to match the query, a 
		 * ReferenceError will be thrown.
		 * 
		 * @param {string} selector
		 * 	A valid css selector string
		 * 
		 * @return {HTMLElement}
		 * @throws {ReferenceError}
		 */
	,	child: function (selector)
		{
			var child= this.findChild(selector);
			if (child)
				return child;
				
			throw new ReferenceError('No child for selector- ' + selector);
		}
		
		/**
		 * Performs the same function as #findChildren, except that in
		 * cases were no children were found to match the query, a
		 * ReferenceError will be thrown.
		 * 
		 * @param {string}
		 * @return {NodeList}
		 */
	,	children: function (selector)
		{
			var children= this.findChildren(selector);
			if (children)
				return children;
				
			throw new ReferenceError('No children for selector- ' + selector);
		}
		
		/**
		 * @deprecated
		 * @return {HTMLElement}
		 */
	,	toElement: function ()
		{
			return this.htmlElement;
		}
		
		/**
		 * @return {void}
		 */
	,	release: function ()
		{
			for (var accessor in this)
			{
				if (this.hasOwnProperty(accessor))
				{
					delete this[accessor];
				}
			}
		}
		
		/**
		 * @protected
		 * @param {string|HTMLElement} domReference
		 * @return {void}
		 */
	,	initDom: function (domReference)
		{
			var htmlElement;
			if ('string' === typeof domReference)
			{
				if (-1 < domReference.indexOf('<'))
				{
					// treat the string provided as HTML markeup
					// and create the UiComponent's htmlElement
					// dynamically
					htmlElement= document.createElement('div');
					htmlElement.innerHTML= domReference;
					htmlElement= htmlElement.firstChild;					
				}
				else
				{
					// treat the supplied string as a css selector and
					// search for this UiComponent's htmlParent in its
					// parent
					htmlElement= this.parentElement.querySelector(domReference);
				}	
			}
			else
			{
				// assume the domReference is a HTMLElement
				// TODO cross platform approach 
				htmlElement= domReference;
			}

			if (null == htmlElement)
			{
				throw new Error('UiComponent#initDom- invalid domReference- ' + domReference);
			}
				
			// decorate the htmlElement with a reference to the UiComponent
			htmlElement.codeBehind= this;
			this.htmlElement= htmlElement;
		}
	}
);
