import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const searched= setTimeout(()=>{
        setSearched(
          data.filter((user) => {
            return Object.values(user)
              .join("")
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        );
      },1000)
      return ()=> clearTimeout(searched)
    } else {
      setData(data);
    }
  }, [searchQuery, data]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Input"
        onChange={(event) => setSearch(event.target.value)}
        className="Search"
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? searched.map((search) => {
              return (
                <div className="grid-child" key={search.id}>
                  <h2>{search.name}</h2>
                  <p>{search.username}</p>
                </div>
              );
            })
          : data.map((data) => (
              <div className="grid-child" key={data.id}>
                <h1>{data.name}</h1>
                <p>{data.username}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchFilter;
