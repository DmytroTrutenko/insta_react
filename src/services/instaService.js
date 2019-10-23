export default class instaService{
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);  //выучить fetch api, async, await
        
        if(!res.ok){
            throw new Error('Could not fetch ${url}; received ${res.status}');  //создаем ошибку
        }

        return await res.json();   //превращаем ответ сервера в json формат
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }
}