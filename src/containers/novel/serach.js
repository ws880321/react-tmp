import React ,{Component}from 'react';
import { connect } from 'react-redux'
import { getHotBooksAsync } from '../../actions/novel.js'
import './search.scss'
class SearchBox extends Component{
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
        this.submit = this.submit.bind(this)

    }

    submit(e){
        e.preventDefault();
        const value =this.refs.serchInput.value
        if (value != '' && value!=this.state.value) {
            this.setState({
                value
            },()=>{
                this.props.getBooks(value)
            })
            
        }
    }
    render(){

        return(
            <div className='searchBox'>
                <form onSubmit={this.submit}>
                    <input ref='serchInput'/>
                    <button>search</button>
                </form>
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
        getBooks: (value) => {
            dispatch(getHotBooksAsync('https://www.apiopen.top/novelInfoApi?name=' + value))
        }
    }
}
const SearchBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)
export default SearchBoxContainer