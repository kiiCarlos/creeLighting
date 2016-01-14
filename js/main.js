$(document).ready(function() {

	Kii.initializeWithSite("b554c080", "2adae47b45c0e9f37987e80624b879d6", KiiSite.US);

	// Prepare the target bucket to be queried
  var bucket = Kii.bucketWithName("MeetingRoom");

  // Build "all" query
  var all_query = KiiQuery.queryWithClause();

  // Define the callbacks
  var queryCallbacks = {
    success: function(queryPerformed, resultSet, nextQuery) {

      if(resultSet.length == 0) {
        // document.getElementId('room-container')
        $("#room-container").html("No rooms found!");
      } else {
        $("#room-container").html("");
      }


      for(var i=0; i<resultSet.length; i++) {
        console.log(resultSet[i]);

        var row = $("<div />").addClass("row");
        var col = $("<div />").addClass("col-lg-12").addClass("room-selector-row");

        $(col).text(resultSet[i].get("roomname"));

        $(row).append(col);
        $("#room-container").append(row);



      }

    },
    failure: function(queryPerformed, anErrorString) {
      // do something with the error response
      console.log("Failure" + anErrorString);
    }
  }

  // Execute the query
  bucket.executeQuery(all_query, queryCallbacks);
  // Alternatively, you can also do:
  // bucket.executeQuery(null, queryCallbacks);

});