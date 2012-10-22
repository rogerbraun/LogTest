var refreshLog = function() {
  var callback = function(data) {
    $('#updating_log').text(data);
    setTimeout(refreshLog, 1000);
  };
  $.ajax({ url: '/logs', success: callback, dataType: 'json'})
}

$(function() {
  if($('#updating_log').size != 0) {
    refreshLog();
  }
})
