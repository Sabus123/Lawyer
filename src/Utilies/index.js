export const getFavorites =()=>{
    const favorites = localStorage.getItem('favorites')
    if(favorites) return JSON.parse(favorites)

        return []
}
 export const addFavorite = lawyer =>{
    const favorites = getFavorites()
    favorites.push(lawyer)
    // console.log(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites))
 }

export const removeFavorite = id => {
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(lawyer => lawyer.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
}