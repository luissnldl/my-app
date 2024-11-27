'use client';
import { useState } from 'react';
import dataJson from '@/app/data/elementosPagina.json'; // Ruta relativa al archivo JSON

interface CybersecurityObject {
  type: "Tool" | "Technique" | "Concept" | "Hardware" | "Software";
  name: string;
  description: string;
  image: string;
  category?: string;
  platforms?: string[];
  mitigation?: string[];
  components?: string[];
  principles?: string[];
  use_cases?: string[];
  vendors?: string[];
  examples?: string[];
  categories?: string[];
}

export default function Page() {
  const [loading, setLoading] = useState(false); // Se puede activar loading si es necesario
  const [error, setError] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<CybersecurityObject | null>(null);

  // Asumimos que los datos están en `dataJson.cybersecurity_objects`
  const characters = dataJson.cybersecurity_objects;

  const closeModal = () => {
    setSelectedCharacter(null); // Cierra el modal
  };

  const handleCardClick = (character: CybersecurityObject) => {
    setSelectedCharacter(character); // Abre el modal con el personaje seleccionado
    const modal = document.getElementById('modalCharacters') as HTMLDialogElement;
    modal?.showModal();  // Muestra el modal
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <br />
      <h1 className="text-6xl font-semibold text-center text-purple-600 animate-pulse">
        Herramientas
      </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div
              key={character.name}
              className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:bg-gray-700 transition duration-300 ease-in-out"
              onClick={() => handleCardClick(character)} // Pasa el objeto completo
            >
              <figure>
                <img src={character.image} alt={character.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {character.name}
                  <div className="badge badge-secondary">
                    {character.type}
                  </div>
                </h2>
                <p>Description: {character.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{character.category}</div>
                  <div className="badge badge-outline">
                    {character.type || "Unknown"}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      <dialog id="modalCharacters" className="modal">
        <div className="modal-box">
          <img
            src={selectedCharacter?.image}
            alt={selectedCharacter?.name}
            className="w-full rounded-lg mb-4"
          />
          <h3 className="font-bold text-lg">
            Personaje: {selectedCharacter?.name}
          </h3>
          <p className="py-4">Tipo: {selectedCharacter?.type}</p>
          <p className="py-4">Descripción: {selectedCharacter?.description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
