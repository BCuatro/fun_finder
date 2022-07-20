import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

export default function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300
  });

  const handleInput = e => {
    // Update the keyword of the input element
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    setValue(randLetter);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        panTo({ lat, lng });
      })
      .catch(error => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () => {
    let suggestion = data[0]
    const {
      place_id,
      structured_formatting: { main_text, secondary_text }
    } = suggestion;

    handleSelect(suggestion)()

      // return (
      // <li key={place_id} onClick={handleSelect(suggestion)}>
      //   <strong>{main_text}</strong> <small>{secondary_text}</small>
      // </li>
      // <button key={place_id} onClick={handleSelect(suggestion)}></button>
      // );
      ;
  }

  return (
    <div className="search-container">
      {/* <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      /> */}
      <button
        onClick={handleInput}
        disabled={!ready}
        // className="category-button"
        id="find-place-button"
      >Find Me A Place!</button>
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" ? renderSuggestions() : null}
    </div>
  );
} 