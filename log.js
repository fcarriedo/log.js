var log = (function(levl, useAlert) {
  var level = 2; // Defaults to 'info'
  switch(levl) {
    case 'error':
      level = 0;
      break;
    case 'warn':
      level = 1;
      break;
    case 'info':
      level = 2;
      break;
    case 'debug':
      level = 3;
      break;
    case 'mute':
      level = -1;
      break;
  }

  var useAlert = !!useAlert;
  var console = window.console || {log: function(msg) {if(useAlert) alert(msg)}};

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
})('debug');
