import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ShowDetails(){
    const [showData,setShowData] = useState({});
    const params = useParams();

    const fetchShowData = () => {
        const id = params.id;
        const url = `https://api.tvmaze.com/shows/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => setShowData(data))
        .catch((error) => console.error('Error fetching show details:',error));
    };

    useEffect(() => {
        fetchShowData();
    }, []);

    return(
        <div className='row bg-black'>
          <div className='col-md-4 ratio ratio-4x3'
            style = {{backgroundImage:`url(${showData.image && showData.image.original})`,
                     backgroundSize:"cover", height:'auto'}}>
                     <div style={{ paddingTop: "50px", width: "720px", color: "white", paddingLeft: "130px" }}>
                    <h2>{showData.name}</h2>
                
                <h6>Audio Language:{showData.language}</h6>
                </div>
          </div>
        </div>
    )
}

export default ShowDetails;