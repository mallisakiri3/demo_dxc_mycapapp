sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'malli/po/purchaseorderapp/test/integration/FirstJourney',
		'malli/po/purchaseorderapp/test/integration/pages/POsList',
		'malli/po/purchaseorderapp/test/integration/pages/POsObjectPage',
		'malli/po/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('malli/po/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);