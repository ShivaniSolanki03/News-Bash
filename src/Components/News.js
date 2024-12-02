// // import React, { Component } from 'react';
// // import NewsItem from './NewsItem';
// // import Spinner from './Spinner'; // Import the Spinner component
// // import PropTypes from 'prop-types';

// // export class News extends Component {
// //   static defaultProps = {
// //     country: "in",
// //     pageSize: 8
// //   };

// //   static propTypes = {
// //     name: PropTypes.string,
// //     pageSize: PropTypes.number
// //   };

// //   constructor() {
// //     super();
// //     console.log("News constructor initialized");
// //     this.state = {
// //       articles: [],
// //       loading: false,
// //       page: 1,
// //       totalPages: 5 // Example total pages (adjust according to actual API response)
// //     };
// //   }

// //   async componentDidMount() {
// //     console.log("Component Did Mount");
// //     this.fetchNews();
// //   }

// //   fetchNews = async () => {
// //     this.setState({ loading: true }); // Set loading to true when fetching begins
// //     try {
// //       const { page } = this.state;
// //       const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c87127fe74124ebf89a0ce58b656f059&page=${page}`;
// //       // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c87127fe74124ebf89a0ce58b656f059&page=${this.state.page + 1}&pageSize=${this.props.}`;
// //       const data = await fetch(url);
// //       const parsedData = await data.json();
// //       console.log("Fetched Data:", parsedData);
// //       this.setState({ articles: parsedData.articles || [], loading: false }); // Set loading to false after data is fetched
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       this.setState({ loading: false }); // Set loading to false in case of error
// //     }
// //   };

// //   handlePreviousClick = () => {
// //     this.setState(
// //       (prevState) => ({ page: prevState.page - 1 }),
// //       () => {
// //         this.fetchNews();
// //         window.scrollTo(0, 0); // Scroll to top after page change
// //       }
// //     );
// //   };

// //   handleNextClick = () => {
// //     this.setState(
// //       (prevState) => ({ page: prevState.page + 1 }),
// //       () => {
// //         this.fetchNews();
// //         window.scrollTo(0, 0); // Scroll to top after page change
// //       }
// //     );
// //   };

// //   render() {
// //     const { articles, page, totalPages, loading } = this.state;


// //     return (
// //       <div className="container my-3">
// //         <h2 className="text-center">News-Bash Top Headlines</h2>

// //         {/* Show Spinner only when loading is true */}
// //         {loading ? (
// //           <Spinner />
// //         ) : (
// //           <div className="row">
// //             {articles.map((element) => {
// //               const title = element.title ? element.title.slice(0, 45) : "No Title Available";
// //               const description = element.description ? element.description.slice(0, 88) : "No Description Available";
// //               const imageUrl = element.urlToImage || "https://via.placeholder.com/150";
// //               const newsUrl = element.url;

// //               return (
// //                 <div className="col-md-3" key={newsUrl}>
// //                   <NewsItem 
// //                     title={title} 
// //                     description={description} 
// //                     imageUrl={imageUrl} 
// //                     newsUrl={newsUrl} 
// //                   />    
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}

// //         {/* Button container with alignment */}
// //         <div className="container d-flex justify-content-between my-3">
// //           {/* Previous Button */}
// //           <button 
// //             type="button" 
// //             className="btn btn-dark"
// //             onClick={this.handlePreviousClick}
// //             disabled={page <= 1} // Disable previous on the first page
// //           >
// //             &laquo; Previous
// //           </button>

// //           {/* Next Button with increased height */}
// //           <button 
// //             type="button" 
// //             className="btn btn-dark"
// //             onClick={this.handleNextClick}
// //             disabled={page >= totalPages} // Disable next on the last page
// //             style={{ 
// //               marginTop: '10px', // Adds margin to shift it down
// //               height: '50px' // Increased height of the button
// //             }}
// //           >
// //             Next &raquo;
// //           </button>
// //         </div>

// //         {/* Page Number Display */}
// //         <div className="text-center">
// //           <p>
// //             Page {page} of {totalPages}
// //           </p>
// //         </div>

// //         {/* Message when no more pages are available */}
// //         {page >= totalPages && (
// //           <div className="alert alert-info mt-3">
// //             No more pages available
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
// // }

// // export default News;
// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';

// export class News extends Component {
//   static defaultProps = {
//     country: 'us',
//     pageSize: 8,
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//   };

//   constructor() {
//     super();
//     console.log('News constructor initialized');
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       category: 'general', // Default category
//       totalPages: 5, // Example total pages (adjust according to actual API response)
//     };
//   }

//   async componentDidMount() {
//     console.log('Component Did Mount');
//     this.fetchNews();
//   }

//   fetchNews = async () => {
//     const { page, category } = this.state;
//     const {  pageSize } = this.props;

//     this.setState({ loading: true }); // Set loading to true when fetching begins

//     try {
//       const url = `https://newsapi.org/v2/top-headlines?&category=${category}&apiKey=c87127fe74124ebf89a0ce58b656f059&page=${page}&pageSize=${pageSize}`;
//       const data = await fetch(url);
//       const parsedData = await data.json();

//       console.log('Fetched Data:', parsedData);

//       this.setState({ 
//         articles: parsedData.articles || [],
//         totalPages: Math.ceil(parsedData.totalResults / pageSize), // Calculate total pages
//         loading: false,
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       this.setState({ loading: false }); // Set loading to false in case of error
//     }
//   };

//   handleCategoryChange = (newCategory) => {
//     this.setState({ category: newCategory, page: 1 }, this.fetchNews); // Update category and fetch news
//   };

//   handlePreviousClick = () => {
//     this.setState((prevState) => ({ page: prevState.page - 1 }), this.fetchNews);
//     window.scrollTo(0, 0);
//   };

//   handleNextClick = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchNews);
//     window.scrollTo(0, 0);
//   };

//   render() {
//     const { articles, page, totalPages, loading, category } = this.state;

//     const categories = [
//       'general',
//       'business',
//       'entertainment',
//       'health',
//       'science',
//       'sports',
//       'technology',
//     ];

//     return (
//       <div className="container my-3">
//         <h2 className="text-center">News-Bash Top Headlines</h2>

//         {/* Category Selection */}
//         <div className="categories text-center my-3">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`btn btn-sm mx-1 ${
//                 category === cat ? 'btn-dark' : 'btn-outline-dark'
//               }`}
//               onClick={() => this.handleCategoryChange(cat)}
//             >
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Show Spinner only when loading is true */}
//         {loading ? (
//           <Spinner />
//         ) : (
//           <div className="row">
//             {articles.map((element) => {
//               const title = element.title ? element.title.slice(0, 45) : 'No Title Available';
//               const description = element.description
//                 ? element.description.slice(0, 88)
//                 : 'No Description Available';
//               const imageUrl = element.urlToImage || 'https://via.placeholder.com/150';
//               const newsUrl = element.url;

//               return (
//                 <div className="col-md-3" key={newsUrl}>
//                   <NewsItem
//                     title={title}
//                     description={description}
//                     imageUrl={imageUrl}
//                     newsUrl={newsUrl}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Pagination Buttons */}
//         <div className="container d-flex justify-content-between my-3">
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePreviousClick}
//             disabled={page <= 1}
//           >
//             &laquo; Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//             disabled={page >= totalPages}
//           >
//             Next &raquo;
//           </button>
//         </div>

//         {/* Page Number Display */}
//         <div className="text-center">
//           <p>
//             Page {page} of {totalPages}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: 'general', // Default category
      totalPages: 5, // Example total pages (adjust according to actual API response)
    };
  }
async updateNews(pageNo){

}
  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { page, category } = this.state;
    const { pageSize } = this.props;

    this.setState({ loading: true }); // Set loading to true when fetching begins

    try {
      const url = `https://newsapi.org/v2/top-headlines?&category=${category}&apiKey=c87127fe74124ebf89a0ce58b656f059&page=${page}&pageSize=${pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();

      this.setState({
        articles: parsedData.articles || [],
        totalPages: Math.ceil(parsedData.totalResults / pageSize), // Calculate total pages
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false }); // Set loading to false in case of error
    }
  };

  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory, page: 1 }, this.fetchNews); // Update category and fetch news
  };

  handlePreviousClick = () => {
    this.setState((prevState) => ({ page: prevState.page - 1 }), this.fetchNews);
    window.scrollTo(0, 0);
  };

  handleNextClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchNews);
    window.scrollTo(0, 0);
  };

  render() {
    const { articles, page, totalPages, loading, category } = this.state;

    const categories = [
      'general',
      'business',
      'entertainment',
      'health',
      'science',
      'sports',
      'technology',
      'fitness-freak', // New category added
      'job-and-internship', // New category added
      'latest-innovation', // New category added
    ];

    return (
      <div className="container my-3">
        <h2 className="text-center mb-4">News-Bash Top Headlines</h2>

        {/* Category Selection */}
        <div className="categories text-center mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm mx-1 ${category === cat ? 'btn-success' : 'btn-outline-dark'}`}
              onClick={() => this.handleCategoryChange(cat)}
              style={{
                transition: 'all 0.3s ease', // Smooth transition
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')} {/* Display category names nicely */}
            </button>
          ))}
        </div>

        {/* Show Spinner only when loading is true */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {articles.map((element) => {
              const title = element.title ? element.title.slice(0, 45) : 'No Title Available';
              const description = element.description
                ? element.description.slice(0, 88)
                : 'No Description Available';
              const imageUrl = element.urlToImage || 'https://via.placeholder.com/150';
              const newsUrl = element.url;

              return (
                <div className="col" key={`${newsUrl}-${element.publishedAt}`}>
                  <NewsItem
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    newsUrl={newsUrl}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Buttons */}
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={page <= 1}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={page >= totalPages}
          >
            Next &raquo;
          </button>
        </div>

        {/* Page Number Display */}
        <div className="text-center">
          <p>
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    );
  }
}

export default News;
