import React, { Component } from 'react';
import BookListContainer from '../../containers/novel/booklist.js'
import SearchBox from '../../containers/novel/serach.js'
class Novel extends Component {
    constructor(params) {
        super(params)
    }
    render() {
        return (
            <div className="novel-wrap">
                <SearchBox />
                <BookListContainer />
            </div>
        )
    }
}

export default Novel