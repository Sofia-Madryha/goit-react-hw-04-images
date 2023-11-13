import '../SearchBar/SearchBar.css';

export const SearchBar = ({ onSubmit }) => {
  return (
    <div className="searchbar">
      <form className="search-form" onSubmit={onSubmit}>
        <button className="search-form-button"></button>
        <input
          className="search-form-input"
          type="text"
          name="query"
          placeholder="Search"
        />
      </form>
    </div>
  );
};
