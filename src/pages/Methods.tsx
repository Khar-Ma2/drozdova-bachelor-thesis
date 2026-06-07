import React, { useState } from 'react';
import { methodsData } from '../features/data';
import { css, cx } from '../../styled-system/css';

export const Methods: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('m1');
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const toggleCard = (id: number) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const containerStyle = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        animation: 'fadeIn 0.5s ease-out',
    });

    const pageTitle = css({
        fontSize: '1.75rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        _before: {
            content: '""',
            display: 'inline-block',
            width: '4px',
            height: '28px',
            background: 'linear-gradient(to bottom, var(--colors-brand-primary), var(--colors-brand-secondary))',
            borderRadius: 'pill',
        }
    });

    const tabsMenu = css({
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '24px',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    });

    const tabBtn = css({
        background: 'var(--colors-brand-bg-card)',
        border: '1px solid var(--colors-brand-border-light)',
        color: 'var(--colors-brand-text-muted)',
        padding: '10px 20px',
        borderRadius: 'pill',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',

        _hover: {
            color: 'var(--colors-brand-primary)',
            background: 'var(--colors-brand-primary-light)',
            borderColor: 'transparent',
        }
    });

    const activeTabBtn = css({
        background: 'var(--colors-brand-primary)!',
        color: 'white!',
        borderColor: 'var(--colors-brand-primary)!',
        boxShadow: '0 4px 10px rgba(99, 102, 241, 0.2)',
    });

    const kaleidoscopeGrid = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
        gap: '24px',
        perspective: '1200px',
    });

    // 3D Flip Card classes
    const flipCard = css({
        backgroundColor: 'transparent',
        height: '350px',
        perspective: '1200px',
        cursor: 'pointer',
    });

    const flipCardInner = css({
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
    });

    const flippedInner = css({
        transform: 'rotateY(180deg)',
    });

    const cardFace = css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        borderRadius: 'card',
        padding: '28px',
        border: '1px solid var(--colors-brand-border-light)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'soft',
    });

    const cardFront = css({
        background: 'var(--colors-brand-bg-card)',
    });

    const cardBack = css({
        background: 'linear-gradient(135deg, #ffffff 0%, var(--colors-brand-secondary-light) 100%)',
        transform: 'rotateY(180deg)',
    });

    const methodMeta = css({
        fontSize: '0.75rem',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: 'var(--colors-brand-primary-dark)',
        background: 'var(--colors-brand-primary-light)',
        padding: '4px 12px',
        borderRadius: 'pill',
        alignSelf: 'flex-start',
    });

    const methodTitle = css({
        fontSize: '1.2rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.4',
        margin: '12px 0 8px 0',
    });

    const methodGoal = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-muted)',
        lineHeight: '1.6',
        textAlign: 'justify',
        flexGrow: 1,
    });

    const methodSteps = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.6',
        textAlign: 'justify',
        flexGrow: 1,
        overflowY: 'auto',
    });

    const cardFooter = css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem',
        fontWeight: '700',
        color: 'var(--colors-brand-primary)',
        marginTop: '16px',
        borderTop: '1px solid var(--colors-brand-border-light)',
        paddingTop: '12px',
    });

    const tabCategories = [
        { id: 'm1', label: '🎡 Мультисенсорний' },
        { id: 'm2', label: '🧩 Асоціативні символи' },
        { id: 'm3', label: '🎲 Ігровий' },
        { id: 'm4', label: '🏃 Фізична реакція (TPR)' },
        { id: 'm5', label: '👥 Інтерактивний' },
        { id: 'm6', label: '🎨 Арт-педагогічний' },
        { id: 'm7', label: '🧱 Скафолдинг' },
    ];

    const currentGroup = methodsData[activeTab] || methodsData.m1;

    return (
        <div className={containerStyle}>
            <div>
                <h2 className={pageTitle}>Калейдоскоп методів</h2>
                <p className={css({ color: 'var(--colors-brand-text-muted)', marginTop: '-12px', marginBottom: '24px' })}>
                    35 інноваційних лінгводидактичних прийомів вивчення англійської мови:
                </p>
            </div>

            {/* TAB MENU */}
            <div className={tabsMenu}>
                {tabCategories.map(cat => (
                    <button
                        key={cat.id}
                        className={cx(tabBtn, activeTab === cat.id && activeTabBtn)}
                        onClick={() => {
                            setActiveTab(cat.id);
                            setFlippedCards({}); // Reset card flips on tab change
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* KALEIDOSCOPE GRID */}
            <div className={kaleidoscopeGrid}>
                {currentGroup.items.map((item) => {
                    const isFlipped = !!flippedCards[item.id];
                    return (
                        <div
                            key={item.id}
                            className={flipCard}
                            onClick={() => toggleCard(item.id)}
                        >
                            <div className={cx(flipCardInner, isFlipped && flippedInner)}>
                                {/* Front Face */}
                                <div className={cx(cardFace, cardFront)}>
                                    <span className={methodMeta}>{item.category}</span>
                                    <h3 className={methodTitle}>{item.title}</h3>
                                    <p className={methodGoal}>
                                        <strong>Мета:</strong> {item.goal}
                                    </p>
                                    <div className={cardFooter}>
                                        Натисніть для перегляду кроків 🔄
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className={cx(cardFace, cardBack)}>
                                    <span className={methodMeta}>Алгоритм</span>
                                    <h3 className={methodTitle}>{item.title}</h3>
                                    <div className={methodSteps}>
                                        {item.steps}
                                    </div>
                                    <div className={cardFooter}>
                                        Назад до опису 🔄
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
