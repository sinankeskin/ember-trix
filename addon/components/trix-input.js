import Component from '@glimmer/component';
import { action } from '@ember/object';
import { camelize } from '@ember/string';
import { typeOf } from '@ember/utils';

export default class TrixInputComponent extends Component
{

	get value() { return this.args.value ?? ''; }
	/**
	 * handle all events from trix which are registered in the modifier
	 * @param event
	 */
	@action trixEventHandler(event)
	{
		let eName = camelize(event.type);
		// pass event up
		if (typeOf(this.args[eName]) === 'function')
		{
			this.args[eName](event);
		}
		// trigger convenient onChange action
		if (eName === 'trixChange' && typeOf(this.args.onChange) === 'function')
		{
			this.args.onChange(event.target.innerHTML);
		}

	}
}
