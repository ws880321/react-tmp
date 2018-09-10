export const GET_BOOKS='GET_BOOKS';
const HotUrl ='https://www.apiopen.top/novelApi'
const DetailsUrl = 'https://www.apiopen.top/novelInfoApi?name='
import fetch from 'cross-fetch';




export const getHotBooks = (data) => { {
    return { type: GET_BOOKS, data}
}}



export const getHotBooksAsync = (value ) => async (dispatch)=>{
        try {
            const fetchurl = value ? DetailsUrl + value : HotUrl
            const res = await fetch(fetchurl);
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            const user = await res.json();
            const data = Array.isArray(user.data) ? user.data : user.data.data
            return dispatch(getHotBooks(data));
        } catch (err) {
            console.error(err);
        }
}
