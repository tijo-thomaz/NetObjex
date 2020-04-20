import axios from "axios";
 const usermodel={
      state: { userData: [] },
      reducers: {
            set(state, payload) {
              
                  return { ...state, userData: payload.results };
            }
      },
      effects: dispatch => ({
            async getRandomData(page) {
                        const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`)
                        .then(function (response) {
                          dispatch.usermodel.set(response.data)
                        })
                        .catch(function (error) {
                        });
                  
               
            },
 
      })
};


export default usermodel