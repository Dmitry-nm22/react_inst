import React, {Component} from 'react';
import Post from "./Post";


export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2bLEr8wWugR2yZaJtuy7RHGAgEUoYDNDWJCs4GbS88oA3ZiAE' alt='first'/>
                <Post src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0wYg0B1U2wgtUmysZ0l6_zg9G_Kt3t0cNtS-A81T57GwCN2DY' alt='first'/>
            </div>
        )
    }
}