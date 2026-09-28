import 'dotenv/config'

const env= process.env.Test_env || 'qa'

const config={

qa: {baseurl: process.env.qa_URL},
stag:{baseurl:process.env.stag_url},
prod: {baseurl:process.env.prod_url}
}

export const CONFIG=config[env]