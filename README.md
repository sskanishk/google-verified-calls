# google-verified-calls
Google Verified Calls, kind of truecaller.

Businesses call millions of consumers every day, but many consumers don't answer calls unless they recognize the caller. Calls from unverified phone numbers can also cause stress as scam call rates increase.

The Verified Calls feature in the Phone app increases call answer rates, builds trust, and helps consumers by presenting calls from legitimate businesses with verification, branding, and call reasons.


## Prerequisite
You must have verified call partner setup and in order to test here active agent also required.

Fill your prerequisite bucket [google verified calls docs](https://developers.google.com/business-communications/verified-calls/guides/learn
).

## Environment variable
```
REACT_APP_GCS_CLIENT_EMAIL=[google service account iam email id]
REACT_APP_GCS_PRIVATE_KEY=[google service account private key]
```

## Run locally
```
git clone https://github.com/sskanishk/google-verified-calls.git
cd google-verified-calls
yarn install
yarn start
```

## Tech Stack
- React - CRA
- Zustand
- Tailwind CSS
- Googles' Business Calls API
- Googles' Business Communications API
