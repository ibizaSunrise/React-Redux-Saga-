import React from 'react'
import {connect} from 'react-redux'
import Post from '../components/Post'

const Posts = ({syncPosts}) => {
    if(!syncPosts.length){
        return <p className = "text-center">
            Posts absence
        </p>
    }
    return syncPosts.map(el => <Post post = {el} key = {el.id}/>)
}

const mapStateToProps = state => {
 
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)