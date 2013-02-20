// The log mechanism
var log = (function(levl, useAlert) {
  var options = {error: 0, warn: 1, info: 2, debug:4, mute: -1};
  var level = options[levl] || 2; // Defaults to info

  // Use console if existent, otherwise replace it with alert if useAlert = true
  var console = window.console || {log: function(msg) {if(!!useAlert) alert(msg)}};

  return {
    error: function(msg) {
      if(level >= 0) console.log('error: ' + msg);
    },
    warn: function(msg) {
      if(level >= 1) console.log('warn: ' + msg);
    },
    info: function(msg) {
      if(level >= 2) console.log('info: ' + msg);
    },
    debug: function(msg) {
      if(level >= 3) console.log('debug: ' + msg);
    }
  }
})();
