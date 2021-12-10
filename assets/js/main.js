/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.
*/


//  Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.


const arrayObject = [
    {
        autore: "Marco Monni",
        fotoProfilo: "https://i.picsum.photos/id/198/300/300.jpg?hmac=LXuu3_Asv2vtXvHU-vYgD-_pfaYXq6l14xAFALdrlco",
        data: "15/10/2021",
        testo: "che talvolta è praticamente impossibile valutare sulla scorta dei dati normalmente disponibili.",
        immagine: "https://i.picsum.photos/id/444/600/300.jpg?hmac=rq8gLh76pmVX0xbAVxdx0T5wCEshX0z25eLXbctWCWQ",
        numeroLikes: "10",
    },
    {
        autore: "Nicola Piras",
        fotoProfilo: "https://i.picsum.photos/id/525/300/300.jpg?hmac=bZJEC1GF1U28l4pBtKfMRdcHe_Io4u_bNEYtdpdTzL0",
        data: "10/09/2020",
        testo: "non di rado riconosciuti come uno dei fattori di cui occorre tener conto in ogni sviluppo coerenete della teoria.",
        immagine: "https://i.picsum.photos/id/84/600/300.jpg?hmac=yiNgm5FHr7WPip0fiKXecbodGcKX3Y1zq69b6sUHiyA",
        numeroLikes: "5",
    },
    {
        autore: "Maurizio Esciana",
        fotoProfilo: "https://i.picsum.photos/id/411/300/300.jpg?hmac=vLP_Aguvnx9Fyhx1QKMZ3YaeKTDaxQTzPRbSgtZkrSo",
        data: "04/04/2021",
        testo: "ormai componenti di primaria importanza nella complessa fenomenologia dell'astrofisica.",
        immagine: "https://i.picsum.photos/id/1061/600/300.jpg?hmac=1hWHpiKeEXoZ5lc1THZWXsO2MNA6kzyNsSn5fZMUJY8",
        numeroLikes: "3",
    },
    {
        autore: "Manfredi Urciuoli",
        fotoProfilo: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
        data: "16/05/2021",
        testo: "e una nuova, individuane dei meccanismi di produzione di energia non termica",
        immagine: "https://i.picsum.photos/id/701/600/300.jpg?hmac=MvZv1WvD_k1q2_xIUIBjwREjlq3XK8iMirkKaqLh8zg",
        numeroLikes: "1",
    }
]