import { configureStore } from '@reduxjs/toolkit'; // za kreiranje na prodavnicata
import { createLogger } from 'redux-logger'; //fiskalen aparat
import SayHelloReducer from './reducers/SayHelloReducer'; // vraboten (prodavac)

const reducer = {
    //Lista na vraboteni:
    SayHelloReducer: SayHelloReducer
}

const logger = createLogger(); //Pazaram fiskalen aparat

export default configureStore({ //otvaranje na prodavnicata
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) //oprema za rabota
})


