import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers :{
            Authorization: 'Client-ID ovrTfmBqAQL20TEGH-0ZJoSY4QLND9m3AIvFJELnWcs'
        },
        params :{
            query: term,
        },
    }
    );
    return response.data.results;
};



export default searchImages;