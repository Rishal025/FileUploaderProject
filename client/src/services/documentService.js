import axios from 'axios';

class Post {

    create(formData) {
        const url = "http://localhost:4000/api/post";
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    }

    getPost() {
        const url = 'http://localhost:4000/api/post';
        return axios.get(url);
    }

}

export default new Post();