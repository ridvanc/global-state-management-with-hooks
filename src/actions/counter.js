export const increase = store => {
    let count = {...store.state.count};
    console.log(count);
    count.totalcount++;
    store.setState({count: count});
};

export const decrease = store => {
    let count = {...store.state.count};
    console.log(count);
    count.totalcount--;
    store.setState({count: count});
};