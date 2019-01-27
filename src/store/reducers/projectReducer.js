const initState = {
    projects:[
        {id:'1',title:'Organizing project structure', content:'Modularize app into components'},
        {id:'2',title:'Organizing database structure', content:'Reorganize database tables'},
        {id:'3',title:'Optimize files', content:'Optimize images and minify all files'}
    ]
};
const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;