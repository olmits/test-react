export default class TaskService {
    
    static async getTasks(url) {
        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            if (!response.ok) {
                throw new Error('Invalid response')
            }
            const data = await response.json();
            return data
            
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    static async postTask(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return  response.json();
            
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    static async deleteTask(url, item) {
        try {
            const response = await fetch(url + item, {
                method: 'DELETE',

            })
            return  response.json();
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}
