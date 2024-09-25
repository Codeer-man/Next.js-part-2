"use client"


import { useEffect, useState } from "react"

export default function News() {
  const [news, Setnews] = useState([]);
  const [articleNum, SetarticleNum] = useState(3);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => {
        Setnews(data.articles)
      })
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4 ">Whats happening</h4>
      {news.slice(0, articleNum).map((article: any) => (
        <div key={article.url}>
          <a href={article.url} target="blank">

            <div className="flex items-center justify-between px-4 py-4 space-x-1 hover:bg-gray-200 transition-all duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold ">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
              </div>
              <img src={article.urlToImage}
                alt="image not found"
                width={70}
                height={30}
                className="rounded-xl"
              />
            </div>
          </a>
        </div>
      ))}
      <button onClick={(() => SetarticleNum((pre) => pre + 1))}
        className="text-blue-400 pl-4 pb-3 hover:trext-blue-200 text-sm"
      >Show More... </button>
    </div>
  )
}


