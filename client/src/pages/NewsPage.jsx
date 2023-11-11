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
          console.log(news)
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
                <div className='newsCard'>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Card key={idx} className='newsContainer'>
                      <div>
                        <Text className='title'>{n.headline}</Text>
                        <Text className='description'>
                          {n.description}
                        </Text>
                      </div>
                      <img src={n.promoImage.url} alt="" width="400px"/>
                    </Card>
                  </a>
                </div>
              </>
            )
          })}
        </>
     );
}

export default NewsPage;