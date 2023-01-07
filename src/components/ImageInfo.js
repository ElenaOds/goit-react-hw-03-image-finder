import { Component} from 'react';

export class ImageInfo extends Component {
    state = {
        image: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevTag = prevProps.imageTag;
        const nextTag = this.props.imageTag;

        if(prevTag !== nextTag) {
            console.log('изменился запрос');

        this.setState({ loading: true});    
        fetch(`https://pixabay.com/api/?q=${nextTag}&page=1&key=31476924-d929541eaee183828a9c10824&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(image => this.setState({ image }))
        .finally(() => this.setState({ loading: false}));
        }
    }
    render() {
    return <div>
        {this.state.loading && <div> Loading </div>}
        {/* {!this.props.imageTag && <div>Enter valid data</div> } */}
        {this.state.image && <div>{this.state.image.hits.tags}</div>}
        </div>
 }
}