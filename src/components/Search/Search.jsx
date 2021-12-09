import "./Search.css"

const Search = ({ search, setSearch }) => {
  console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return <input className="Search" type="text" onChange={handleChange} value={search} placeholder="Search for a Character" />;
};

export default Search;
