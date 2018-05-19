const authState = {
    login:{
        status: 'INIT'
    },
    register:{
        status: 'INIT',
        error: -1
    },
    status:{
        valid: false,
        isLoggedIn: false,
        currentUser:''
    },
    userinfo:{
        plan: 'testINIT',
        address: 'testINIT',
        unique: true
    }
};


const updateState = {
	updated:{
        status: 'INIT',
        error: -1
    },
};

export { authState, updateState };
