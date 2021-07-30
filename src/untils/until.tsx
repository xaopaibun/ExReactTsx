export const Url_Sever = "https://servercoffeehouse.herokuapp.com";

export const Url_Image = "https://servercoffeehouse.herokuapp.com/images/";

export  const  makeid = (length: number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}