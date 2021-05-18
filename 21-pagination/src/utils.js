const paginate = (followers) => {
    const itemsPerPage = 9; 
    const pages = Math.ceil(followers.length / itemsPerPage);
    //console.log(pages);

    const newFollowers = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage); //slice is pulling out the item from original array
       // start from index 0 then 0 + 9 so 9 is not included --> total is 9 items 
    });
   // console.log(newFollowers)
    return newFollowers; 

}

export default paginate
