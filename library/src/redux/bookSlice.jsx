import{createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import fakeAPI from '../fakeAPI';

//async thunk action for fetching books

export const fetchBooks = createAsyncThunk('books/fetchBooks',async()=>{
    try{
        const data = await fakeAPI.fetchBooks();
        console.log('data',data);
        return data;
    }catch(error){
        console.error("fail to fetch book",error);
    }
})
const bookSlice = createSlice({
    name: 'books',
    initialState:[],
    reducers:{
        addBook:(state,action)=> {
            state.push({id:Date.now(),...action.payload})
        },
        deleteBook:(state,action)=>{
            return state.filter(book=>book.id!== action.payload)
        }
        //updateBook...
        //this is template to set up redux toolkit


    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchBooks.fulfilled,(state,action)=>{
            return [...action.payload]
        })
        .addCase(fetchBooks.rejected,(state,action)=>{
            console.log("fail to fetch books in reducer:", action.error);
        })
    }
})


export const{addBook,deleteBook} = bookSlice.actions;
export default bookSlice.reducer;

//don't forget to dispatch to realease the data