sap.ui.define(
    [
        'sap/m/Text',
        'sap/m/Input'
    ], 
    
    (Text, Input) => {
        "use strict";

        new Text({
            text:"Eduardo Couto"
        }).placeAt('ondeEuQuiser');
        //Step 05
        new Text({
            text:"Eduardo Couto"
        }).placeAt('Nova div step5');
}); 