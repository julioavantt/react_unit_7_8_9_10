import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
   state = { images: [] };
   /*onSearchSubmit (term) {
      axios.get('https://api.unsplash.com/search/photos', {
         headers: {
            Authorization: 'Client-ID oVYqMO_Jd98OFCtawugtu_5qRLJIywxs9G70ZmdvMRk'
         }, 
         params: {
            query: term
         }
      }).then(response => { // Promise
         console.log(response.data.results);
      });
   }*/

   onSearchSubmit = async term => {
      const response = await unsplash.get('/search/photos', {
         params: { query: term }
      });

      this.setState({ images: response.data.results });
   }

   render() {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
         </div>
      );
   }
}

export default App;