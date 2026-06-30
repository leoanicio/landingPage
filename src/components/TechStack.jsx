import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { Cloud, Sparkles, Server, LayoutGrid } from 'lucide-react';

export default function TechStack() {
  const { t } = useLocale();

  const skillGroups = [
    {
      title: { en: 'Cloud Architecture & FinOps', pt: 'Arquitetura em Nuvem & FinOps' },
      icon: <Cloud className="group-icon" size={24} />,
      skills: [
        { en: 'AWS Certified Solutions Architect', pt: 'AWS Certified Solutions Architect' },
        { en: 'Event-Driven Systems', pt: 'Sistemas Orientados a Eventos' },
        { en: 'Cloud Cost Optimization / FinOps', pt: 'Otimização de Custos em Nuvem / FinOps' },
        { en: 'Infrastructure for AI SaaS Products', pt: 'Infraestrutura para Produtos SaaS com IA' }
      ]
    },
    {
      title: { en: 'AI Engineering', pt: 'Engenharia de IA' },
      icon: <Sparkles className="group-icon" size={24} />,
      skills: [
        { en: 'AI Agents & LangChain', pt: 'Agentes de IA & LangChain' },
        { en: 'RAG Architectures', pt: 'Arquiteturas RAG' },
        { en: 'OCR & Large Document Processing', pt: 'OCR & Processamento de Documentos Longos' },
        { en: 'LLM Orchestration', pt: 'Orquestração de LLMs' },
      ]
    },
    {
      title: { en: 'Backend & Distributed Systems', pt: 'Backend & Sistemas Distribuídos' },
      icon: <Server className="group-icon" size={24} />,
      skills: [
        { en: 'Python & TypeScript', pt: 'Python & TypeScript' },
        { en: 'Serverless APIs & Async Workflows', pt: 'APIs Serverless & Workflows Assíncronos' },
        { en: 'PostgreSQL, MongoDB & Redis', pt: 'PostgreSQL, MongoDB & Redis' },
        { en: 'Observability & Error Tracking', pt: 'Observabilidade & Rastreamento de Erros' }
      ]
    },
    {
      title: { en: 'Full-Stack Product Engineering', pt: 'Engenharia de Produto Full-Stack' },
      icon: <LayoutGrid className="group-icon" size={24} />,
      skills: [
        { en: 'React.js & Vue.js', pt: 'React.js & Vue.js' },
        { en: 'Admin Panels & Internal Tools', pt: 'Painéis Administrativos & Ferramentas Internas' },
        { en: 'Data-Heavy Dashboards', pt: 'Dashboards com Alta Densidade de Dados' },
        { en: 'End-to-End SaaS Delivery', pt: 'Entrega SaaS de Ponta a Ponta' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">
          {t({ en: 'Architectural Tech Stack', pt: 'Stack Tecnológica' })}
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="glass-card skill-card">
              <div className="card-header-row">
                {group.icon}
                <h3>{t(group.title)}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <span className="skill-bullet"></span>
                    {t(skill)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
