(function() {

    'use strict';

    angular
        .module('peopleApp')
        .controller('FormController', FormController);

    function FormController(state) {

        var vm = this;
        vm.register = {};

    // An array of our form fields with configuration
    // and options set. We make reference to this in
    // the 'fields' attribute on the  element
    vm.registerFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true
            }
        },
        {
        key: 'under25',
        type: 'checkbox',
        templateOptions: {
            label: 'Are you under 25?',
        },
        // Hide this field if we don't have
        // any valid input in the email field
        hideExpression: '!model.email'
    },
    {
        key: 'state',
        type: 'select',
        templateOptions: {
            label: 'State/City',
            // Call our province service to get a list
            // of provinces and territories
            options: state.getStates()
        },
        hideExpression: '!model.email'
    },
    {
        key: 'city',
        type: 'input',
        templateOptions: {
            label: 'City',
            placeholder: 'Enter your City '
        },
        hideExpression: '!model.under25 || !model.state',
    },
    {
        key: 'message',
        type: 'textarea',
        templateOptions: {
            label: 'Message',
            placeholder: 'Type your message '
        },
        hideExpression: '!model.under25 || !model.state',
    }
    ];

}



})();
