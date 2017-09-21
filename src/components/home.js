import React from 'react';
import MapComponent from './map.js';


class HomeComponent extends React.Component {
  render(){
  return (
    <div>
      <div>Home</div>
      <img alt="kitten and puppy" className="SiteHomeImage" src="https://i.ytimg.com/vi/EylDi0Dxrn0/maxresdefault.jpg" />
      <div>
        <div>About</div>
        {MapComponent}
      </div>
    </div>
  )
}
}

export default(HomeComponent);
