export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART': {
            if (action?.payload) {
                return { ...state, cart: action?.payload };
            }
            else {
                return state;
            }
        }
        case 'ADD_ITEM': {
            if (action?.payload) {
                return { ...state, cart: [...state?.cart, action?.payload] };
            }
            else {
                return state;
            }
        }
        case 'REMOVE_ITEM': {
            let copyItems = [...state?.cart];
            function checkIndex(item) {
                return item?.id !== action.payload;
            }
            if (action?.payload) {
                copyItems = copyItems.filter(checkIndex);
                return { ...state, cart: copyItems };
            }
            else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
};


