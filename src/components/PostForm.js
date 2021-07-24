import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost} from '../redux/actions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()
        const {title} = this.state
        if(!title.trim()){
            return
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title: ''})    
    }

    changeInputHandler = e => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post title</label>
                    <input type="text" name ="title" className="form-control" id="title" value = {this.state.title} onChange = {this.changeInputHandler}/>
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
                )
    }
}

const mapDispatchToProps = {
    createPost
}
export default connect(null, mapDispatchToProps)(PostForm)