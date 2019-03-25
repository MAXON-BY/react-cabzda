import React from "react";
import './News.css'

const NewsL = (props) => {

    return(
        <div className="newsSingle">
            <p className="newsTitle">{props.title}</p>
            <p className="newsText">{props.text}</p>
            <hr/>
        </div>
    )
};

const News = (props) => {

    let newsList = props.newws.newss.map( nn => <NewsL title={nn.title} text={nn.text} />);

    return(
        <div>
            <h2>News</h2>

            <div className="newsWrap">
                {newsList}
            </div>
        </div>
    )
};

export default News;