import React, { Component } from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


export class Images extends Component {
    state = {
        images: [],
        count: 30,
        start: 1
    }
    render() {
        return (<div/>)
    }
}

export default Images
