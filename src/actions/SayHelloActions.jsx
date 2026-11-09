export const SayHello = () => {
    return {
        type: "SAY_HELLO",
        payload: "Здраво од Redux!"
    };
};

export const SayGoodbye = () => {
    return {
        type: "SAY_GOODBYE",
        payload: "Догледање од Redux!"
    };
};