const initState = {
    projects: [
        {id: '1', title: 'Organizing project structure', content: 'Modularize app into components'},
        {id: '2', title: 'Organizing database structure', content: 'Reorganize database tables'},
        {id: '3', title: 'Optimize files', content: 'Optimize images and minify all files'}
    ]
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Created project error',action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;