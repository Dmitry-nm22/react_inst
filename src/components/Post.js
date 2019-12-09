import React, {Component} from 'react';
import User from './User'




export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                <User src='data:image/jpeg;base64,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'
                      alt='man'
                      name='Scott'
                      min={true}
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className='post__name'>
                    some account
                </div>
                <div className='post__des'>
                     is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                </div>
            </div>
        )
    }
}