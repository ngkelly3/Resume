var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

/*Bootstrap navbar helper.js code*/
var HTMLnavbarStart = '<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#"></a></div><div class="collapse navbar-collapse" id="myNavbar"><ul id="navbarLink" class="nav navbar-nav navbar-right"></ul></div></div></nav>';
var HTMLnavbarBrand = '<span><img class="logo" src=%image% alt="website logo"></span>%data%';
var HTMLnavbarLinkActive = '<li class="active"><a href="#">%data%</a></li>';
var HTMLnavbarLink = '<li><a href="#">%data%</a></li>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile&nbsp;</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email&nbsp;</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter&nbsp;</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github&nbsp;</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog&nbsp;</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location&nbsp;</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive center-block">';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p><hr>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul class="flex-box"></ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h4>%data%';
var HTMLworkTitle = ' - %data%</h4>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h4>%data%</h4>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="center-block img-responsive" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<h4>%data%';
var HTMLschoolDegree = ' - %data%</h4>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<h4>%data%';
var HTMLonlineSchool = ' - %data%</h4>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<p><br><a href="#">%data%</a></p>';

/*Modal implementation - HTML structure side*/
var HTMLmodalworkExperienceStart = '<div class="col-md-4 col-sm-6" id="workExperienceBtn"></div>';
var HTMLmodalprojectStart = '<div class="col-md-4 col-sm-6" id="projectsBtn"></div>';
var HTMLmodaleducationStart = '<div class="col-md-4 col-sm-6" id="educationBtn"></div>';
var HTMLmodalImage = '<img src=%data% alt="profile-item" class="img-responsive center-block">';
var HTMLmodalTitle = '<h4>%data%</h4>';

/*Modal implementation - HTML markup side*/
var HTMLmodalMarkupStart1 = '<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1"><div class="modal-dialog" role="document"><div class="modal-content" id="mymodal-content1"><div class="modal-header" id="myModalHeader1"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div></div></div>';
var HTMLmodalMarkupStart2 = '<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2"><div class="modal-dialog" role="document"><div class="modal-content" id="mymodal-content2"><div class="modal-header" id = "myModalHeader2"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div></div></div>';
var HTMLmodalMarkupStart3 = '<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3"><div class="modal-dialog" role="document"><div class="modal-content" id="mymodal-content3"><div class="modal-header" id="myModalHeader3"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div></div></div>';

//append the line below to class "myModalHeader1"
var HTMLmodalMarkupTitle = '<h3 class="modal-title" id=%id%>%data%</h3>';

//append the line below to class "mymodal-content"
var HTMLmodalMarkupBody = '<div id=%data% class="modal-body"></div>';
var HTMLmodalMarkupFooter = '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';

//internationalize code
var HTMLaddHr = '<div class="col-md-12"><hr></div>';
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*International Name*/
function inName(name) {
    name = name.trim();
    var nameArray = name.split(" ");
    return nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();
}

$(document).ready(function() {
    $('button').click(function() {
        var iName = inName(bio.name) || function() {};
        $('#name').html(iName);
    });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // close infoWindow with click on map
        google.maps.event.addListener(map, 'click', function() {
            infoWindow.close();
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});