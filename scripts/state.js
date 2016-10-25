(function(){

    'use strict';

    angular
        .module('peopleApp')
        .factory('state', state);

        function state() {
            function getStates() {
                return [
                    {
                        "name": "Florida",
                        "value":"florida"
                    },
                    {
                        "name":"California",
                        "value":"california"
                    },
                    {
                        "name":"New York",
                        "value":"new york"
                    }

                ];
            }

            return {
                getStates: getStates
            }
        }

})();
