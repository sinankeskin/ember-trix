import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller
{
	@action
	onTrixChange(value)
	{
		console.log(value);
	}
	@action
	onTrixBlur(e)
	{
		console.log('TRIX BLUR!');
		console.log(e);
	}
}
