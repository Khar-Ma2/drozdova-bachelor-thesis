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
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '32px',
    });

    const tabBtn = css({
        background: 'var(--colors-brand-bg-card)',
        border: '2px solid var(--colors-brand-border-light)',
        color: 'var(--colors-brand-text-muted)',
        padding: '12px 30px',
        borderRadius: 'pill',
        cursor: 'pointer',
        fontWeight: '800',
        fontSize: '0.95rem',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        whiteSpace: 'nowrap',
        boxShadow: 'soft',

        _hover: {
            color: 'var(--colors-brand-primary-dark)',
            background: 'var(--colors-brand-primary-light)',
            borderColor: 'var(--colors-brand-primary)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 15px rgba(99, 102, 241, 0.15)',
        },
        _active: {
            transform: 'translateY(0)',
        }
    });

    const activeTabBtn = css({
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))!',
        color: 'white!',
        borderColor: 'var(--colors-brand-primary)!',
        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)!',
        transform: 'translateY(-2px)',
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
        margin: '16px 0 16px 0',
    });

    const methodGoal = css({
        fontSize: '0.9rem',
        color: 'var(--colors-brand-text-muted)',
        lineHeight: '1.6',
        textAlign: 'justify',
        flexGrow: 1,
        background: 'var(--colors-brand-bg-page)',
        padding: '16px',
        borderRadius: '12px',
        borderLeft: '4px solid var(--colors-brand-primary)',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '8px',
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
                                    <div className={methodGoal}>
                                        <strong className={css({ 
                                            color: 'var(--colors-brand-primary-dark)', 
                                            fontSize: '0.775rem', 
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            marginBottom: '4px'
                                        })}>
                                            🎯 Цільова мета:
                                        </strong>
                                        <span>{item.goal}</span>
                                    </div>
                                    <div className={cardFooter}>
                                        ⚡ Алгоритм реалізації ➔
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
                                        ↩️ Назад до опису
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
