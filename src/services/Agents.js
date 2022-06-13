
const axios = require('axios').default;

class Agents {

    url = 'https://api.octadesk.services';

    constructor() {

    }

    login() {

        return axios.post('https://api.octadesk.services/login', {
            username: "it.support@bt.digital",
            password: "f//<t(97L)cRyy%7?J"
        }, { headers: { subDomain: 'beltech' } })
            .then(resp => {
                //console.log(resp.data)
                return resp.data;
            })


    }

    async getAgents() {
        const token = await this.login();
        
      return  axios.get(`${this.url}/persons/agents`, {  headers: { Authorization: `Bearer ${token.token}` }})
        .then(resp => {

            const agents = resp.data;
            const agentsList = []
            agents.forEach(itens => {
                if(itens.name == 'fabio.pires1'){
                    agentsList.push({ id: itens.id, name: itens.name, isEnabled: itens.isEnabled })
                }
            });

            return agentsList;

        })

    }

    async disableAgents() {
        const token = await this.login();
        const agents = await this.getAgents();
       
        agents.forEach(itens => {
            axios.put(`${this.url}/persons/${itens.id}`, {
                isEnabled: false
            }, {  headers: { Authorization: `Bearer ${token.token}` }})
            .then( resp => {
                console.log("Desativado!")
            })
        });

    }
    
    async activeAgents() {
        const token = await this.login();
        const agents = await this.getAgents();
       
        agents.forEach(itens => {
            axios.put(`${this.url}/persons/${itens.id}`, {
                isEnabled: true
            }, {  headers: { Authorization: `Bearer ${token.token}` }})
            .then( resp => {
                console.log("Desativado!")
            })
        });

    }

}

module.exports = Agents;