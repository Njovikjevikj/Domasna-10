import { createContext, useEffect, useState } from 'react';

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
    const [albums, setAlbums] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Преземање на податоци од JSONPlaceholder
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then((response) => response.json())
            .then((data) => setAlbums(data))
            .catch((error) => console.log('Грешка:', error));
    }, []);

    // Функција за бришење на селектирана слика по ID и затворање на popup
    const deletePhoto = (id) => {
        setAlbums(albums.filter((photo) => photo.id !== id));
        closePopup();
    };

    const openPopup = (photo) => setSelectedPhoto(photo);
    const closePopup = () => setSelectedPhoto(null);

    return (
        <AlbumContext.Provider value={{ albums, selectedPhoto, openPopup, closePopup, deletePhoto }}>
            {children}
        </AlbumContext.Provider>
    );
};