import fbAppId from '../fbAppId'

const initialState = {
	fbLoggedIn: false,
	appLogin: false,
}

const fbAuth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
    	(function(d, s, id){
    		var js, fjs = d.getElementsByTagName(s)[0];
    		if (d.getElementById(id)) {return;}
    		js = d.createElement(s); js.id = id;
    		js.src = "//connect.facebook.net/en_US/sdk.js";
    		fjs.parentNode.insertBefore(js, fjs);
    	}(document, 'script', 'facebook-jssdk'));

    	window.fbAsyncInit = function() {
		FB.init({
			appId      : fbAppId,
			xfbml      : true,
			version    : 'v2.7'
		})

		FB.getLoginStatus((response)=> {
			console.log(response.status)
			if (response.status === 'connected') {
				console.log('User is logged into facebook and your app.')

			} else if (response.status === 'not_authorized') {
				console.log('User is logged into facebook, but not your app.')	
			} else {
				console.log('User is not logged into facebook or your app.')	
			}
		})
	}
      return state
    case 'LOGOUT':
      return state
    default:
      return state
  }
}

export default fbAuth
