define("library/tdrag", [ "tdrag", "jquery" ], function(require) {
  jQuery(function(){
    $(".app-box").Tdrag({
        scope:".app-list",
        // pos:true,
        dragChange:true,
        changeMode:"sort"
    });
  });
})