import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);
    const [chunkedShows, setChunkedShow] = useState([]);

    // const location = useLocation();
    // const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const fetchUseData = (searchString) => {
  
        fetch('https://api.tvmaze.com/search/shows?q='+ searchString)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setResult(data);
    
            let chunkSize = 6;
            let chunks = [];
    
            while (result.length > 0) {
                chunks.push(result.splice(0, chunkSize));
            }
    
            setChunkedShow(chunks);
            
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

          
    };
    // useEffect(() => {
    //     // debugger
    //     const queryParameters = new URLSearchParams(window.location.search)
    //     const searchString = queryParameters.get('p');
    //     if(searchString){
    //       setSearchTerm(searchString);
    //       fetchUseData(searchString);
    //     }
    //     // debugger
    // }, [location.searchTerm]);


    const handleSearch = () => {
        // navigate('?p=${searchTerm}');
        fetchUseData(searchTerm);
    }
    return (
        <div className='row'>
          <div className='col-1 sidenev'>
    
          </div>
          <div className='col-11'>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            {chunkedShows.map((shows) => (
              <div className='row'>
                {shows.map((post) => (
                  <div className='col-md-2' key={post.show.id}>
                    <Link to={`/shows/${post.show.id}`}>
                      <img src={post.show.image && post.show.image.medium}/>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    );  
}

export default Search;