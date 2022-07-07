import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

export default function Search({ panTo, type }) {  

  const chosenType = type

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
    setValue(e.target.value);
    console.log(chosenType)
  };

  const handleSelect = ({ description }, autoSelect = false) => () => {
    if (!autoSelect) {
      setValue(description, false);
      clearSuggestions();
    }

    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        panTo({ lat, lng });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
      <button onClick={renderSuggestions}></button>
    </div>
  );
}














// so here we will have a button to Search, it will replace the functionality of 
// the search bar's results


{/* <button onClick={handleIntroverts}>Introvert</button>
<button onClick={handleExtroverts}>Extrovert</button> */}

// const handleIntroverts = () => {
//   // Update the keyword of the input element
//   let e;
//   let intro = ['cafe', 'bowling', 'museum', 'restaurant'];
//   e = intro[Math.floor(Math.random() * intro.length)]
//   setValue(e);
// };

// const handleExtroverts = () => {
//   let e;
//   let intro = ['amusement park', 'public park', 'zoo', 'bar'];
//   e = intro[Math.floor(Math.random() * intro.length)]
//   setValue(e);
// };

 // if (data.length > 0) {
    //   handleSelect(data[0], true)()
    // }
