import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function ShowDetails(){
    const params = useParams();
    const id = params.id;
    const [showData,setShowData] = useState({});
    const [episodes, setEpisodes] = useState([])
    
    

    const fetchShowData = () => {
        const url = `https://api.tvmaze.com/shows/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => setShowData(data))
        .catch((error) => console.error('Error fetching show details:',error));
    };
    const fetchEpisodes = () => {
        const url = `https://api.tvmaze.com/shows/${id}/episodes`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setEpisodes(data));
      };

    useEffect(() => {
        fetchShowData();
        fetchEpisodes();
    }, []);
    
    return(
        <div className='row bg-black'>
          <div className='col-md-4 ratio ratio-4x3'
            style = {{backgroundImage:`url(${showData.image && showData.image.original})`,
                     backgroundSize:"cover", height:'auto'}}>
                     <div style={{ paddingTop: "50px", width: "720px", color: "white", paddingLeft: "130px" }}>
                    <h2>{showData.name}</h2>
                
                <h6>Audio Language:{showData.language}</h6>
                <h6> Subtitles: {showData.language} </h6>

    <div >
      <Dropdown>
      <Dropdown.Toggle >
        Season1
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Season1</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Season2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Season3</Dropdown.Item>      
      </Dropdown.Menu> 
    </Dropdown>
        
      </div>
       
      
      { episodes.length && (
        <div  key={episodes[0].season}>
           <Link to={`/shows/${id}/seasons` }> 
          </Link>
          
        </div>
      )}
      
      </div>
          </div>
                
          </div>
        
    )
}

export default ShowDetails;