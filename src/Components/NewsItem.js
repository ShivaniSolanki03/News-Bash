import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    

  

    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem', height: '450px' }}>
          <div className="image-container" style={{ height: '200px', overflow: 'hidden' }}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
            <h5 className="card-title">{title ? title.slice(0, 50) + '...' : 'No Title Available'}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex:'1'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>


            </h5>
            <p className="card-text">{description ? description.slice(0, 89) + '...' : 'No Description Available'}</p>
            <p className="card-text"><small className="text-body-secondary"  >by {author?"Unknown":author }on {new Date(date).toGMTString()}</small></p>

            <div className="d-flex justify-content-start align-items-end">
              {/* "Read More" Button */}
              <button
                type="button"
                className="btn btn-success"
                onClick={() => window.open(newsUrl, '_blank')}
                style={{ alignSelf: 'flex-start' }}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
