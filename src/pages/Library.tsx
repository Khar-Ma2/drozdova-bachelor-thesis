import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Dialog } from '../components/Dialog';
import { css } from '../../styled-system/css';

interface LibraryItem {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    downloadName: string;
    icon: string;
    isPdf: boolean;
    glowColor: string;
}

export const Library: React.FC = () => {
    const [selectedPdf, setSelectedPdf] = useState<LibraryItem | null>(null);

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

    const gridStyle = css({
        display: 'grid',
        gridTemplateColumns: {
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr'
        },
        gap: '24px',
        width: '100%',
    });

    const cardContent = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'space-between',
    });

    const iconStyle = css({
        fontSize: '3.5rem',
        marginBottom: '20px',
        width: '80px',
        height: '80px',
        borderRadius: 'innerCard',
        background: 'var(--colors-brand-bg-main)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--colors-brand-border-light)',
    });

    const materialTitle = css({
        fontSize: '1.25rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        marginBottom: '10px',
    });

    const materialText = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-muted)',
        lineHeight: '1.6',
        marginBottom: '24px',
        flexGrow: 1,
    });

    const textBtnStyle = css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        gap: '8px',
        fontWeight: '700',
        fontSize: '0.95rem',
        padding: '12px 16px',
        borderRadius: 'button',
        cursor: 'pointer',
        border: 'none',
        color: 'white',
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))',
        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.25)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none',
        textAlign: 'center',

        _hover: {
            boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.35)',
            transform: 'translateY(-1px)',
        }
    });

    const imageBtnStyle = css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '46px',
        height: '46px',
        borderRadius: 'button',
        cursor: 'pointer',
        border: '1px solid var(--colors-brand-border-light)',
        background: 'white',
        color: 'var(--colors-brand-primary)',
        boxShadow: 'soft',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        flexShrink: 0,

        _hover: {
            background: 'var(--colors-brand-primary-light)',
            borderColor: 'var(--colors-brand-primary)',
            transform: 'translateY(-1px) scale(1.05)',
            boxShadow: '0 4px 12px 0 rgba(99, 102, 241, 0.15)',
        }
    });

    const libraryItems: LibraryItem[] = [
        {
            id: 'professions',
            title: 'Флешкартки "Professions"',
            description: 'Універсальні невербальні картки для полегшення комунікації та вивчення лексики.',
            fileUrl: 'flashcards-professions.zip',
            downloadName: 'flashcards-professions.zip',
            icon: '🃏',
            isPdf: false,
            glowColor: 'var(--colors-brand-primary)',
        },
        {
            id: 'pecs',
            title: 'Картки PECS',
            description: 'Набір карток альтернативної та додаткової комунікації (PECS), що дозволяє учням повідомляти про свої потреби, труднощі та запити під час навчальної діяльності.',
            fileUrl: 'cards_PECS.pdf',
            downloadName: 'cards_PECS.pdf',
            icon: '🗣️',
            isPdf: true,
            glowColor: 'var(--colors-nozology-ras)',
        },
        {
            id: 'vocabulary',
            title: 'Словник асоціацій',
            description: 'Наочний інструмент для структурування етапів уроку англійської мови. Використання розкладу забезпечує передбачуваність навчального процесу та знижує рівень тривожності учнів.',
            fileUrl: 'vocabulary.pdf',
            downloadName: 'vocabulary.pdf',
            icon: '📖',
            isPdf: true,
            glowColor: 'var(--colors-nozology-znm)',
        },
        {
            id: 'signal_cards',
            title: 'Сигнальні картки',
            description: 'Візуалізований алгоритм виконання навчального завдання, який допомагає учням послідовно організовувати власну діяльність.',
            fileUrl: 'signal_cards.pdf',
            downloadName: 'signal_cards.pdf',
            icon: '🚨',
            isPdf: true,
            glowColor: 'var(--colors-nozology-top)',
        },
        {
            id: 'visual_schedule',
            title: 'Візуальний розклад',
            description: 'Асоціативний словник призначений для розвитку лексичної компетентності учнів шляхом поєднання нових лексичних одиниць із візуальними образами та особистими асоціаціями.',
            fileUrl: 'visual_schedule.pdf',
            downloadName: 'visual_schedule.pdf',
            icon: '📅',
            isPdf: true,
            glowColor: 'var(--colors-nozology-ora)',
        },
        {
            id: 'checklist',
            title: 'Чекліст',
            description: 'Набір сигнальних карток для організації швидкого невербального зворотного зв’язку під час уроку.',
            fileUrl: 'checklist.pdf',
            downloadName: 'checklist.pdf',
            icon: '✅',
            isPdf: true,
            glowColor: 'var(--colors-nozology-rdug)',
        },
        {
            id: 'game_bingo',
            title: 'Гра "Бінго"',
            description: 'Дидактична гра, спрямована на закріплення та повторення лексичного матеріалу.',
            fileUrl: 'game_Bingo.pdf',
            downloadName: 'game_Bingo.pdf',
            icon: '🎲',
            isPdf: true,
            glowColor: 'var(--colors-brand-secondary)',
        }
    ];

    return (
        <div className={containerStyle}>
            <div>
                <h2 className={pageTitle}>Методична Скарбничка Дидактичних Матеріалів</h2>
                <p className={css({ color: 'var(--colors-brand-text-muted)', marginTop: '-12px', marginBottom: '24px' })}>
                    Готові до друку та використання дидактичні засоби на інклюзивних уроках англійської мови:
                </p>
            </div>

            <div className={gridStyle}>
                {libraryItems.map((item) => (
                    <Card 
                        key={item.id} 
                        interactive 
                        glowColor={item.glowColor}
                        className={css({ height: '100%' })}
                    >
                        <div className={cardContent}>
                            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', flexGrow: 1 })}>
                                <div className={iconStyle}>{item.icon}</div>
                                <h3 className={materialTitle}>{item.title}</h3>
                                <p className={materialText}>{item.description}</p>
                            </div>
                            
                            <div className={css({ display: 'flex', width: '100%', gap: '12px', marginTop: '16px' })}>
                                <a
                                    href={import.meta.env.BASE_URL + item.fileUrl}
                                    download={item.downloadName}
                                    className={textBtnStyle}
                                >
                                    📥 Завантажити
                                </a>
                                {item.isPdf && (
                                    <button
                                        onClick={() => setSelectedPdf(item)}
                                        className={imageBtnStyle}
                                        title="Переглянути матеріал"
                                        aria-label="Переглянути матеріал"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* PDF Viewer Dialog */}
            <Dialog
                isOpen={selectedPdf !== null}
                onClose={() => setSelectedPdf(null)}
                title={selectedPdf?.title || ''}
                description="Попередній перегляд дидактичного матеріалу"
            >
                {selectedPdf && (
                    <div className={css({ display: 'flex', flexDirection: 'column', gap: '20px' })}>
                        <object
                            data={import.meta.env.BASE_URL + selectedPdf.fileUrl}
                            type="application/pdf"
                            width="100%"
                            height="550px"
                            className={css({
                                borderRadius: 'innerCard',
                                border: '1px solid var(--colors-brand-border-light)',
                                boxShadow: 'soft',
                            })}
                        >
                            <div className={css({ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                height: '300px',
                                padding: '24px',
                                textAlign: 'center',
                                background: 'var(--colors-brand-bg-main)',
                                borderRadius: 'innerCard',
                                border: '1px solid var(--colors-brand-border-light)'
                            })}>
                                <span className={css({ fontSize: '3rem', marginBottom: '16px' })}>📥</span>
                                <p className={css({ fontWeight: 'bold', color: 'var(--colors-brand-text-main)', marginBottom: '8px' })}>
                                    Вбудований перегляд PDF не підтримується вашим браузером
                                </p>
                                <p className={css({ fontSize: '0.875rem', color: 'var(--colors-brand-text-muted)', marginBottom: '16px' })}>
                                    Ви можете завантажити файл для перегляду на вашому пристрої.
                                </p>
                                <a
                                    href={import.meta.env.BASE_URL + selectedPdf.fileUrl}
                                    download={selectedPdf.downloadName}
                                    className={textBtnStyle}
                                    style={{ width: 'auto' }}
                                >
                                    Завантажити PDF
                                </a>
                            </div>
                        </object>
                        
                        <div className={css({ display: 'flex', justifyContent: 'flex-end', gap: '12px' })}>
                            <button
                                onClick={() => setSelectedPdf(null)}
                                className={css({
                                    padding: '12px 24px',
                                    borderRadius: 'button',
                                    fontWeight: '700',
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    background: 'transparent',
                                    border: '1px solid var(--colors-brand-border-light)',
                                    color: 'var(--colors-brand-text-muted)',
                                    transition: 'all 0.2s',
                                    _hover: {
                                        background: 'var(--colors-brand-bg-main)',
                                    }
                                })}
                            >
                                Закрити
                            </button>
                            <a
                                href={import.meta.env.BASE_URL + selectedPdf.fileUrl}
                                download={selectedPdf.downloadName}
                                className={textBtnStyle}
                                style={{ width: 'auto' }}
                            >
                                📥 Завантажити PDF
                            </a>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
};
