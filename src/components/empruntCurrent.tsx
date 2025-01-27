'use client';

import { useEffect, useState } from 'react';

export default function EmpruntsPage() {
    const [emprunts, setEmprunts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmprunts = async () => {
            try {
                const response = await fetch('/api/emprunt?email=utilisateur@example.com');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des emprunts');
                }
                const data = await response.json();
                setEmprunts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmprunts();
    }, []);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    return (
        <div>
            <h1>Emprunts</h1>
            <ul>
                {emprunts.map((emprunt) => (
                    <li key={emprunt.id}>
                        {emprunt.livre.titre} (emprunté par {emprunt.utilisateur.nom})
                    </li>
                ))}
            </ul>
        </div>
    );
}