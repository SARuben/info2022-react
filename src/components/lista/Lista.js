
import InfiniteScroll from "react-infinite-scroll-component";

const Lista = () => {
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };


    let state = {
        items: Array.from({ length: 20 }),
        hasMore: true,
    };

   const fetchMoreData = () => {
    if (state.items.length >= 500) {
      console.log(state.hasMore)  
      return;
    }   
} 
    const setTimeout = () => {
        state.items.concat(Array.from({ length: 20 }))
      
    }

    return (
      <div>
        <h1>Scroll infinito </h1>
        <hr />
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>ya no hay mas nada para deplegar </b>
            </p>
          }
        >
          
          {state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
}
export default Lista
