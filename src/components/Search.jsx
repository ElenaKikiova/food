import useDebounce from "../hooks/useDebounce";

const Search = ({ onSearch }) => {

    const handleChange = useDebounce((event) => onSearch(event.target.value), 500);

    return (
        <input onChange={(e) => handleChange(e)} placeholder="Start typing..." />
    )
}

export default Search