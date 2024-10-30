function switchLists() {
    const listIDs = ["li1", "li2", "li3", "li4", "li5"];
    const TV = ["Detroiters", "Attack on Titan", "CyberPunk Edgerunners", "Dexter", "Adventure Time"];
    const Movies = ["Howl's Moving Castle", "Star Wars - Revenge of the Sith", "Mean Girls", "How to Train Your Dragon", "Seven"];
    const movies = document.getElementById("movies");
    const tvShows = document.getElementById("tvShows");
    
    if(movies.checked === true) {
        for(let i = 0; i < Movies.length; i++) {
            const listID = document.getElementById(listIDs[i]);
            listID.textContent = Movies[i];
        }
    }
    if(tvShows.checked === true) {
        for(let i = 0; i < TV.length; i++) {
            const listID = document.getElementById(listIDs[i]);
            listID.textContent = TV[i];
        }
    }
}