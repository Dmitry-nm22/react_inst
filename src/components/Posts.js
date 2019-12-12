import React, {Component} from 'react';
import InstaService from "../services/instaService";
import User from "./User";
import ErrorMessage from "./Error";


export default class Posts extends Component {

    InstaService = new InstaService();
    state ={
        posts:[],
        error: false
    }

    componentDidMount() {
        this.updatePosts()
    }

    updatePosts(){
        this.InstaService.getAllPosts()
       .then(this.onPostsLoaded)
       .catch(this.onError);
    }

    onPostsLoaded = (posts) =>{
        this.setState({
            posts,
            error: false
        })
        console.log(this.state.posts)
    }

    onError =() =>{
        this.setState({
            error: true
        })
    }

    renderItem(arr) {
        return arr.map(item =>{
            const {name, altname, photo, src, alt, descr, id} = item;
            return(
                <div key={id} className='post'>
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min={true}
                    />
                    <img src={src} alt={alt}/>
                    <div className='post__name'>
                        {name}
                    </div>
                    <div className='post__des'>
                        {descr}
                    </div>
                </div>
            )
        })
    }





    render() {
        const {error, posts} = this.state;
        const items = this.renderItem(posts)

        if(error){
            return <ErrorMessage/>
        }
        return(
            <div className="left">
                {items}
            </div>
        )
    }
}