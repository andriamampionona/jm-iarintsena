"use client";

import { useState } from "react";

type FormulaireVisiteProps = {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    date: string;
    message: string;
  }) => Promise<boolean>; // 👉 la fonction renvoie true si ok, false si erreur
};

export default function FormulaireVisite({ onSubmit }: FormulaireVisiteProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const ok = await onSubmit(formData);
      if (ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" }); // reset form
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif text-green-800 mb-6">
        Formulaire de Visite
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="+261 34 12 345 67"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date souhaitée
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message (optionnel)
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Informations supplémentaires..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-4 rounded-md transition-colors duration-300"
          >
            Demander une visite
          </button>
        </form>

        {/* Messages de notification */}
        {status === "success" && (
          <p className="mt-4 text-green-700 font-medium">
            ✅ Votre demande a été envoyée avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium">
            ❌ Une erreur est survenue, veuillez réessayer.
          </p>
        )}
      </div>
    </div>
  );
}
