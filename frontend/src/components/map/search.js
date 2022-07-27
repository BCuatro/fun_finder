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
    },
    debounce: 300
  });

  const handleInput = e => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    setValue(randLetter);
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        panTo({ lat, lng });
      })
      .catch(error => {
        console.log("Error: ", error);
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

      <button
        onClick={handleInput}
        disabled={!ready}
        id="find-place-button"
      >Find Me A Place!</button>
      {status === "OK" ? renderSuggestions() : null}
    </div>
  );
} 