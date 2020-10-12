ember-trix
==============================================================================

Ember Trix wraps the [Trix Editor](https://github.com/basecamp/trix) in a 
Glimmer Component for use in an Ember Octane Project.

This Addon is a rewrite of [ember-trix-editor](https://github.com/lynnetye/ember-trix-editor)
featuring Ember Octane style Glimmer Components and modifiers. 
It does **not** rely on jQuery.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-trix
```


Addon Configuration
------------------------------------------------------------------------------
You can optionally just import `trix-core` with the following setting:

```javascript
/* ember-cli-build.js */
let app = new EmberApp(defaults, {

    'ember-trix': {
        coreOnly: true
    }

});
```

Usage
------------------------------------------------------------------------------

The only mandatory argument is the ID and is supposed to be unique. The `onChange` argument is a convenient way to receive the current state. All attributes like `class` or `placeholder` 
are optional and passed down via `...attributes`. Feel free to add other attributes like `autofocus={{true}}` etc. onto it.

```html
<TrixInput
    @id="myId"
    @value="My <em>initial</em> Content"
    @onChange={{this.onTrixUpdate}}
    class="my-class my-other-class"
/>
```

```javascript
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyContainerComponent extends Component 
{
    @action
    onTrixUpdate(formatedText) {
        console.log(formatedText);
    }
}
```

Optionally you can listen to `trix-events` by adding them as arguments:

```html
<TrixInput
    @id="myId"
    @trixFocus={{this.onFocus}}
    @trixBlur={{this.onFocusOut}}
    @trixAttachmentAdd={{this.selectAttachment}}
    placeholder="Optional string shown when value is empty"
/>
```
The the following Events are available:

* `trix-attachment-add`
* `trix-attachment-remove`
* `trix-blur`
* `trix-change`
* `trix-file-accept`
* `trix-focus`
* `trix-initialize`
* `trix-selection-change`

All of them will pass up a JavaScript `event` from which the editor property can be extracted.

There is also a hidden input field available, holding the formatted text from the Trix editor.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
