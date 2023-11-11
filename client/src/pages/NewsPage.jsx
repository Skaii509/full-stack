import React, { useState, useEffect } from 'react';
import { Card, Subtitle, Metric, Text, Divider } from "@tremor/react";
import '../styles/pagesStyles/NewsPage.css'

const url = 'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45f86a0815msh3766964820ff5dfp12196bjsn2f24d86f9ed0',
		'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
	}
};

function NewsPage() {
    const [loading, setLoading] = useState()
    const [news, setNews] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url, options);
          const result = await response.json();
          setLoading(result);
        };
        fetchData();
      }, []);
    
    useEffect(() => {
      if (loading) {
        try {
          const newArray = loading.data.mostPopularEntries.assets;
          setNews(newArray)
        } catch (error) {
          console.error("Error de map", error);
        }
      }
    }, [loading]);

    return ( 
        <>
          {news.map((n, idx) => {
            const url = `${n.url}`
            return (
              <>
                <a className='newsCard' key={idx} href={url} target="_blank">
                  <div className='imgContainer'>
                    <img src={n.promoImage.url}/>
                  </div>
                  <div className='infoContainer'>

                    <div className='infoHeader'>
                      <p>{n.headline}</p>
                    </div>

                    <div className='infoBody'>
                      <p>{n.description}</p>
                    </div>

                    <div className='infoDetails'>
                      <p>{n.authorFormatted}</p>
                      <p>{n.shortDateFirstPublished}</p>
                    </div>

                  </div>
                </a>
              </>
            )
          })}
        </>
     );
}

export default NewsPage;