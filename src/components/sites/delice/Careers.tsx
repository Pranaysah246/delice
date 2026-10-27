"use client";

import React, { useState } from "react";
import Image from "next/image";

interface JobOffer {
  id: string;
  title: string;
  description: string;
  salary: string;
  schedule: string;
  experience?: string;
}

const JOBS: JobOffer[] = [
  {
    id: "serveur",
    title: "Serveur·se",
    description:
      "Tu accueilles et conseilles les clients, prends les commandes et assures un service rapide, attentionné et professionnel du début à la fin du repas.",
    salary: "À partir de 13,30 $/h + pourboires individuels",
    schedule: "Temps plein ou temps partiel",
    experience: "Minimum 2 ans d’expérience en service aux tables",
  },
  {
    id: "barman",
    title: "Barman / Barmaid",
    description:
      "Tu prépares et sers cocktails, vins et spiritueux avec rapidité et précision, tout en offrant un service attentionné et en contribuant à l’ambiance du bar.",
    salary: "À partir de 13,30 $/h + pourboires individuels",
    schedule: "Temps plein ou temps partiel",
    experience: "Minimum 2 ans d’expérience derrière un bar ou en service aux tables",
  },
  {
    id: "gerant",
    title: "Gérant·e de salle",
    description:
      "Tu veilles au bon déroulement des opérations en salle, coordonnes l'équipe de service et t'assures que chaque client vive une expérience exceptionnelle.",
    salary: "À discuter selon expérience",
    schedule: "Temps plein",
    experience: "Minimum 3 ans d’expérience en gestion de restaurant",
  },
  {
    id: "cuisinier",
    title: "Cuisinier·ère de ligne",
    description:
      "Tu prépares et dresses les plats chauds et froids selon les standards de qualité, de rapidité et d'hygiène de l'établissement.",
    salary: "À partir de 18,00 $/h selon expérience",
    schedule: "Temps plein ou temps partiel",
    experience: "Minimum 1 an d'expérience en cuisine à haut volume",
  },
  {
    id: "pizzaman",
    title: "Pizzaman / Pizzaiolo",
    description:
      "Tu prépares la pâte, garnis et cuis les pizzas artisanales dans notre four à haute température avec soin et rapidité.",
    salary: "À partir de 18,50 $/h",
    schedule: "Temps plein ou temps partiel",
    experience: "Expérience requise en préparation de pizzas",
  },
  {
    id: "receptionniste",
    title: "Réceptionniste",
    description:
      "Premier point de contact, tu accueilles chaleureusement la clientèle, gères les réservations téléphoniques et en ligne, et coordonnes l'assignation des tables.",
    salary: "À partir de 16,50 $/h",
    schedule: "Temps plein ou temps partiel",
  },
  {
    id: "suiteur",
    title: "Suiteur·euse",
    description:
      "Tu achemines rapidement les assiettes de la cuisine aux tables des clients avec précision et élégance.",
    salary: "À partir de 14,00 $/h + pourboires",
    schedule: "Temps partiel ou plein",
  },
  {
    id: "commis",
    title: "Commis débarrasseur·se",
    description:
      "Tu assures la propreté des tables, débarrasses efficacement et veilles à ce que la salle à manger soit toujours impeccable.",
    salary: "À partir de 14,00 $/h + pourboires",
    schedule: "Temps partiel ou plein",
  },
  {
    id: "hotesse",
    title: "Hôtesse",
    description:
      "Tu accueilles les invités avec le sourire, les installes à leur table et veilles à leur confort dès leur arrivée.",
    salary: "À partir de 15,50 $/h",
    schedule: "Temps partiel ou plein",
  },
  {
    id: "plongeur",
    title: "Plongeur",
    description:
      "Tu assures le nettoyage de la vaisselle, des ustensiles et des équipements de cuisine pour soutenir le travail de l'équipe.",
    salary: "À partir de 16,00 $/h",
    schedule: "Temps plein ou temps partiel",
  },
];

export function Careers() {
  const [openJobId, setOpenJobId] = useState<string | null>("serveur");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Serveur·se");
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const handleApply = (title: string) => {
    setSelectedJob(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <section className="relative w-full bg-[#f8efdc] text-[#de2b2b] py-16 md:py-28">
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#de2b2b]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-2 block">
              Rejoindre l&apos;équipe
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#de2b2b]">
              Une carrière chez nous
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="font-filson text-sm sm:text-base text-[#7c2627] leading-relaxed mb-4">
              Amuse-toi. Cultive ta passion. Crée ton avenir. Travailler avec nous,
              c’est évoluer dans une ambiance conviviale où le bien-être compte
              autant que le plaisir de bien faire. Rejoins une équipe qui avance
              ensemble, pour toi et avec toi.
            </p>
            <button
              onClick={() => handleApply("Candidature spontanée")}
              className="inline-block px-6 py-2.5 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] text-xs uppercase tracking-widest font-semibold rounded-full shadow transition-all duration-300"
            >
              Postuler en ligne
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Media with Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-[#de2b2b]/10">
              <Image
                src="/sites/delice/assets/l1070301-2560x1708.jpg"
                alt="Équipe Délice Resto Lounge"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Stamp Badge */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#de2b2b] rounded-full flex items-center justify-center p-4 shadow-xl border-4 border-[#f8efdc]">
              <Image
                src="/sites/delice/assets/logo-min.svg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-6">
              Les postes à combler
            </h3>

            <div className="flex flex-col divide-y divide-[#de2b2b]/20 border-y border-[#de2b2b]/20">
              {JOBS.map((job) => {
                const isOpen = openJobId === job.id;
                return (
                  <div key={job.id} className="py-4">
                    <button
                      onClick={() => toggleAccordion(job.id)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                    >
                      <h4 className="font-ivy text-xl sm:text-2xl font-semibold text-[#de2b2b] group-hover:text-[#7c2627] transition-colors">
                        {job.title}
                      </h4>
                      <span className="text-2xl font-light text-[#de2b2b] transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 pb-2 text-[#7c2627] text-sm sm:text-base leading-relaxed flex flex-col gap-3">
                        <p>{job.description}</p>
                        <div className="bg-[#f5dbca]/40 p-4 rounded-xl text-xs sm:text-sm flex flex-col gap-1 text-[#273e2a]">
                          <p>
                            <span className="font-semibold text-[#de2b2b]">
                              Salaire :
                            </span>{" "}
                            {job.salary}
                          </p>
                          <p>
                            <span className="font-semibold text-[#de2b2b]">
                              Horaire :
                            </span>{" "}
                            {job.schedule}
                          </p>
                          {job.experience && (
                            <p>
                              <span className="font-semibold text-[#de2b2b]">
                                Expérience :
                              </span>{" "}
                              {job.experience}
                            </p>
                          )}
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => handleApply(job.title)}
                            className="inline-block px-5 py-2 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] text-xs uppercase tracking-widest font-semibold rounded-full shadow transition-all duration-300"
                          >
                            Postuler pour ce poste
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Application Drawer / Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#f8efdc] text-[#de2b2b] w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border-2 border-[#de2b2b]/20">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-2xl font-light hover:opacity-70 w-8 h-8 flex items-center justify-center"
              aria-label="Fermer"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-12">
                <span className="font-ivy text-3xl font-semibold text-[#de2b2b] block mb-4">
                  Merci pour votre candidature!
                </span>
                <p className="text-[#7c2627] mb-6">
                  Notre équipe des ressources humaines examinera votre profil avec
                  attention et vous contactera rapidement.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 bg-[#de2b2b] text-[#f8efdc] rounded-full text-xs uppercase tracking-widest font-semibold"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-1 block">
                  Candidature en ligne
                </span>
                <h3 className="font-ivy text-2xl sm:text-3xl font-semibold mb-6">
                  Postuler : {selectedJob}
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-4 text-xs sm:text-sm font-filson"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                        Prénom *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jean"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                      />
                    </div>
                    <div>
                      <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                        Nom *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Tremblay"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                      Courriel *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jean.tremblay@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="(418) 555-0123"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                      Poste désiré
                    </label>
                    <select
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                    >
                      {JOBS.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="Candidature spontanée">
                        Candidature spontanée
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase font-semibold text-[11px] mb-1 text-[#7c2627]">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Parlez-nous brièvement de vous et de vos motivations..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#de2b2b]/30 bg-white text-[#273e2a] focus:outline-none focus:border-[#de2b2b]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] rounded-full text-xs uppercase tracking-widest font-semibold shadow transition-colors"
                    >
                      Envoyer ma candidature
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

