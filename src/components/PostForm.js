import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import Alert from './Alert'

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
            return this.props.showAlert(`Post title shouldn't empty`)
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
                {
                    this.props.alert && 
                    <Alert message = {this.props.alert}/>
                }
               
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
    createPost,
    showAlert
}
const mapStateToProps = state =>({
    alert: state.app.alert
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)