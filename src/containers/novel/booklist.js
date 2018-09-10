import React, { Component } from 'react';
import BookList from '../../components/novelComponents/booklist.js'
import { connect } from 'react-redux'
import { getHotBooksAsync } from '../../actions/novel.js'
class NovelBoxContainer extends Component {
    constructor(params) {
        super(params)
        this.state = {
            books: [1, 3, 4, 5]
        }
    }
    componentDidMount() {
        console.log(this.props)
        this.props.getBooks()
    }
    render() {
        return (
            <div className="novel-wrap">
                <BookList books={this.props.books} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.getHotNovel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => {
            dispatch(getHotBooksAsync())
        }
    }
}
const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NovelBoxContainer)
export default BookListContainer