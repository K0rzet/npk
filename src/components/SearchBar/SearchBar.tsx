import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { useSearch } from "./useSearch";
import { HashLink as Link } from 'react-router-hash-link'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { results, loading } = useSearch(query);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setDropdownOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setDropdownOpen(true);
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={handleChange}
        onClick={handleSearchClick}
        className={styles.searchInput}
      />
      {loading && <div className={styles.loader}>Loading...</div>}
      {isDropdownOpen && (
        <div className={styles.resultsDropdown}>
          {query && (
            <>
              <div className={styles.resultsSection}>
                <h4>Комплексное оснащение</h4>
                <ul className={styles.resultsList}>
                  {results.comprehensiveEquipment.length > 0 ? (
                    results.comprehensiveEquipment.map((item: any) => (
                      <li key={item.id} className={styles.resultItem}>
                        <Link
                          to={`/complex-equipments/${item.id}`}
                          className={styles.resultLink}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className={styles.resultItem}>Нет результатов</li>
                  )}
                </ul>
              </div>
              <div className={styles.resultsSection}>
                <h4>Продукция</h4>
                <ul className={styles.resultsList}>
                  {results.products.length > 0 ? (
                    results.products.map((item: any) => (
                      <li key={item.id} className={styles.resultItem}>
                        <Link
                          to={`/products/${item.id}`}
                          className={styles.resultLink}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className={styles.resultItem}>Нет результатов</li>
                  )}
                </ul>
              </div>
            </>
          )}
          {query === "" && !loading && (
            <div className={styles.placeholderMessage}>
              Введите поисковой запрос
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
