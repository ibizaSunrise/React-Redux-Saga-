import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/Post'
import { fetchPosts } from '../redux/actions'

export default function FetchedPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    if(!posts.length){
        return <button type="button" className="btn btn-primary" onClick = {() => dispatch(fetchPosts())}>Load posts...</button>
    }
    return posts.map(el => <Post post = {el} key = {el.id}/>)
}
