import axios from "axios";
const state = {
    projects :  [],
    projectLoaded : false,
    cats : [
        {
            id : 1,
            title : 'Work & projects',
            exerpt : 'Case studies & problems solving',
            disabled : false,
        },
        {
            id : 3,
            title : 'Digital art',
            exerpt : 'Pixels, fun & code',
            disabled : false,
        },
        {
            id : 2,
            title : 'Experiments & small projects',
            exerpt : 'Other works & side projects',
            disabled : false,
        },
    ]
}

const getters = {
    get_all_projects : state => state.projects,
    get_all_projects_ids : state => state.projects.map(el => el.url),
    get_cat_project : state =>{
        return (cat) => state.projects.filter(project => project.json.cat == cat)
    },
    get_all_cats : state => state.cats,
    //return projects from an array of ids
    get_projects_from_ids :  state => {
        return (ids) => {
            const data = [...new Set(ids)].map(id => state.projects.find(p => p.id == id))
            return data
        }
    },
    // return the project by the id
    get_projects_from_id :  state => {
        return (url) => {
            const data = state.projects.find(p => p.url === url)
            return data
        }
    },
}

const mutations = {
    add_projects : (state,payload) => {
        state.projects = payload
        state.projectLoaded = true
    }
}

const actions = {
    fetch_projects: ({ commit }) => {
        axios.get('https://api.simon-renault.com/pages')
            .then( (res) => {
                
                const parsed  =  res.data.map( res => {
                    return {
                        id: res.id,
                        url :res.url,
                        content : res.content,
                        json : JSON.parse(res.json)
                    }
                })
                commit('add_projects',parsed)
            })
    }
}

export default {
state,
getters,
mutations,
actions
}
    