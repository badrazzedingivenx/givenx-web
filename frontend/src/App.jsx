import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactPage from './ContactPage';
import './index.css';
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
import probBg from './assets/prob.jfif';
import auditBg from './assets/audit.jfif';
import strategieBg from './assets/strategie.jfif';
import devBg from './assets/dev.jfif';
import supportBg from './assets/support.jfif';
import imgEcommerce from './assets/e-commerce.png';
import imgEducation from './assets/education.png';
import imgFinance from './assets/finance.png';
import imgIndustrie from './assets/industrie.png';
import imgLogistique from './assets/logistique.png';
import imgOng from './assets/ONG.png';
import imgPme from './assets/pme.png';
import collaborationImg from './assets/collaboration.jpg';
import burjImg from './assets/burj-khalifa.jpg';
import imgStartups from './assets/startups.png';
import imgAbout from './assets/Gemini_Photoroom.png';
import CardSwap, { Card } from './CardSwap';
import TrueFocus from './TrueFocus';
import FloatingLines from './FloatingLines';


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
  },
  {
    rating: 5,
    text: "“Un accompagnement sur-mesure et une équipe à l'écoute de nos moindres exigences.”",
    name: "Sophie Dupont",
    role: "CTO",
    company: "TechNova",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=ffdfbf"
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

const approachSteps = [
  { number: "1", title: "Problème", subtitle: "Comprendre vos défis", bg: probBg },
  { number: "2", title: "Audit", subtitle: "Analyser vos systèmes", bg: auditBg },
  { number: "3", title: "Stratégie", subtitle: "Concevoir la solution", bg: strategieBg },
  { number: "4", title: "Implémentation", subtitle: "Développer et déployer", bg: devBg },
  { number: "5", title: "Support", subtitle: "Maintenir et améliorer", bg: supportBg }
];

const approachBenefits = [
  {
    title: "Solutions Sur Mesure",
    desc: "Chaque projet est unique. Nous concevons des solutions adaptées à vos besoins spécifiques."
  },
  {
    title: "Sécurité Avant Tout",
    desc: "La sécurité est intégrée dès la conception dans tous nos projets."
  },
  {
    title: "Performance Optimale",
    desc: "Des systèmes rapides, fiables et scalables pour soutenir votre croissance."
  },
  {
    title: "Expertise Technique",
    desc: "Une équipe d'ingénieurs expérimentés maîtrisant les technologies de pointe."
  }
];

const valuesData = [
  { title: "Innovation", desc: "Nous repoussons les limites de la technologie." },
  { title: "Sécurité", desc: "La protection des données est notre priorité." },
  { title: "Excellence", desc: "Nous visons la perfection dans chaque projet." },
  { title: "Transparence", desc: "Communication claire et honnête à chaque étape." },
  { title: "Performance", desc: "Des résultats mesurables et un impact réel." },
  { title: "Orientation Client", desc: "Votre succès est notre objectif principal." }
];

function MainLanding() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isHeroVideoVisible, setIsHeroVideoVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const industriesRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const approachRef = useRef(null);
  const heroVideoRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isContactAlertOpen, setIsContactAlertOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', company: '', text: '', rating: 5 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', sector: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (testimonials.length <= 3) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsTestimonialsVisible(true);
      } else {
        setIsTestimonialsVisible(false);
      }
    }, { threshold: 0.3 });

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const getVisibleTestimonials = () => {
    if (testimonials.length <= 3) return testimonials;
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentTestimonialIndex + i) % testimonials.length]);
    }
    return visible;
  };
  const industriesCarouselImages = [
    { src: imgPme, alt: 'PME/PMI' },
    { src: imgStartups, alt: 'Startups' },
    { src: imgEcommerce, alt: 'E-commerce' },
    { src: imgFinance, alt: 'Finance' },
    { src: imgLogistique, alt: 'Logistique' },
    { src: imgIndustrie, alt: 'Industrie' },
    { src: imgEducation, alt: 'Education' },
    { src: imgOng, alt: 'ONG / secteur public' },
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = newReview.name.trim();
    const role = newReview.role.trim();
    const company = newReview.company.trim();
    const textRaw = newReview.text.trim();

    if (!name || !role || !company || !textRaw) return;

    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    const review = {
      ...newReview,
      name,
      role,
      company,
      text: `“${textRaw.replace(/^“|”$/g, '')}”`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=${randomColor}`
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

    const servicesObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsServicesVisible(true);
      }
    }, { threshold: 0.1 });

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    const featuresObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsFeaturesVisible(true);
      }
    }, { threshold: 0.1 });

    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }

    const approachObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsApproachVisible(true);
      }
    }, { threshold: 0.1 });

    if (approachRef.current) {
      approachObserver.observe(approachRef.current);
    }

    const heroVideoObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsHeroVideoVisible(true);
      }
    }, { threshold: 0.1 });

    if (heroVideoRef.current) {
      heroVideoObserver.observe(heroVideoRef.current);
    }

    const ctaObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsCtaVisible(true);
      }
    }, { threshold: 0.1 });

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    const statsObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsStatsVisible(true);
      }
    }, { threshold: 0.1 });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current);
      }
      if (servicesRef.current) {
        servicesObserver.unobserve(servicesRef.current);
      }
      if (featuresRef.current) {
        featuresObserver.unobserve(featuresRef.current);
      }
      if (approachRef.current) {
        approachObserver.unobserve(approachRef.current);
      }
      if (heroVideoRef.current) {
        heroVideoObserver.unobserve(heroVideoRef.current);
      }
      if (ctaRef.current) {
        ctaObserver.unobserve(ctaRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Navigation Bar - Hides after scrolling past hero */}
      <nav className={`navbar ${scrollY > 600 ? 'navbar-hidden' : ''} ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
        <div className="navbar-top-row">
          <div className="logo-section">
            <img src={logoTech2} alt="GivenX Tech" className="header-logo-img" />
          </div>
          <ul className="nav-links nav-links-desktop">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#features">Pourquoi Nous</a></li>
          </ul>
          <Link to="/contact" className="btn-contact btn-contact-desktop">Contactez-nous</Link>
          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'hamburger-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#accueil" onClick={() => setMobileMenuOpen(false)}>Accueil</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a></li>
            <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Pourquoi Nous</a></li>
          </ul>
          <Link to="/contact" className="btn-contact mobile-btn-contact" onClick={() => setMobileMenuOpen(false)}>Contactez-nous</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="accueil" className="main-container">
        {/* Background Images */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'auto' }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={12}
            lineDistance={10}
            bendRadius={10}
            bendStrength={5}
            interactive
            parallax={true}
            parallaxStrength={0.8}
            animationSpeed={1}
            linesGradient={["#00d4ff", "#007bff", "#003366"]}
          />
        </div>

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
      <section className={`video-section ${isHeroVideoVisible ? 'in-view' : ''}`} ref={heroVideoRef}>
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
        {/* Scanner Corners */}


        <div className={`video-overlay-hud ${isHeroVideoVisible ? 'anim-slide-up' : ''}`}>
          <div className="hud-center">
            {/* Rotating HUD Ring */}

            <h2 className="hud-title">GivenX</h2>
            <p className="hud-subtitle">Tech</p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className={`services-section ${isServicesVisible ? 'in-view' : ''}`} ref={servicesRef}>
        {/* Geometric Background Shapes matching design */}
        <div className="bg-glow-container">
          <div className="bg-shape bg-shape-left"></div>
          <div className="bg-shape bg-shape-right"></div>
        </div>

        <div className={`status-badge ${isServicesVisible ? 'anim-slide-up' : ''}`} style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#A0A0A0', marginBottom: '1.5rem', animationDelay: '0.1s' }}>
          <span className="status-dot" style={{ backgroundColor: '#D3D3D3', boxShadow: 'none', animation: 'none' }}></span>
          Fonctionnalités
        </div>

        <h2 className={`services-title ${isServicesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>Nos Services</h2>
        <p className={`services-subtitle ${isServicesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>Des solutions complètes pour votre transformation digitale</p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className={`service-card ${isServicesVisible ? 'anim-slide-up' : ''}`} key={index} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
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


      </section>



      {/* Industries Section */}
      <section
        id="industries"
        className={`industries-section ${isIndustriesVisible ? 'in-view' : ''}`}
        ref={industriesRef}
      >
        <div className="industries-split" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1
        }}>
          {/* Background glowing orbs spread across the whole merged div */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(163, 100, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: -1
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(26, 216, 232, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: -1
          }}></div>

          <div className="industries-left">
            <div className={`${isIndustriesVisible ? 'anim-slide-up' : ''}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '30px',
              width: 'fit-content',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              animationDelay: '0.1s'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A364FF', boxShadow: '0 0 12px #A364FF' }}></span>
              <span style={{ color: '#E0E0E0', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Secteurs d'activité</span>
            </div>

            <div className={`${isIndustriesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <TrueFocus
                sentence={"Les\u00A0industries que nous servons"}
                manualMode={false}
                blurAmount={5}
                borderColor="#1AD8E8"
                glowColor="rgba(26, 216, 232, 0.6)"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>

            <p className={`${isIndustriesVisible ? 'anim-slide-up' : ''}`} style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: 0,
              fontWeight: 400,
              animationDelay: '0.3s'
            }}>
              Notre expertise s'étend sur de multiples secteurs pour accélérer votre croissance grâce à des solutions technologiques intelligentes et sur mesure.
            </p>

            {/* Futuristic accent line */}
            <div style={{
              marginTop: '3rem',
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #1AD8E8, transparent)',
              borderRadius: '2px'
            }}></div>
          </div>

          <div className={`industries-right ${isIndustriesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <CardSwap
              cardDistance={windowWidth < 768 ? 30 : 60}
              verticalDistance={windowWidth < 768 ? 40 : 70}
              delay={3000}
              pauseOnHover={false}
              width={windowWidth < 480 ? 280 : windowWidth < 768 ? 400 : 550}
              height={windowWidth < 480 ? 250 : windowWidth < 768 ? 350 : 500}
            >
              {industriesCarouselImages.map((ind, idx) => {
                const icons = [
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>,
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>
                ];
                return (
                  <Card key={idx} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    background: '#000',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    overflow: 'hidden',
                    width: '104%',
                    height: '90%',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
                  }}>
                    {/* Top Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: '#0d0d0d',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      gap: '10px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e0e0e0' }}>
                        {icons[idx % 3]}
                      </div>
                      <span style={{ color: '#e0e0e0', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.3px' }}>
                        {ind.alt}
                      </span>
                    </div>

                    {/* Image Content */}
                    <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#050505' }}>
                      <img src={ind.src} alt={ind.alt} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} />
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section chat-layout-section" ref={testimonialsRef}>
        
        <div className={`chat-layout-grid ${isTestimonialsVisible ? 'is-visible' : ''}`}>
          {/* Left Column: Chat Bubbles */}
          <div className="chat-bubbles-column">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                className={`chat-bubble-row ${index % 2 === 0 ? 'bubble-align-right' : 'bubble-align-left'} ${isTestimonialsVisible ? 'anim-slide-up' : ''}`}
                key={`${currentTestimonialIndex}-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="chat-bubble">
                  <div className="chat-bubble-left">
                    <img src={testimonial.avatar} alt={testimonial.name} className="chat-avatar" />
                  </div>
                  <div className="chat-bubble-center">
                    <div className="chat-bubble-header-info">
                      <span className="chat-name">{testimonial.name}</span>
                      <span className="chat-company-role">{testimonial.role} @ {testimonial.company}</span>
                    </div>
                    <div className="chat-rating-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#1AD8E8" stroke="#1AD8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      ))}
                    </div>
                    <p className="chat-text">{testimonial.text}</p>
                  </div>
                  <div className="chat-bubble-right">
                    <div className="chat-check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Text Content */}
          <div className="chat-content-column">
            <h2 className="chat-layout-title">
              Avis des clients sur<br /><span className="text-dim">Travail, Utilisabilité et Conception.</span>
            </h2>
            <p className="chat-layout-subtitle">
              Écoutez nos clients satisfaits ! Découvrez comment nous les avons aidés à atteindre leurs objectifs et à créer un impact durable.
            </p>
            <button className="btn-chat-action" onClick={() => setIsReviewOpen(true)}>
              Ajouter un avis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`features-section ${isFeaturesVisible ? 'in-view' : ''}`} ref={featuresRef}>
        <div className="features-top-row">
          <div className="features-text-side">
            <h2 className={`features-main-title ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
              Pourquoi nous <br />choisir ?
            </h2>
            
            <div className={`features-mission-vision ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="mv-block">
                <h4>Notre Mission</h4>
                <p>Permettre aux entreprises de toutes tailles d'accéder à des solutions technologiques de pointe, sécurisées et performantes pour accélérer leur croissance.</p>
              </div>
              <div className="mv-block">
                <h4>Notre Vision</h4>
                <p>Devenir le partenaire technologique de référence pour les entreprises qui veulent innover, se transformer et prospérer dans l'ère digitale.</p>
              </div>
            </div>

            <div className={`features-stats-mini-grid ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="mini-stat-item">
                <h4>99%</h4>
                <p>Précision des solutions IA livrées.</p>
              </div>
              <div className="mini-stat-item">
                <h4>2x</h4>
                <p>Vitesse de développement.</p>
              </div>
            </div>
          </div>

          <div className={`features-image-side ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="features-curved-wrapper">
              <img src={collaborationImg} alt="Collaboration" className="features-img" />
            </div>
          </div>
        </div>

        <div className="features-values-header">
          <div className={`values-label-badge ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <span className="values-label-dot"></span>
            Nos Valeurs
          </div>
          <h3 className={`values-main-title ${isFeaturesVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.5s' }}>
            Ce qui nous <span className="values-title-accent">définit</span>
          </h3>
        </div>

        <div className="features-bottom-grid">
          {[
            {
              title: 'Innovation',
              desc: 'Nous repoussons les limites de la technologie.',
              color: '#A364FF',
              border: 'rgba(163,100,255,0.3)',
              glow: 'rgba(163,100,255,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              ),
            },
            {
              title: 'Sécurité',
              desc: 'La protection des données est notre priorité.',
              color: '#1AD8E8',
              border: 'rgba(26,216,232,0.3)',
              glow: 'rgba(26,216,232,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              ),
            },
            {
              title: 'Excellence',
              desc: 'Nous visons la perfection dans chaque projet.',
              color: '#F59E0B',
              border: 'rgba(245,158,11,0.3)',
              glow: 'rgba(245,158,11,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ),
            },
            {
              title: 'Transparence',
              desc: 'Communication claire et honnête à chaque étape.',
              color: '#10B981',
              border: 'rgba(16,185,129,0.3)',
              glow: 'rgba(16,185,129,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              ),
            },
            {
              title: 'Performance',
              desc: 'Des résultats mesurables et un impact réel.',
              color: '#3B82F6',
              border: 'rgba(59,130,246,0.3)',
              glow: 'rgba(59,130,246,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              ),
            },
            {
              title: 'Orientation Client',
              desc: 'Votre succès est notre objectif principal.',
              color: '#F472B6',
              border: 'rgba(244,114,182,0.3)',
              glow: 'rgba(244,114,182,0.12)',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              ),
            },
          ].map((value, index) => (
            <div
              className={`feature-value-card ${isFeaturesVisible ? 'anim-slide-up' : ''}`}
              key={value.title}
              style={{
                animationDelay: `${0.6 + index * 0.1}s`,
                '--card-color': value.color,
                '--card-border': value.border,
                '--card-glow': value.glow,
              }}
            >
              <div className="fvc-icon" style={{ color: value.color, background: value.glow, boxShadow: `0 0 20px ${value.glow}` }}>
                {value.icon}
              </div>
              <h3 style={{ color: value.color }}>{value.title}</h3>
              <p>{value.desc}</p>
              <div className="fvc-line" style={{ background: `linear-gradient(90deg, ${value.color}, transparent)` }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions / Approach Section */}
      <section className={`solutions-section ${isApproachVisible ? 'in-view' : ''}`} ref={approachRef}>
        <div className="approach-container-split">
          <div className="approach-left-side">
            <div className="approach-image-mask">
              <img src={burjImg} alt="Architecture" className="approach-hero-img" />
            </div>
            <div className="approach-left-content">
              <h2 className={`approach-main-title ${isApproachVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                NOTRE <br />APPROCHE
              </h2>
              <p className={`approach-main-desc ${isApproachVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Nous combinons une méthodologie rigoureuse avec une vision créative pour transformer vos idées en réalités numériques puissantes.
              </p>
            </div>
          </div>

          <div className="approach-right-side">
            <div className="approach-steps-vertical">
              {approachSteps.map((step, index) => (
                <div className={`approach-vertical-item ${isApproachVisible ? 'anim-slide-up' : ''}`} key={step.number} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="approach-icon-circle" style={{ 
                    background: index % 3 === 0 ? 'linear-gradient(135deg, #4F46E5, #3B82F6)' : 
                               index % 3 === 1 ? 'linear-gradient(135deg, #06B6D4, #0891B2)' : 
                               'linear-gradient(135deg, #8B5CF6, #7C3AED)'
                  }}>
                    {step.number}
                  </div>
                  <div className="approach-v-line"></div>
                  <div className="approach-step-text">
                    <h3>{step.title}</h3>
                    <p>{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach Advantages Grid */}
        <div className="approach-advantages-grid">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              ),
              color: '#A364FF',
              glow: 'rgba(163,100,255,0.35)',
              title: 'Solutions Sur Mesure',
              desc: 'Chaque projet est unique. Nous concevons des solutions adaptées à vos besoins spécifiques.',
              delay: '0.5s',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
              color: '#1AD8E8',
              glow: 'rgba(26,216,232,0.35)',
              title: 'Sécurité Avant Tout',
              desc: 'La sécurité est intégrée dès la conception dans tous nos projets.',
              delay: '0.6s',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              ),
              color: '#F59E0B',
              glow: 'rgba(245,158,11,0.35)',
              title: 'Performance Optimale',
              desc: 'Des systèmes rapides, fiables et scalables pour soutenir votre croissance.',
              delay: '0.7s',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                  <line x1="18" y1="8" x2="23" y2="8"/><line x1="20" y1="5" x2="23" y2="3"/>
                  <line x1="20" y1="11" x2="23" y2="13"/>
                </svg>
              ),
              color: '#10B981',
              glow: 'rgba(16,185,129,0.35)',
              title: 'Expertise Technique',
              desc: "Une équipe d'ingénieurs expérimentés maîtrisant les technologies de pointe.",
              delay: '0.8s',
            },
          ].map((adv, i) => (
            <div
              key={adv.title}
              className={`approach-adv-card ${isApproachVisible ? 'anim-slide-up' : ''}`}
              style={{ animationDelay: adv.delay }}
            >
              <div className="approach-adv-icon" style={{ color: adv.color, background: `${adv.glow}`.replace('0.35','0.12'), boxShadow: `0 0 24px ${adv.glow}` }}>
                {adv.icon}
              </div>
              <h3 className="approach-adv-title" style={{ color: adv.color }}>{adv.title}</h3>
              <p className="approach-adv-desc">{adv.desc}</p>
              <div className="approach-adv-line" style={{ background: `linear-gradient(90deg, ${adv.color}, transparent)` }}></div>
            </div>
          ))}
        </div>
      </section>

      <section ref={statsRef} className={`stats-section ${isStatsVisible ? 'in-view' : ''}`}>
        <div className="stats-glow"></div>


        <h2 className="stats-title reveal-text">
          Unlimited Digital <span className="text-dim">Performance</span>
        </h2>

        <p className="stats-subtitle reveal-text" style={{ transitionDelay: '0.2s' }}>
          Nous concevons des écosystèmes digitaux de haute performance qui propulsent votre croissance vers de nouveaux sommets.
        </p>

        <div className="about-section-container reveal-up" style={{ transitionDelay: '0.4s' }}>
          {/* Circular Text Badge */}
          <div className="circular-text-container">
            <svg viewBox="0 0 100 100" width="130" height="130">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="circular-text">
                <textPath xlinkHref="#circlePath">
                  À PROPOS DE NOUS • GIVENX TECH • INNOVATION • DIGITAL •
                </textPath>
              </text>
            </svg>
            <div className="circular-inner-dot"></div>
          </div>
          <div className="about-content-wrapper">
            <div className="about-image-column">
              <div className="about-image-frame">
                <div className="model-viewer-ui">
                  <div className="ui-corner top-left"></div>
                  <div className="ui-corner top-right"></div>
                  <div className="ui-corner bottom-left"></div>
                  <div className="ui-corner bottom-right"></div>
                  <div className="ui-scan-line"></div>
                  <div className="ui-coords">X: 12.4Y: 88.2</div>
                </div>

                <img
                  src={imgAbout}
                  alt="About GivenX"
                  className="about-pop-image-3d"
                />

                <div className="model-glow-effect"></div>
              </div>
            </div>

            <div className="about-text-column">
              <h3 className="about-title-small">À PROPOS DE GIVENX</h3>
              <p className="about-description">
                Nous sommes une équipe passionnée de créatifs et de technologues dédiés à repousser les limites du digital. Notre mission est de transformer vos visions en expériences numériques mémorables et performantes.
              </p>
              <p className="about-description">
                Chaque projet est pour nous une opportunité d'innover et de créer de la valeur durable pour nos partenaires, en alliant design d'avant-garde et expertise technique de pointe.
              </p>

              <div className="about-socials">
                <span className="social-label">Suivez-nous :</span>
                <div className="social-icons-row">
                  <a href="#" className="about-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#" className="about-social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <div className="brand-marquee">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="marquee-item">GivenX</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <span key={i + 10} className="marquee-item">GivenX</span>
          ))}
        </div>
      </div>

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
      <section className={`cta-section ${isCtaVisible ? 'in-view' : ''}`} ref={ctaRef}>
        <video className="cta-bg-video" autoPlay loop muted playsInline>
          <source src={ctaVideoBg} type="video/mp4" />
        </video>
        <div className="cta-content">
          <div className={`status-badge cta-badge ${isCtaVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <span className="status-dot green-dot"></span>
            Disponible pour de nouveaux projets
          </div>
          <h2 className={`cta-title ${isCtaVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            Prêt à transformer votre entreprise ?
          </h2>
          <p className={`cta-subtitle ${isCtaVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            Contactez-nous aujourd'hui pour une consultation gratuite.
          </p>
          <div className={`cta-btn-row ${isCtaVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.45s', display: 'flex', justifyContent: 'center' }}>
            <Link 
              to="/contact" 
              className="cta-contact-btn" 
              onClick={() => window.scrollTo(0, 0)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1rem 2.5rem',
                background: 'rgba(26, 216, 232, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(26, 216, 232, 0.3)',
                borderRadius: '50px',
                color: '#fff',
                fontWeight: '600',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(26, 216, 232, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(26, 216, 232, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(26, 216, 232, 0.4), inset 0 0 20px rgba(26, 216, 232, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(26, 216, 232, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(26, 216, 232, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(26, 216, 232, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(26, 216, 232, 0.3)';
              }}
            >
              Contactez-nous
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1AD8E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>





      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-watermark" aria-hidden="true">GivenX Tech</div>

        <div className="footer-main">
          <div className="footer-top-row">
            <div className="footer-socials-top">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-social-top-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-social-top-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
            <div className="footer-top-line" aria-hidden="true"></div>
          </div>

          <div className="footer-grid" style={{ gridTemplateColumns: '1.2fr 0.8fr 1fr 1.5fr', gap: '2rem' }}>
            <div className="footer-brand">
              <img src={logoTech2} alt="GivenX Group" className="footer-logo-img" />
              <p className="footer-desc">Votre partenaire technologique de confiance.</p>
              <Link to="/contact" className="footer-cta-btn" onClick={() => window.scrollTo(0, 0)}>Contact us</Link>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-menu">
                <li><a href="#services">Services</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#features">Pourquoi nous</a></li>
                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Get in touch</h4>
              <ul className="footer-menu">
                <li><a href="mailto:contact@givenxtech.com">contact@givenxtech.com</a></li>
                <li><a href="tel:+212635166074">+212 635 166 074</a></li>
                <li><span className="footer-text">Casablanca, Maroc</span></li>
              </ul>
            </div>

            {/* Compact Form on the Right */}
            <div className="footer-col" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
              {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0', border: '1px dashed rgba(26, 216, 232, 0.5)', borderRadius: '8px', background: 'rgba(26, 216, 232, 0.05)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1AD8E8" strokeWidth="2" style={{ margin: '0 auto 0.5rem', display: 'block' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, margin: '0 0 0.25rem' }}>Message envoyé</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', margin: 0 }}>Nous vous recontacterons vite.</p>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 className="footer-col-title" style={{ marginBottom: '0.8rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ width: '6px', height: '6px', background: '#1AD8E8', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #1AD8E8' }}></span>
                    Démarrer un projet
                  </h4>
                  <input 
                     type="text" 
                     placeholder="Nom complet" 
                     required 
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     style={{ width: '100%', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email professionnel" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      placeholder="Société" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      style={{ flex: 1, width: '100%', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                    />
                    <input 
                      type="text" 
                      placeholder="Secteur" 
                      required 
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                      style={{ flex: 1, width: '100%', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                    />
                  </div>
                  <textarea 
                    placeholder="Votre message..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', minHeight: '60px', resize: 'none', outline: 'none' }}
                  ></textarea>
                  <button type="submit" className="footer-form-btn" disabled={isSubmitting} style={{ alignSelf: 'flex-end', padding: '0.5rem 1.2rem', background: 'transparent', color: '#1AD8E8', border: '1px solid rgba(26, 216, 232, 0.5)', borderRadius: '50px', fontWeight: '500', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', transition: 'all 0.3s ease' }}>
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                    {!isSubmitting && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
                  </button>
                </form>
              )}
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
          <div className="modal-content form-animation-content confirm-modal" style={{ textAlign: 'center', maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
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
          <div className="modal-content form-animation-content confirm-modal" style={{ textAlign: 'center', maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
