# Fun Finder!

[Visit Live Site](https://funfinderapp.herokuapp.com/#/)

Fun Finder is an interactive MERN-stack web app that allows users to find places to go.
We utilized Google Places API to filter out based
on a place's 'type' property, ie. bar, cafe, tourist_attraction, etc. Then, after clicking 'Find me a place!',
the website randomly selects a place to go to. The random search result will then render the location's marker
on our colorful map (achieved with Google Maps API) as well as the location's name and address. 

![website structure](/frontend/src/fun-finder-page.gif)

## Technologies:
- HTML
- Javascript
- CSS
- Google Maps API
- Google Places API
- nodeJS
- Express
- React
- Redux
- Webpack
- AWS S3 Storage
- MongoDB

## Randomizing Functions

### Places API Searchbar Autocomplete

I was able to tap into and manipulate the searchbar functionality within Places API. 
By inserting a random letter from the alphabet in our handleInput function, I utilized suggestions from the autocomplete functionality
and selected one suggestion. Each suggestion houses a collection of results. Then, I used the geocode location to also retrieve the respective positions
on the map, which gets rendered as a marker on our map.

![code](/frontend/src/fun-finder-search.png)

### Places API types

Each button that a user selects changes the 'types' array. Each 'types' array holds one or more types, which is used by Places API
when filtering the destinations to show. For example, the 'cafe' button holds only one type while the 'extraverted' button holds a collection
of types and one of those is chosen at random, increasing the randomness of our app. One potential problem with this is that the information on Google Places
is not always accurate, for example a doctors office may be included in bowling places. Since this is due to incorrect information on google's library, 
there is little we can do with changing that aspect. So I decided a solid workaround is to use only the 'types' that most frequently retreive the most
accurate results based on the 'types' we pass into Google Places.

![code](/frontend/src/fun-finder-extraverted.png)
![code](/frontend/src/fun-finder-cafe.png)

### Destination Selector

After the results are retreived, I used another Math.random() function to pluck out just one result and render a marker onto the map.
Since we have the result, we can retreive multiple details about the result, in this case being the name and address of the chosen destination.
Every time a new search result is rendered, we search the document for the previous location name and address, remove it, and create
the new search's name and address in it's place.

![code](/frontend/src/fun-finder-callback.png)

## User Functions

### User Authentication 

Users will have the ability to login with their email and password, or sign up to the application by inputting their email, password and some basic
information.  Both the sign up and login forms will prompt errors if the user's information is invalid.  

![website structure](https://github.com/BCuatro/fun_finder/blob/main/assets/session-demo.gif)

### User Profile

After successful sign up or login, users will still have access to the randomizer, but will gain access to their own profile page, which they can 
customize by uploading a profile picture, modifying personal information and adding 3 additional pictures that best describes them.  Upon creation of 
the profile, all images will be default images until the user adds their photos.  Users will also have the ability to review and post about their 
hangout activities chosen by the randomizer.  Users could seamlessly navigate through their profile by clicking on the profile tabs to view specific
content, and the can hover over the "Edit Profile" dropdown to update their information.  The profile functionalities were developed using RESTful 
routes that gives the user CRUD capabilities, allows the user's information to be stored or retrieved from the database, and to upload and retrieve 
images from AWS.  Image validations were implemented to prevent user from uploading files that are not images.  
 
![code](/assets/profile_example.png)


## Core Features

- ### User Authentication (users are able to login, logout, and register)
- ### User Profile Page (only users who are logged in can see their own page, which includes information about users and their picture uploads)
- ### Google Maps API
- ### Place Randomization (with a click of a button, users leave the 'finding' aspect to our app, which uses Google Places API's properties such as autocomplete and 'types')
- ### Reviews (logged in users can post about their experiences at the various places Fun Finder choses for them)

## Contributers

- [Alisher Podavonov](https://www.linkedin.com/in/alisher-podavonov-80b85a23b/)
- [Eric Balfour](www.linkedin.com/in/eric-balfour)
- [David-Allen Asencio](https://www.linkedin.com/in/david-allen-asencio-9107b0122/)


