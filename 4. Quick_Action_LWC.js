import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class QuickEditFormExample extends LightningElement {
    @api recordId;

    handleClose() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
    handleSuccess(e) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Record updated!',
                variant: 'success'
            })
        );
    }
}
