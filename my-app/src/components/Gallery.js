import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import Image from './Image';
import NoResults from './NotFound';

export default class Gallery extends Component {
    state = {
        images: [],
        isLoading: false,
    };
    performSearch = (query = 'greyscale') => {
        this.setState({ isLoading: true });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    images: response.data.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log("Error Fetching Data", error)
            })
        }
            componentDidMount() {
                this.performSearch(this.props.match.params.name);
                }      
                
                componentDidUpdate(prevProps){
                    if (this.props.location.key !== prevProps.location.key) {
                        this.performSearch(this.props.match.params.name);
                    }
                }

                render(){
                    return (
                        <div className="photo-container">
                            <ul>
                                {
                                    
                                        (this.state.images.length > 0) ? this.state.images.map(image =>
                                            <Image
                                                url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                                                alt={image.title}
                                                key={image.id}
                                            />
                                        )
                                            : <NoResults />
                                }
                            </ul>
                        </div>
                    );
                }
            }   
