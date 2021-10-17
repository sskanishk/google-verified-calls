const {JWT} = require('google-auth-library')


module.exports = {
	GCP_AccessToken: function() {
		return new Promise(async(resolve,reject)=>{
			try
			{

        const client = new JWT({
					email: process.env.REACT_APP_GCS_CLIENT_EMAIL,
					key: process.env.REACT_APP_GCS_PRIVATE_KEY.replace(/\\n/g, '\n'),
					scopes: 'https://www.googleapis.com/auth/cloud-platform'
				})

				const token = await client.authorize()
                
				return resolve({token:true, access_token:token.access_token})
			}
			catch(error)
			{
				return resolve({token:false, access_token:""});
			}
		}) 
	}
}