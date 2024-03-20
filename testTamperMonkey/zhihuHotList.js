const axios = require('axios');

// 访问知乎热榜
const zhihuHotUrl = 'https://www.zhihu.com/hot';

axios.get(zhihuHotUrl)
    .then(response => {
        // console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data', error);
    });



