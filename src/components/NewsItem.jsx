import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1 '}}>
                {source}
            </span>
          <img src={!imageUrl ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Uq4KrsuYOU7kSKORW3uP-feoEpR8Rkc6xA&usqp=CAU":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text text-danger">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
