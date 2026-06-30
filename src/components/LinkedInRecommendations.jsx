import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import recommendations from '../data/linkedinRecommendations.json';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Quote,
  UserRound,
} from 'lucide-react';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function RecommendationAvatar({ avatarUrl, name }) {
  if (avatarUrl) {
    return <img className="recommendation-avatar" src={avatarUrl} alt={name} />;
  }

  return (
    <div className="recommendation-avatar recommendation-avatar-fallback" aria-hidden="true">
      <UserRound size={20} />
      <span>{getInitials(name)}</span>
    </div>
  );
}

export default function LinkedInRecommendations() {
  const { t, locale } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidthPx, setSlideWidthPx] = useState(0);
  const carouselRef = useRef(null);

  const totalRecommendations = recommendations.length;
  const hasMultipleSlides = recommendations.length > 1;
  const cloneCount = hasMultipleSlides ? Math.min(slidesPerView, totalRecommendations) : 0;
  const slides =
    hasMultipleSlides && totalRecommendations > 0
      ? [
          ...recommendations.slice(-cloneCount),
          ...recommendations,
          ...recommendations.slice(0, cloneCount),
        ]
      : recommendations;

  const activeRealIndex = hasMultipleSlides
    ? (currentIndex - cloneCount + totalRecommendations) % totalRecommendations
    : currentIndex;

  useEffect(() => {
    const updateCarouselMetrics = () => {
      const nextSlidesPerView = window.innerWidth >= 1024 ? 2 : 1;
      const containerWidth = carouselRef.current?.clientWidth || window.innerWidth;

      setSlidesPerView(nextSlidesPerView);
      setSlideWidthPx(containerWidth / nextSlidesPerView);
    };

    updateCarouselMetrics();
    window.addEventListener('resize', updateCarouselMetrics);

    return () => window.removeEventListener('resize', updateCarouselMetrics);
  }, []);

  useEffect(() => {
    setExpandedIndex(null);
    setCurrentIndex(hasMultipleSlides ? slidesPerView : 0);
  }, [hasMultipleSlides, locale, slidesPerView]);

  useEffect(() => {
    if (hasMultipleSlides && currentIndex === 0) {
      setCurrentIndex(slidesPerView);
    }
  }, [hasMultipleSlides, slidesPerView, currentIndex]);

  useEffect(() => {
    if (!hasMultipleSlides || expandedIndex !== null || isAnimating) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((index) => index + 1);
    }, 30000);

    return () => window.clearInterval(intervalId);
  }, [expandedIndex, hasMultipleSlides, isAnimating]);

  const snapToIndex = (index) => {
    setIsTransitionEnabled(false);
    setCurrentIndex(index);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
        setIsAnimating(false);
      });
    });
  };

  const handleTransitionEnd = () => {
    if (!hasMultipleSlides) {
      return;
    }

    if (currentIndex < cloneCount) {
      snapToIndex(currentIndex + totalRecommendations);
    } else if (currentIndex >= totalRecommendations + cloneCount) {
      snapToIndex(currentIndex - totalRecommendations);
    } else {
      setIsAnimating(false);
    }
  };

  const toggleExpanded = (realIndex) => {
    setExpandedIndex((currentExpanded) => (currentExpanded === realIndex ? null : realIndex));
  };

  const goToSlide = (targetRealIndex) => {
    if (!hasMultipleSlides || isAnimating) {
      return;
    }

    setExpandedIndex(null);
    setIsAnimating(true);
    setCurrentIndex(targetRealIndex + cloneCount);
  };

  const goToNextSlide = () => {
    if (!hasMultipleSlides || isAnimating) {
      return;
    }

    setExpandedIndex(null);
    setIsAnimating(true);
    setCurrentIndex((index) => index + 1);
  };

  const goToPreviousSlide = () => {
    if (!hasMultipleSlides || isAnimating) {
      return;
    }

    setExpandedIndex(null);
    setIsAnimating(true);
    setCurrentIndex((index) => index - 1);
  };

  return (
    <section id="recommendations" className="recommendations-section">
      <div className="container">
        <h2 className="cases-title">
          {t({ en: 'Recommendations', pt: 'Recomendações' })}
        </h2>

        <div className="recommendations-shell">
          {hasMultipleSlides ? (
            <button
              type="button"
              className="recommendation-nav-btn recommendation-nav-btn-prev"
              onClick={goToPreviousSlide}
              disabled={isAnimating}
              aria-label={t({ en: 'Previous recommendation', pt: 'Recomendação anterior' })}
            >
              <ChevronLeft size={20} />
            </button>
          ) : null}

          <div
            ref={carouselRef}
            className="recommendations-carousel"
          >
            <div
              className="recommendations-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(-${currentIndex * slideWidthPx}px, 0, 0)`,
                transition: isTransitionEnabled ? 'transform 650ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                '--recommendation-slides-per-view': slidesPerView,
              }}
            >
              {slides.map((recommendation, index) => {
                const realIndex = hasMultipleSlides
                  ? (index - cloneCount + recommendations.length) % recommendations.length
                  : index;
                const isExpanded = expandedIndex === realIndex;
                const isActive = realIndex === activeRealIndex;
                const paragraphs = recommendation.text
                  .split(/\n\s*\n/)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean);
                const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 1);

                return (
                  <div
                    className={`recommendation-slide ${isActive ? 'is-active' : 'is-inactive'}`}
                    key={`${recommendation.name}-${recommendation.date || 'no-date'}-${index}`}
                  >
                    <article className={`recommendation-card glass-card ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${isActive ? 'is-active' : ''}`}>
                      <header className="recommendation-top">
                        <RecommendationAvatar avatarUrl={recommendation.avatarUrl} name={recommendation.name} />

                        <div className="recommendation-person">
                          <h3>{recommendation.name}</h3>
                          {recommendation.date ? (
                            <span className="recommendation-date">{recommendation.date}</span>
                          ) : null}
                        </div>

                        {recommendation.linkedinUrl ? (
                          <a
                            className="linkedin-badge"
                            href={recommendation.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${recommendation.name}'s LinkedIn profile`}
                            title="Open LinkedIn profile"
                          >
                            <ExternalLink size={14} />
                          </a>
                        ) : null}
                      </header>

                      <p className="recommendation-title">{recommendation.title}</p>

                      <p className="recommendation-relationship">
                        <Quote size={14} />
                        <span>{recommendation.relationship}</span>
                      </p>

                      <div className="recommendation-body">
                        {visibleParagraphs.map((paragraph, paragraphIndex) => (
                          <p
                            className={`recommendation-text ${!isExpanded ? 'recommendation-text-clamped' : ''}`}
                            key={paragraphIndex}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="recommendation-toggle-btn"
                        onClick={() => toggleExpanded(realIndex)}
                        aria-expanded={isExpanded}
                        disabled={isAnimating}
                      >
                        {isExpanded ? (
                          <>
                            <span>{t({ en: 'View less', pt: 'Ver menos' })}</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>{t({ en: 'View more', pt: 'Ver mais' })}</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {hasMultipleSlides ? (
            <button
              type="button"
              className="recommendation-nav-btn recommendation-nav-btn-next"
              onClick={goToNextSlide}
              disabled={isAnimating}
              aria-label={t({ en: 'Next recommendation', pt: 'Próxima recomendação' })}
            >
              <ChevronRight size={20} />
            </button>
          ) : null}
        </div>

        {hasMultipleSlides ? (
          <div className="recommendation-dots" aria-label={t({ en: 'Recommendation navigation', pt: 'Navegação das recomendações' })}>
            {recommendations.map((recommendation, index) => (
              <button
                key={`${recommendation.name}-dot`}
                type="button"
                className={`recommendation-dot ${index === activeRealIndex ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                aria-label={t({ en: `Go to recommendation ${index + 1}`, pt: `Ir para recomendação ${index + 1}` })}
                aria-current={index === activeRealIndex ? 'true' : undefined}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
