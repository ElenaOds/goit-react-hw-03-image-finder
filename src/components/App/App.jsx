import { Component} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Searchbar } from '../Searchbar/Searchbar';
import {ImageInfo} from '../ImageInfo';



export class App extends Component {
  state = {
    imageTag: '',
  }

  handleFormSubmit = imageTag => {
    this.setState({ imageTag });
    
  }


 render() {
  return (
    <div>
    
    <Searchbar onSubmit={this.handleFormSubmit}/>
    <ImageInfo imageTag={this.state.imageTag}/>
    <ToastContainer autoClose={3000}/>
    </div>
  );
 }
};
