'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';

export function DevisForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          type: formData.get('type'),
          company: formData.get('company'),
          budget: formData.get('budget'),
          timeline: formData.get('timeline'),
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSuccess(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Type de projet
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <label className="relative flex cursor-pointer rounded-lg border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50">
            <input
              type="radio"
              name="type"
              value="automatisation"
              className="sr-only peer"
              required
            />
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Automatisation & IA
                </span>
                <span className="mt-1 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  Optimisation des processus et intégration d&apos;IA
                </span>
              </span>
            </span>
            <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-teal-500" aria-hidden="true" />
          </label>
          <label className="relative flex cursor-pointer rounded-lg border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50">
            <input
              type="radio"
              name="type"
              value="securite"
              className="sr-only peer"
              required
            />
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Sécurité & Contrôle
                </span>
                <span className="mt-1 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  Authentification et gestion des accès
                </span>
              </span>
            </span>
            <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-teal-500" aria-hidden="true" />
          </label>
          <label className="relative flex cursor-pointer rounded-lg border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50">
            <input
              type="radio"
              name="type"
              value="ecommerce"
              className="sr-only peer"
              required
            />
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  E-commerce
                </span>
                <span className="mt-1 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  Solutions de vente en ligne performantes
                </span>
              </span>
            </span>
            <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-teal-500" aria-hidden="true" />
          </label>
          <label className="relative flex cursor-pointer rounded-lg border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50">
            <input
              type="radio"
              name="type"
              value="autre"
              className="sr-only peer"
              required
            />
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Autre projet
                </span>
                <span className="mt-1 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                  Un autre type de projet à discuter
                </span>
              </span>
            </span>
            <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-teal-500" aria-hidden="true" />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Budget estimé
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            placeholder="ex: 1000-5000€"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Délai souhaité
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            placeholder="ex: 2-3 mois"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Description du projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Décrivez votre projet en quelques lignes..."
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="cgu"
            required
            className="h-4 w-4 rounded border-zinc-300 text-teal-600 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-700/[0.15]"
          />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            J&apos;ai lu et j&apos;accepte les{' '}
            <Link href="/mentions-legales-scriptami" className="text-teal-500 hover:text-teal-600 dark:text-teal-400">
              conditions générales d&apos;utilisation
            </Link>
          </span>
        </label>

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        {success ? (
          <p className="text-sm text-green-600 dark:text-green-400">
            Votre message a bien été envoyé. Je vous recontacterai dans les plus brefs délais.
          </p>
        ) : (
          <Button type="submit" disabled={sending} className="inline-block">
            {sending ? 'Envoi en cours...' : 'Envoyer'}
          </Button>
        )}
      </div>
    </form>
  );
} 