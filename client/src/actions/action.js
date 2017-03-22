
export const FETCH_HOUSES_REQUEST = 'FETCH_HOUSES_REQUEST';
export const fetchHousesRequest = () => ({
  type: FETCH_HOUSES_REQUEST,
})

export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const fetchHousesSuccess = (title, url, location, price, description, accomodates) => ({
  type: FETCH_HOUSES_SUCCESS,
  title,
  url,
  location,
  price,
  description,
  accomodates
})


export const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
export const postData = (name,id,profilePicURL,accessToken,expiresAt,email) => ({
  type: POST_LOGIN_DATA,
  name,
  id,
  profilePicURL,
  accessToken,
  expiresAt,
  email
})

export const LOGIN_USER_PAGE = 'LOGIN_USER_PAGE';
export const loginUserPage = () => ({
  type: LOGIN_USER_PAGE
})

export const FETCH_VACATION_DATA = 'FETCH_VACATION_DATA';
export const fetchvacationdata = (country, description, videoUrl, soundUrl) => ({
  type: FETCH_VACATION_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})

export const SEARCH_DATA = 'SEARCH_DATA';
export const searchData = (country, description, videoUrl, soundUrl) => ({
  type: SEARCH_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})
export const SOUND_CLOUD_ICON = 'SOUND_CLOUD_ICON';
export const soundCloudIcon = () => ({
  type: SOUND_CLOUD_ICON,
})


// Async ACTIONS

export const postUserData = (name,id,profilePicURL,accessToken,expiresAt,email) => {

  return (dispatch) => {
    fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,id,profilePicURL,accessToken,expiresAt,email})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      // console.log(json);
      dispatch(postData(json.name,json.id,json.profilePicURL,json.accessToken,json.expiresAt,json.email))})
  }
}


export const fetchHouses = () => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("hi");
    fetch('http://localhost:8080/api/houses')
    .then(response => response.json())
    .then(json => {
      console.log(json[0])
      dispatch(fetchHousesSuccess(json[0].title,json[0].url,json[0].location,json[0].price,json[0].description,json[0].accomodates));
    })
}



export const fetchvacations = () => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("fetching vacation data...");
    fetch('http://localhost:8080/api/vacation')
    .then(response => response.json())
    .then(json => {
      console.log(json[0].country)//look at the console before dispatching the action.

      dispatch(fetchvacationdata(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl));
    })
}

export const searchRequest = (data) => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("fetching search data...");
    fetch(`http://localhost:8080/api/vacation/${data}`)
    .then(response => response.json())
    .then(json => dispatch(searchData(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl)))
}





//================wed's work=======================
//sync action

export const VACAY_HISTORY = 'VACAY_HISTORY';
export const vacayhistory = (vdata) => ({
  type: VACAY_HISTORY,
  vdata
})

// async action

export const fetchinghistory = () => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("fetching vacation history");
    fetch('http://localhost:8080/api/vacation')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(vacayhistory(json));
    })
}













