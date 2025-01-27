import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer un nouvel emprunt
export async function POST(request: Request) {
    try {
        const { utilisateurEmail, livreId } = await request.json();

        // Vérifie si l'utilisateur existe
        const utilisateur = await prisma.utilisateur.findUnique({
            where: { email: utilisateurEmail },
        });

        if (!utilisateur) {
            return NextResponse.json(
                { error: 'Utilisateur non trouvé' },
                { status: 404 }
            );
        }

        // Vérifie si le livre existe
        const livre = await prisma.livre.findUnique({
            where: { id: livreId },
        });

        if (!livre) {
            return NextResponse.json(
                { error: 'Livre non trouvé' },
                { status: 404 }
            );
        }

        // Crée l'emprunt
        const emprunt = await prisma.emprunt.create({
            data: {
                utilisateurId: utilisateur.id,
                livreId: livre.id,
            },
        });

        return NextResponse.json(emprunt, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la création de l\'emprunt' },
            { status: 500 }
        );
    }
}

// Lister les emprunts filtrés par l'email de l'utilisateur
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const utilisateurEmail = searchParams.get('email');

        if (!utilisateurEmail) {
            return NextResponse.json(
                { error: 'Le paramètre "email" est requis' },
                { status: 400 }
            );
        }

        // Récupère les emprunts de l'utilisateur
        const emprunts = await prisma.emprunt.findMany({
            where: {
                utilisateur: {
                    email: utilisateurEmail,
                },
            },
            include: {
                livre: true, // Inclut les détails du livre
                utilisateur: true, // Inclut les détails de l'utilisateur
            },
        });

        return NextResponse.json(emprunts, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de la récupération des emprunts' },
            { status: 500 }
        );
    }
}