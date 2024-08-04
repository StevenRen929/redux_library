//simulate the api from back-end
const books = [
    { id: 1, title: "Book 1", description: "Description for Book 1" ,author:"Steven" },
    { id: 2, title: "Book 2", description: "Description for Book 2" , author:"Nancy" },
    { id: 3, title: "Book 3", description: "Description for Book 3", author:"Almond" },
    { id : 4, title:"book 4", description:"Description for Book 4", author: "Leon"}
  ];

const FAKE_DELAY = 2000;
//delay 2000ms from back-end

const fakeAPI = {
    fetchBooks :()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(books)
            },FAKE_DELAY)
        })
    }
}

export default fakeAPI;