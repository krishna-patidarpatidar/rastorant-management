// import { useState, useEffect } from "react";

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }
// export default useDebounce;
// import { useState, useEffect } from "react";

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState();

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }
// // export default useDebounce;
// import React from 'react'
// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const debouncedQuery = useDebounce(query, 1000);

//   useEffect(() => {
//     if (debouncedQuery) {
//       console.log("Searching for:", debouncedQuery);
//     }
//   }, [debouncedQuery]);

//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// };
// export default SearchBar;
