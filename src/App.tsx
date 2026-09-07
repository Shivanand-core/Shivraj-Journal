/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header, { NavTab } from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CurrentIssueSection from './components/CurrentIssueSection';
import ResearchRepositorySection from './components/ResearchRepositorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import IssueReaderModal from './components/IssueReaderModal';
import CitationModal from './components/CitationModal';
import SubmitManuscriptModal from './components/SubmitManuscriptModal';
import DedicatedArticlePage from './components/DedicatedArticlePage';
import { JournalArticle } from './types';
import { INAUGURAL_ARTICLES, getArticleBySlug } from './data/journalData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [dedicatedArticle, setDedicatedArticle] = useState<JournalArticle | null>(null);

  const [readerModalOpen, setReaderModalOpen] = useState(false);
  const [selectedArticleForReader, setSelectedArticleForReader] = useState<JournalArticle | null>(null);

  const [citationModalOpen, setCitationModalOpen] = useState(false);
  const [selectedArticleForCitation, setSelectedArticleForCitation] = useState<JournalArticle | null>(null);

  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);

  // Sync URL for dedicated article routing and back/forward browser history
  useEffect(() => {
    const parseRouteFromLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      let slug: string | null = null;
      if (hash.startsWith('#/articles/')) {
        slug = hash.replace('#/articles/', '').split('/')[0].split('?')[0];
      } else if (path.includes('/articles/')) {
        const parts = path.split('/articles/');
        slug = parts[1]?.split('/')[0].split('?')[0] || null;
      }

      if (slug) {
        const found = getArticleBySlug(slug);
        if (found) {
          setDedicatedArticle(found);
          setReaderModalOpen(false);
          return;
        }
      }

      // If no article in path/hash, or navigating back home
      if (!path.includes('/articles/') && !hash.startsWith('#/articles/')) {
        setDedicatedArticle(null);
      }
    };

    parseRouteFromLocation();

    window.addEventListener('popstate', parseRouteFromLocation);
    window.addEventListener('hashchange', parseRouteFromLocation);
    return () => {
      window.removeEventListener('popstate', parseRouteFromLocation);
      window.removeEventListener('hashchange', parseRouteFromLocation);
    };
  }, []);

  // Handlers
  const handleOpenInauguralIssue = () => {
    setSelectedArticleForReader(null); // Shows volume cover / preface
    setReaderModalOpen(true);
  };

  const handleOpenDigitalReaderForArticle = (article?: JournalArticle) => {
    if (article) {
      setSelectedArticleForReader(article);
    }
    setReaderModalOpen(true);
  };

  const handleOpenDedicatedArticle = (article: JournalArticle) => {
    setDedicatedArticle(article);
    setReaderModalOpen(false);
    window.location.hash = `#/articles/${article.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToRepository = () => {
    setDedicatedArticle(null);
    setActiveTab('repository');
    if (window.location.hash.startsWith('#/articles')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: NavTab) => {
    setDedicatedArticle(null);
    setActiveTab(tab);
    if (window.location.hash.startsWith('#/articles')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCitation = (article: JournalArticle) => {
    setSelectedArticleForCitation(article);
    setCitationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Institutional Top Bar & 2. Main Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenReaderModal={handleOpenInauguralIssue}
      />

      <main className="flex-1">
        {/* Dedicated Article Page (Rendered when an article is open) */}
        {dedicatedArticle ? (
          <DedicatedArticlePage
            article={dedicatedArticle}
            onBackToRepository={handleBackToRepository}
            onSelectArticle={handleOpenDedicatedArticle}
            onOpenCitationModal={handleOpenCitation}
            onOpenDigitalReader={handleOpenDigitalReaderForArticle}
          />
        ) : (
          <>
            {/* View 1: Home Page (Complete 11 Sections in exact chronological layout) */}
            {activeTab === 'home' && (
              <div className="space-y-0">
                {/* 3. Hero Section & 4. Academic Value / Features Section */}
                <Hero
                  onReadInauguralClick={handleOpenInauguralIssue}
                  onExploreIssueClick={() => {
                    const el = document.getElementById('repository');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />

                {/* 5. About the Journal & 6. Key Focus Areas */}
                <AboutSection isStandalonePage={false} />

                {/* 7. Current Issue (Inaugural Issue Vol. 1, Issue 1, Jan-June 2026) & 8. What to Expect */}
                <CurrentIssueSection
                  isStandalonePage={false}
                  onOpenVolumeReader={handleOpenInauguralIssue}
                />

                {/* 9. Curated Articles / Research Repository */}
                <ResearchRepositorySection
                  onSelectArticle={handleOpenDedicatedArticle}
                  onOpenCitationModal={handleOpenCitation}
                />

                {/* 10. Contact */}
                <ContactSection isStandalonePage={false} />
              </div>
            )}

            {/* View 2: Dedicated About Page */}
            {activeTab === 'about' && (
              <AboutSection isStandalonePage={true} />
            )}

            {/* View 3: Dedicated Current Issue Page */}
            {activeTab === 'current-issue' && (
              <div className="space-y-0">
                <CurrentIssueSection
                  isStandalonePage={true}
                  onOpenVolumeReader={handleOpenInauguralIssue}
                />
                <ResearchRepositorySection
                  onSelectArticle={handleOpenDedicatedArticle}
                  onOpenCitationModal={handleOpenCitation}
                />
              </div>
            )}

            {/* View 4: Dedicated Research Repository Page */}
            {activeTab === 'repository' && (
              <div className="space-y-0">
                <div className="relative bg-[#071322] text-white py-16 sm:py-20 overflow-hidden border-b-4 border-[#C5A059]">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/src/assets/images/academic_library_bg_1788796629847.jpg"
                      alt="Academic Repository Library"
                      className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter brightness-75"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/85 to-[#071322]/70" />
                  </div>
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                      Research Repository
                    </h1>
                    <div className="w-20 h-0.5 bg-[#C5A059] mx-auto" />
                    <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#E0C58A] font-medium pt-1">
                      PEER-REVIEWED MANUSCRIPTS & SCHOLARLY ARCHIVE
                    </p>
                  </div>
                </div>
                <ResearchRepositorySection
                  onSelectArticle={handleOpenDedicatedArticle}
                  onOpenCitationModal={handleOpenCitation}
                />
              </div>
            )}

            {/* View 5: Dedicated Contact Page */}
            {activeTab === 'contact' && (
              <ContactSection isStandalonePage={true} />
            )}
          </>
        )}
      </main>

      {/* 11. Institutional Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Interactive Modals */}
      <IssueReaderModal
        isOpen={readerModalOpen}
        onClose={() => setReaderModalOpen(false)}
        initialArticle={selectedArticleForReader}
        onOpenCitation={(article) => {
          setSelectedArticleForCitation(article);
          setCitationModalOpen(true);
        }}
        onOpenDedicatedArticle={handleOpenDedicatedArticle}
      />

      <CitationModal
        isOpen={citationModalOpen}
        onClose={() => setCitationModalOpen(false)}
        article={selectedArticleForCitation || INAUGURAL_ARTICLES[0]}
      />

      <SubmitManuscriptModal
        isOpen={submissionModalOpen}
        onClose={() => setSubmissionModalOpen(false)}
      />
    </div>
  );
}
