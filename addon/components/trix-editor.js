import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TrixEditorComponent extends Component
{

    get autofocus() { return this.args.autofocus ?? null; }

    @action
    trixEventHandler()
    {

    }
}
