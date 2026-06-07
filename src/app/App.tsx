import React, { useState } from 'react';
import { Home } from '../pages/Home';
import { Theory } from '../pages/Theory';
import { Cases } from '../pages/Cases';
import { Library } from '../pages/Library';
import { Recommendations } from '../pages/Recommendations';
import { Methods } from '../pages/Methods';
import { css, cx } from '../../styled-system/css';

export const App: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<string>('home');

    const handleNavigate = (section: string) => {
        setCurrentSection(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Layout Styles
    const headerStyle = css({
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--colors-brand-border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '16px 0',
        boxShadow: 'soft',
    });

    const headerContainer = css({
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: { base: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
    });

    const logoArea = css({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
    });

    const logoIcon = css({
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-secondary))',
        color: 'white',
        width: '40px',
        height: '40px',
        borderRadius: 'innerCard',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '1.25rem',
        boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)',
    });

    const logoText = css({
        fontSize: '1.1rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.1',
        letterSpacing: '-0.3px',
    });

    const navStyle = css({
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        maxWidth: '100%',
        padding: '4px 0',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    });

    const navLink = css({
        padding: '10px 18px',
        color: 'var(--colors-brand-text-muted)',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '0.9rem',
        borderRadius: 'pill',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        border: '1px solid transparent',

        _hover: {
            color: 'var(--colors-brand-primary)',
            background: 'var(--colors-brand-primary-light)',
        }
    });

    const activeNavLink = css({
        color: 'white!',
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))!',
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
    });

    const contentContainer = css({
        maxWidth: '1280px',
        margin: '40px auto 80px auto',
        padding: '0 24px',
    });

    const footerStyle = css({
        borderTop: '1px solid var(--colors-brand-border-light)',
        padding: '24px 0',
        textAlign: 'center',
        background: 'var(--colors-brand-bg-card)',
        marginTop: 'auto',
    });

    const footerText = css({
        fontSize: '0.85rem',
        color: 'var(--colors-brand-text-muted)',
        fontWeight: '600',
    });

    return (
        <div className={css({ minHeight: '100vh', display: 'flex', flexDirection: 'column' })}>
            {/* STICKY HEADER */}
            <header className={headerStyle}>
                <div className={headerContainer}>
                    <div className={logoArea} onClick={() => handleNavigate('home')}>
                        <div className={logoIcon}>E</div>
                        <div className={logoText}>
                            Inclusive English
                            <div className={css({ fontSize: '0.75rem', fontWeight: '500', color: 'var(--colors-brand-text-muted)' })}>
                                Digital Methodology Case
                            </div>
                        </div>
                    </div>
                    <nav className={navStyle}>
                        <div
                            className={cx(navLink, currentSection === 'home' && activeNavLink)}
                            onClick={() => handleNavigate('home')}
                        >
                            Головна
                        </div>
                        <div
                            className={cx(navLink, currentSection === 'theory' && activeNavLink)}
                            onClick={() => handleNavigate('theory')}
                        >
                            Теоретична платформа
                        </div>
                        <div
                            className={cx(navLink, currentSection === 'cases' && activeNavLink)}
                            onClick={() => handleNavigate('cases')}
                        >
                            Кейс-лабораторія
                        </div>
                        <div
                            className={cx(navLink, currentSection === 'materials' && activeNavLink)}
                            onClick={() => handleNavigate('materials')}
                        >
                            Методична бібліотека
                        </div>
                        <div
                            className={cx(navLink, currentSection === 'recommendations' && activeNavLink)}
                            onClick={() => handleNavigate('recommendations')}
                        >
                            Рекомендації
                        </div>
                        <div
                            className={cx(navLink, currentSection === 'methods' && activeNavLink)}
                            onClick={() => handleNavigate('methods')}
                        >
                            Калейдоскоп методик
                        </div>
                    </nav>
                </div>
            </header>

            {/* MAIN CONTENT SPACE */}
            <main className={contentContainer}>
                {currentSection === 'home' && <Home onNavigate={handleNavigate} />}
                {currentSection === 'theory' && <Theory />}
                {currentSection === 'cases' && <Cases />}
                {currentSection === 'materials' && <Library />}
                {currentSection === 'recommendations' && <Recommendations />}
                {currentSection === 'methods' && <Methods />}
            </main>

            {/* PREMIUM FOOTER */}
            <footer className={footerStyle}>
                <div className={footerText}>
                    © {new Date().getFullYear()} - Цифровий методичний кейс • Дроздова Ксенія Олексіївна • Усі права захищено
                </div>
            </footer>
        </div>
    );
};
