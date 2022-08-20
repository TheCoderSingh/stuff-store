import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([]);
  }, [searchTerm]);

  const handleKeyUp = async (e) => {
    // Check if enter key is pressed
    if (e.which === 13) {
      await axios
        .get("https://asos2.p.rapidapi.com/v2/auto-complete", {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": "asos2.p.rapidapi.com",
          },
          params: {
            q: searchTerm,
            store: "US",
            country: "CA",
            currency: "CAD",
            sizeSchema: "CA",
            lang: "en-CA",
          },
        })
        .then((response) => {
          response.data.suggestionGroups.map((group) =>
            group.suggestions.map((suggestion) =>
              setSuggestions((prevSuggestions) => [
                ...prevSuggestions,
                suggestion.searchTerm,
              ])
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header">
      <Link href="/">Stuff Store</Link>
      <input
        placeholder="Search on Stuff Store"
        onKeyUp={handleKeyUp}
        onChange={handleChange}
      />
      <FaShoppingCart size={30} />
    </div>
  );
};

export default Header;
