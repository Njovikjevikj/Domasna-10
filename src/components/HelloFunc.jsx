import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { SayGoodbye, SayHello } from './../actions/SayHelloActions';

export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);
    const goodbye = useSelector(state=> state.SayHelloReducer.goodbye);

    useEffect(() => {
        dispatch(SayHello());
        dispatch(SayGoodbye());
    },[])

    return (
        <div id='Hello-func'>
            <h2>{greeting}</h2>
            <h3>{goodbye}</h3>
        </div>
    )
}
