import { modifier } from 'ember-modifier';

export default modifier((element, [handler]/*, hash*/) => {
	// register all trix events
	element.addEventListener('trix-attachment-add', handler);
	element.addEventListener('trix-attachment-remove', handler);
	element.addEventListener('trix-blur', handler);
	element.addEventListener('trix-focus', handler);
	element.addEventListener('trix-change', handler);
	element.addEventListener('trix-file-accept', handler);
	element.addEventListener('trix-initialize', handler);
	element.addEventListener('trix-before-initialize', handler);
	element.addEventListener('trix-selection-change', handler);

	return () => {
		// unregister all events
		element.removeEventListener('trix-attachment-add', handler);
		element.removeEventListener('trix-attachment-remove', handler);
		element.removeEventListener('trix-blur', handler);
		element.removeEventListener('trix-focus', handler);
		element.removeEventListener('trix-change', handler);
		element.removeEventListener('trix-file-accept', handler);
		element.removeEventListener('trix-initialize', handler);
		element.removeEventListener('trix-before-initialize', handler);
		element.removeEventListener('trix-selection-change', handler);
	}
});
