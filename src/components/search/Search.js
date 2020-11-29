import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/imageResults';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText:'',
            apiUrl:'https://pixabay.com/api',
            apikey:'19286299-d559cc3ba0807b7d67715d8dc',
            images:[]
         }
    };
    onTextChange = e =>{
            const val =e.target.value;
            this.setState({[e.target.name]:val},() =>{
            if(val===''){
                this.setState({images:[]});
            }
            else{
                axios
                .get(
                    `${this.state.apiUrl}/?key=${this.state.apikey}&q=${
                        this.state.searchText
                    }&image_type=photo&safesearch=true`
                )
                .then(res=>this.setState({images:res.data.hits}))
                .catch(err=>console.log(err));
            } 
        });
     }
    render() { 
        console.log(this.state);
        console.log(this.state.images);
        return ( 
                <div id="UserInput" className="col-lg-12">
                    <input
                        type="text"
                        className="form-control searchinput"
                        placeholder="Search for Catalogues"
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                    />
                    {this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
                </div>
         );
    }
}
 
export default Search;