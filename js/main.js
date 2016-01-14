$(document).ready(function() {

	Kii.initializeWithSite("b554c080", "2adae47b45c0e9f37987e80624b879d6", KiiSite.US);

	// Prepare the target bucket to be queried
var bucket = Kii.bucketWithName("MeetingRoom");

// Build "all" query
var all_query = KiiQuery.queryWithClause();

// Define the callbacks
var queryCallbacks = {
  success: function(queryPerformed, resultSet, nextQuery) {
    // do something with the results
    console.log("Success");
    for(var i=0; i<resultSet.length; i++) {
      // do something with the object resultSet[i];
      console.log(resultSet);
    }
    if(nextQuery != null) {
      // There are more results (pages).
      // Execute the next query to get more results.
      bucket.executeQuery(nextQuery, queryCallbacks);

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