import axios from "axios";

const searchImages = async (term) => {
    const response =  await axios.get("https://api.unsplash.com/search/photos" , {
        headers: {
            Authorization: "Client-ID _tdL-Nlm-LjuY_aIet1o5-1Ew4_rupP7gO1S-yxJkd0"
        },
        params : {
            query : term
        }
    }
    );

    return response.data.results;
}

export default searchImages;