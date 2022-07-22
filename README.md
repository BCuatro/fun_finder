# Fun Finder!

[Visit Live Site](https://funfinderapp.herokuapp.com/#/)

Fun Finder is an interactive MERN-stack web app that allows users to find places to go.
By narrowing categories, we utilized Google Places API to filter out based
on a place's 'type' property, ie. bar, cafe, tourist_attraction, etc. Then, after clicking 'Find me a place!',
the website randomly selects a place to go to. The random search result will then render the location's marker
on our colorful map (achieved with Google Maps API) as well as the location's name and address. 

![website structure](/frontend/src/fun-finder-page.png)

## Technologies:
HTML
Javascript
CSS
nodeJS
Express
React
Redux
Webpack
AWS S3 Storage
MongoDB

## Randomizing Functions

We were able to tap into the searchbar autocomplete functionality within Places API
in order to have search results that are filtered based on the types category. Then,
one search result is chosen with a Math.random() function and shown on page.

![code](/frontend/src/screenshot1.png)




