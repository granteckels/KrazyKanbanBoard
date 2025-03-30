import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch(
      '/auth/login',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',  // Set the Content-Type header to indicate JSON body
        },
        body: JSON.stringify(userInfo)
      }
    );

    if(!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from data retrieval: ', err);
    return;
  }
};

export { login };
