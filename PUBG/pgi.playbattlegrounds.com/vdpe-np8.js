(function (engine) {
    if (engine.isAttached && !engine.forceEnableMocking) {
        return;
    }
    
    
    var executeMock = function (name, isCppCall, isEvent, argsInput) {
        var functionArgs = "'" + name + "'";
        if (argsInput.value.length !== 0) {
            functionArgs += ", " + argsInput.value;
        }
        var command = (isCppCall && !isEvent) ? "call" : "trigger";
        try {
            eval("engine." + command + "(" + functionArgs + ")");
        }
        catch (e) {
            var text = "An error occured while executing mock function: ";
            console.warn(text, e);
        };
    };

    var systemEvents = [
        "_coherentCreateImageData",
        "_coherentUpdatedImageData",
        '_Result',
        '_Register',
        '_Unregister',
        '_OnReady',
        '_OnError',
        'replayEventsRecord'
    ];


    engine.mock('OpenExternalBrowser', function(u) {
		window.open(u);
    }, true);
    
    engine.mock('CloseWebPopup', function(u) {
		self.close();
	}, true);




})(engine || {});
