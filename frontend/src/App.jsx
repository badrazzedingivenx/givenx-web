import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import fileBg from './assets/file.png';
import xBg from './assets/X.png';
import videoBg from './assets/Futuristic interface.mp4';
import ctaVideoBg from './assets/Abstract Blue Liquid Fluid.mp4';
import logoTech2 from './assets/Givenx-Tech 2.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';

const industriesData = [
  { name: "PME/PMI", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
  { name: "Startups", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> },
  { name: "E-commerce", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> },
  { name: "Finance", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
  { name: "Logistique", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> },
  { name: "Industrie", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> },
  { name: "Education", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
  { name: "ONG/secteur public", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }
];

const servicesData = [
  {
    title: "Conseil Tech & Audit Technique",
    desc: "Évaluez votre infrastructure, identifiez les failles et recevez une feuille de route stratégique pour optimiser vos systèmes.",
    iconClass: "icon-orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    )
  },
  {
    title: "Ingénierie Logicielle",
    desc: "Applications web, mobiles et SaaS conçues avec les meilleures pratiques de développement.",
    iconClass: "icon-yellow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    title: "IA & Solutions Data",
    desc: "Exploitez la puissance de l'IA et du Big Data pour des décisions plus intelligentes.",
    iconClass: "icon-white",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /></svg>
    )
  },
  {
    title: "Automatisation & Intégration",
    desc: "Optimisez vos processus métiers grâce à l'automatisation et l'intégration fluide de vos outils.",
    iconClass: "icon-purple",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    )
  },
  {
    title: "Cloud & DevOps",
    desc: "Déployez et gérez vos applications de manière évolutive et sécurisée avec nos solutions Cloud.",
    iconClass: "icon-green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
    )
  },
  {
    title: "Cybersécurité & Audit",
    desc: "Protégez vos données et vos systèmes contre les menaces numériques avec nos audits de sécurité.",
    iconClass: "icon-blue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  }
];

const testimonialsData = [
  {
    rating: 5,
    text: "“Collaboration efficace et fluide avec l'agence, garantissant des livrables de haute qualité dans le respect des délais.”",
    name: "John Smith",
    role: "CEO",
    company: "Innovate Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede"
  },
  {
    rating: 5,
    text: "“Une équipe professionnelle, réactive et pleinement engagée, qui a su anticiper les besoins et proposer des solutions pertinentes avec une grande efficacité.”",
    name: "Emily Davis",
    role: "Product Manager",
    company: "Nexus Digital",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=ffd5dc"
  },
  {
    rating: 5,
    text: "“Grâce à Givnex Group, l'échange a été clair et la collaboration immédiatement productive.”",
    name: "David Lee",
    role: "Founder",
    company: "GreenLeaf Enterprises",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=b6e3f4"
  }
];

const featuresInfoData = [
  {
    title: "Tableau de conception",
    desc: "Demandez autant de designs que vous le souhaitez sur votre propre tableau de design.",
    icon: (
      <svg className="anim-kanban" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <rect className="kb-item kb-1" x="13" y="7" width="4" height="3" rx="1" />
        <rect className="kb-item kb-2" x="12" y="14" width="5" height="3" rx="1" />
        <rect className="kb-item kb-3" x="5" y="7" width="2" height="5" rx="1" />
      </svg>
    )
  },
  {
    title: "Livraison ultra-rapide",
    desc: "Recevez vos designs un par un en seulement quelques jours.",
    icon: (
      <svg className="anim-gauge" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" /><path d="M8 12h.01" /><path d="M16 12h.01" /><path d="M9.17 9.17h.01" /><path d="M14.83 9.17h.01" />
        <g className="gauge-needle" style={{ transformOrigin: "12px 12px" }}>
          <path d="M12 12l3-3" />
        </g>
        <path d="M8 18h8" />
      </svg>
    )
  },
  {
    title: "Taux fixe mensuel",
    desc: "Pas de surprises. Payez le même prix fixe chaque mois.",
    icon: (
      <svg className="anim-cycle" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g className="cycle-arrow" style={{ transformOrigin: "12px 12px" }}>
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
          <path d="M16 21v-5h-5"></path>
        </g>
        <path d="M12 8v8"></path>
        <path d="M14 10h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2"></path>
      </svg>
    )
  },
  {
    title: "Conceptions primées",
    desc: "Laissez vos clients bouche bée avec des designs primés.",
    icon: (
      <svg className="anim-award" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18v3m12-3v3M4 21h4m8 0h4M6 13C10 16 14 16 18 13M6 9v9m12-9v9M6 7a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
        <g className="award-star" style={{ transformOrigin: "12px 8px" }}>
          <path d="M12 4L11 6L9 6.5L10.5 8L10 10L12 9L14 10L13.5 8L15 6.5L13 6Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  {
    title: "Révisions illimitées",
    desc: "Révisez vos designs jusqu'à ce que vous soyez complètement satisfait. Sans limites.",
    icon: (
      <svg className="anim-brush" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g className="brush-head" style={{ transformOrigin: "14.5px 17.5px" }}>
          <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
          <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
          <path d="M14.5 17.5 4.5 15"></path>
        </g>
      </svg>
    )
  },
  {
    title: "Unique et tout à vous",
    desc: "Tous vos designs sont conçus spécialement pour vous.",
    icon: (
      <svg className="anim-print" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M11.5 3A8.5 8.5 0 0 0 10 12a8 8 0 0 0 4 6" />
        <path d="M12 12a4 4 0 0 0 0-8" />
        <path d="M14 12v.01" /><path d="M15 17c.5-1.5 1-3 1-5a4 4 0 0 0-4-4" />
        <path d="M15 22a8.5 8.5 0 0 0-3-19" />
        <path d="M18 19v-5a6 6 0 0 0-6-6" />
        <path d="M21 16c-.5 1-1 2-2.5 2" />
      </svg>
    )
  }
];

const statsData = [
  { value: "500", suffix: "+", label: "Clients satisfaits", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polygon points="16 3 17 5 19 5.5 17.5 7 18 9 16 8 14 9 14.5 7 13 5.5 15 5"></polygon></svg> },
  { value: "100", suffix: "%", label: "Solutions Sur-Mesure", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-3-3-9 9 3 3 9-9z" /><path d="M3 21v-3l9-9 3 3-9 9H3z" /><path d="M15 6l3 3" /></svg> },
  { value: "500", suffix: "+", label: "Projets Réalisés", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg> },
  { value: "21", suffix: "+", label: "Années d'Experience", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path><path d="M9 8l2 2 3-3"></path></svg> }
];

const faqData = [
  {
    question: "Pourquoi Givnex Group au lieu d'un designer à temps plein ?",
    answer: "Engager un designer senior à plein temps coûte cher et prend du temps. Avec GivenX, vous accédez à une équipe entière d'experts pour une fraction du prix, avec la flexibilité de mettre en pause ou d'annuler votre abonnement à tout moment."
  },
  {
    question: "Comment se passe le progrès de Givnex Group ?",
    answer: "Nous utilisons un tableau partagé où vous pouvez suivre chaque étape de votre design, de la conception à la livraison finale, avec des mises à jour quotidiennes."
  },
  {
    question: "Comment demander un design ?",
    answer: "C'est simple ! Une fois abonné, vous ajoutez vos demandes directement sur votre tableau dédié. Nous traitons les demandes une par une de manière séquentielle."
  },
  {
    question: "Et si je n'aime pas le design ?",
    answer: "Pas de panique ! Nous offrons des révisions illimitées. Nous continuerons à affiner le design jusqu'à ce que vous soyez 100% satisfait du résultat."
  },
  {
    question: "Y a-t-il un remboursement ?",
    answer: "En raison de la haute qualité et de la nature de notre travail, nous n'offrons pas de remboursement. Cependant, nous nous engageons à réviser le travail jusqu'à votre entière satisfaction."
  }
];

const solutionsRow1 = [
  { name: "Digital Products", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> },
  { name: "Logos", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> },
  { name: "Landing Pages", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { name: "Websites", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="7" x2="22" y2="7"></line></svg> }
];

const solutionsRow2 = [
  { name: "Pitch Decks", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { name: "Mobile Apps", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
  { name: "Email Design", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  { name: "Product Design", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
  { name: "Social Media", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> }
];

function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const industriesRef = useRef(null);

  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isContactAlertOpen, setIsContactAlertOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', company: '', text: '', rating: 5 });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const review = {
      ...newReview,
      text: `“${newReview.text}”`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newReview.name}&backgroundColor=${randomColor}`
    };
    setTestimonials([review, ...testimonials]);
    setIsReviewOpen(false);
    setIsAlertOpen(true);
    setNewReview({ name: '', role: '', company: '', text: '', rating: 5 });

    setTimeout(() => setIsAlertOpen(false), 4000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsContactAlertOpen(true);
    e.target.reset();
    setTimeout(() => setIsContactAlertOpen(false), 4000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsIndustriesVisible(true);
      }
    }, { threshold: 0.1 });

    if (industriesRef.current) {
      observer.observe(industriesRef.current);
    }

    return () => {
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Navigation Bar - Made Sticky/Fixed in CSS */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logoTech2} alt="GivenX Tech" className="header-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#features">Pourquoi Nous</a></li>
        </ul>
        <a href="#contact" className="btn-contact">Contactez-nous</a>
      </nav>

      {/* Hero Section */}
      <div id="accueil" className="main-container">
        {/* Background Images */}
        <img src={fileBg} className="bg-image file-bg" alt="" />
        <img src={xBg} className="bg-image x-bg" alt="" />

        <main className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            Disponible pour de nouveaux projets
          </div>

          <h1 className="hero-title">
            Transformez votre entreprise avec des<br />
            solutions digitales intelligentes<span className="cursor"></span>
          </h1>

          <p className="hero-subtitle">
            Givenx Tech accompagne les entreprises dans leur transformation digitale avec des solutions sur mesure en IA, développement logiciel, cybersécurité et cloud.
          </p>

          <div className="hero-cta" style={{ marginTop: '2.5rem' }}>
            <a href="#features" className="btn-contact">La différence commence ici</a>

          </div>
        </main>
      </div>

      {/* Video Section */}
      <section className="video-section">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <img src={logoTech2} alt="GivenX Tech Large" className="big-logo" />
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="services-section">
        {/* Geometric Background Shapes matching design */}
        <div className="bg-glow-container">
          <div className="bg-shape bg-shape-left"></div>
          <div className="bg-shape bg-shape-right"></div>
        </div>

        <div className="status-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '1.5rem' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Fonctionnalités
        </div>

        <h2 className="services-title">Nos Services</h2>
        <p className="services-subtitle">Des solutions complètes pour votre transformation digitale</p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-header">
                <div className={`service-icon-wrapper ${service.iconClass}`}>
                  {service.icon}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-arrow"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Clients Section */}
      <section className="clients-section">
        <h2 className="clients-title">Nos designs sont présentés sur :</h2>

        <div className="marquee-container">
          <div className="marquee-track scroll-left">
            <img src={img1} alt="Client 1" /><img src={img2} alt="Client 2" /><img src={img3} alt="Client 3" /><img src={img4} alt="Client 4" /><img src={img5} alt="Client 5" />
            <img src={img1} alt="Client 1" /><img src={img2} alt="Client 2" /><img src={img3} alt="Client 3" /><img src={img4} alt="Client 4" /><img src={img5} alt="Client 5" />
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track scroll-right">
            <img src={img6} alt="Client 6" /><img src={img7} alt="Client 7" /><img src={img8} alt="Client 8" /><img src={img9} alt="Client 9" /><img src={img10} alt="Client 10" />
            <img src={img6} alt="Client 6" /><img src={img7} alt="Client 7" /><img src={img8} alt="Client 8" /><img src={img9} alt="Client 9" /><img src={img10} alt="Client 10" />
          </div>
        </div>

        <p className="clients-subtitle">(Pourquoi les clients aiment Givenx Tech)</p>
      </section>



      {/* Industries Section */}
      <section
        id="industries"
        className={`industries-section ${isIndustriesVisible ? 'in-view' : ''}`}
        ref={industriesRef}
      >
        <div className="status-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '1.5rem' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Secteurs d'activité
        </div>
        <h2 className="industries-title">Les industries que nous servons</h2>
        <p className="industries-subtitle">Notre expertise s'étend sur de multiples secteurs pour accélérer votre croissance</p>

        <div className="industries-grid">
          {industriesData.map((industry, index) => (
            <div className="industry-card" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="industry-icon-wrapper">
                {industry.icon}
              </div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="status-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '2rem' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Témoignage
        </div>

        <h2 className="testimonials-title">
          Avis des clients sur <span className="text-dim">Travail, Utilisabilité et Conception.</span>
        </h2>

        <p className="testimonials-subtitle">
          Écoutez nos clients satisfaits ! Découvrez comment nous les avons aidés à atteindre leurs objectifs et à créer un impact durable.
        </p>

        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <button className="btn-contact" onClick={() => setIsReviewOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
            Ajouter un avis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar-wrapper">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              </div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-separator">•</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
                <div className="testimonial-company">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="status-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '2rem' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Features
        </div>

        <h2 className="features-title">
          Raisons pour lesquelles <span className="text-dim">vous allez nous aimer.</span>
        </h2>

        <p className="features-subtitle">
          Une fois que vous essayez Givnex Group, vous n'irez nulle part ailleurs pour le design. Sérieusement.
        </p>

        <div className="features-grid">
          {featuresInfoData.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions / Marquee Section */}
      <section className="solutions-section">
        <div className="status-badge solution-badge">
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Solution
        </div>

        <h2 className="solutions-title">
          Tous vos besoins <span className="text-dim">en matière de design.</span>
        </h2>

        <p className="solutions-subtitle">
          Diriger une entreprise prospère signifie plus qu'avoir simplement un site web. C'est pourquoi nous couvrons tous vos besoins en matière de design, afin que vous n'ayez pas à aller ailleurs.
        </p>

        <div className="solution-marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track scroll-left fast-scroll">
              {[...solutionsRow1, ...solutionsRow1, ...solutionsRow1, ...solutionsRow1].map((item, index) => (
                <div className="solution-pill" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-container" style={{ marginTop: '1rem' }}>
            <div className="marquee-track scroll-right fast-scroll">
              {[...solutionsRow2, ...solutionsRow2, ...solutionsRow2, ...solutionsRow2].map((item, index) => (
                <div className="solution-pill" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {/* Sleek Professional Spotlight Background */}
        <div className="stats-glow"></div>

        <div className="status-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '2rem' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Fonctionnalités
        </div>

        <h2 className="stats-title">
          Unlimited Design Features<br />
          <span className="text-dim">Delivered In A Second!</span>
        </h2>

        <p className="stats-subtitle">
          Get unlimited design features that give you the freedom <br />to create without boundaries.
        </p>

        <div className="stats-grid-wrapper">
          <div className="stats-x-center">X</div>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon-circle">
                  {stat.icon}
                </div>
                <div className="stat-number">
                  {stat.value}<span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              key={index}
            >
              <div
                className="faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <video className="cta-bg-video" autoPlay loop muted playsInline>
          <source src={ctaVideoBg} type="video/mp4" />
        </video>
        <div className="cta-content">
          <div className="status-badge cta-badge">
            <span className="status-dot green-dot"></span>
            Disponible pour de nouveaux projets
          </div>
          <h2 className="cta-title">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="cta-subtitle">
            Contactez-nous aujourd'hui pour une consultation gratuite.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info-wrapper">
            <h2 className="contact-title">Contactez-nous</h2>
            <p className="contact-subtitle">Prêt à démarrer votre projet ? Remplissez le formulaire et nous vous contacterons rapidement.</p>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label">Nom complet</label>
                <input type="text" className="form-input" placeholder="Votre nom complet" required />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="votre@email.com" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Entreprise</label>
                  <input type="text" className="form-input" placeholder="Nom de votre entreprise" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Secteur</label>
                  <select className="form-select" defaultValue="" required>
                    <option value="" disabled>Sélectionnez un secteur</option>
                    <option value="tech">Technologie / IT</option>
                    <option value="finance">Finance / Assurance</option>
                    <option value="sante">Santé</option>
                    <option value="education">Éducation / Formation</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="logistique">Logistique / Transport</option>
                    <option value="industrie">Industrie</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Envoyer le message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9666874838634!2d-7.643445524675704!3d33.55428614385966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2df26c11b01%3A0x6b637996c5aa32a5!2sTechnopark!5e0!3m2!1sfr!2sma!4v1703666249764!5m2!1sfr!2sma"
              className="contact-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maps Technopark Casablanca"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-main">
          <div className="footer-left-pane">
            <img src={logoTech2} alt="GivenX Group" className="footer-logo-img" />
            <p className="footer-desc">Votre partenaire technologique de confiance.</p>
          </div>

          <div className="footer-right-pane">
            <div className="footer-col">
              <h4 className="footer-col-title">Get in touch</h4>
              <ul className="footer-menu">
                <li><a href="mailto:contact@givenxtech.com">contact@givenxtech.com</a></li>
                <li><a href="tel:+212600000000">+212 600 000 000</a></li>
                <li><span className="footer-text">Casablanca, Maroc</span></li>
              </ul>
              <div className="footer-socials-mini">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-menu">
                <li><a href="#services">Services</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#features">Pourquoi nous</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GivenX Group. Tous droits reserves.</p>
        </div>
      </footer>

      {showScrollTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Retour en haut">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}

      {/* Review Modal */}
      {isReviewOpen && (
        <div className="modal-overlay form-animation-overlay" onClick={() => setIsReviewOpen(false)}>
          <div className="modal-content form-animation-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsReviewOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="modal-title">Ajouter un avis</h3>
            <form onSubmit={handleReviewSubmit} className="contact-form" style={{ marginTop: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Nom complet</label>
                <input type="text" className="form-input" required value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} placeholder="John Doe" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Rôle</label>
                  <input type="text" className="form-input" required value={newReview.role} onChange={(e) => setNewReview({ ...newReview, role: e.target.value })} placeholder="CEO" />
                </div>
                <div className="form-group">
                  <label className="form-label">Entreprise</label>
                  <input type="text" className="form-input" required value={newReview.company} onChange={(e) => setNewReview({ ...newReview, company: e.target.value })} placeholder="Company Inc." />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Note</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill={star <= newReview.rating ? "#1AD8E8" : "none"}
                      stroke={star <= newReview.rating ? "#1AD8E8" : "rgba(255,255,255,0.3)"}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Avis</label>
                <textarea className="form-textarea" required value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} placeholder="Votre avis..."></textarea>
              </div>
              <button type="submit" className="btn-submit" style={{ width: '100%' }}>
                Ajouter l'avis
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Alert Modal */}
      {isAlertOpen && (
        <div className="modal-overlay form-animation-overlay" onClick={() => setIsAlertOpen(false)} style={{ zIndex: 1001 }}>
          <div className="modal-content form-animation-content" style={{ textAlign: 'center', maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#10B981' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 className="modal-title" style={{ fontSize: '1.4rem' }}>Avis envoyé !</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Votre commentaire a été envoyé avec succès vers l'administrateur.
            </p>
            <button className="btn-contact" onClick={() => setIsAlertOpen(false)} style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Contact Success Alert Modal */}
      {isContactAlertOpen && (
        <div className="modal-overlay form-animation-overlay" onClick={() => setIsContactAlertOpen(false)} style={{ zIndex: 1001 }}>
          <div className="modal-content form-animation-content" style={{ textAlign: 'center', maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(26, 216, 232, 0.1)', border: '1px solid rgba(26, 216, 232, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#1AD8E8' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
            <h3 className="modal-title" style={{ fontSize: '1.4rem' }}>Message envoyé !</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Votre message a été envoyé avec succès. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <button className="btn-contact" onClick={() => setIsContactAlertOpen(false)} style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
