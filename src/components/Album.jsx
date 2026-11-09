import React from 'react';
import { AlbumContext } from '../context/AlbumContext';
import '../css/Album.css';

export const Album = () => {
    const { albums, selectedPhoto, openPopup, closePopup, deletePhoto } = React.useContext(AlbumContext);

    return (
        <div className="album-container">
            <h2>Листа на Албуми / Слики (JSONPlaceholder)</h2>

            {/* Мапирање на сликите */}
            <div className="album-grid">
                {albums.map((photo) => (
                    <div
                        key={photo.id}
                        onClick={() => openPopup(photo)}
                        className="album-card"
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title.substring(0, 20)}...</p>
                    </div>
                ))}
            </div>

            {/* Popup дел за селектираната слика */}
            {selectedPhoto && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Детали за сликата</h3>
                        <img src={selectedPhoto.url} alt={selectedPhoto.title} />
                        <p>{selectedPhoto.title}</p>

                        <div className="popup-buttons">
                            {/* Копче за бришење */}
                            <button
                                onClick={() => deletePhoto(selectedPhoto.id)}
                                className="btn-delete"
                            >
                                Избриши слика
                            </button>

                            {/* Копче за затворање */}
                            <button
                                onClick={closePopup}
                                className="btn-close"
                            >
                                Затвори
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};