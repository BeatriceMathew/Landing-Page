import React, { useState } from 'react'; 
import Styles from './Search.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([
    { id: 1, name: 'Designer_1', profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300' },
    { id: 2, name: 'Designer_2', profilePic: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg?w=300' },
  ]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.sub}>
        <Sidebar />
      </div>
      <div className={Styles.searchContainer}>
        <input
          type="text"
          className={Styles.searchBar}
          placeholder="Search designers..."
          value={query}
          onChange={handleSearch}
        />
        <div className={Styles.resultsGrid}>
          {results.map((designer) => (
            <div key={designer.id} className={Styles.userCard}>
              <img src={designer.profilePic} alt={designer.name} className={Styles.profilePic} />
              <span className={Styles.username}>{designer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
