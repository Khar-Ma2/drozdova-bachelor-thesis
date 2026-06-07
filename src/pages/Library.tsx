import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { css } from '../../styled-system/css';

export const Library: React.FC = () => {
    const [downloadInfo, setDownloadInfo] = useState<{ title: string; body: string } | null>(null);

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
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
        gap: '24px',
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

    const materials = [
        {
            icon: "🃏",
            title: "Флешкартки \"Professions\"",
            text: "Універсальні невербальні картки для полегшення комунікації та вивчення лексики. Містять чіткий контурний малюнок та підпис великим шрифтом з колірним кодуванням першої літери.",
            buttonText: "Отримати PDF",
            downloadTitle: "📥 Завантаження флешкаток",
            downloadBody: "Архів «Professions_Flashcards_English.zip» успішно сформовано та завантажено!"
        },
        {
            icon: "🎲",
            title: "Ігровий комплект «Picture Bingo»",
            text: "Дидактичне беззмагальне лото для легкого запам'ятовування нових лексичних одиниць. Включає 6 індивідуальних карток-лото та великі картки ведучого для незмагальної ігрової діяльності.",
            buttonText: "Отримати ZIP",
            downloadTitle: "📥 Завантаження Picture Bingo",
            downloadBody: "Архів «Picture_Bingo_Templates.zip» готовий до розпакування та друку карт!"
        },
        {
            icon: "📋",
            title: "Чек-листи процесу «To Do / Done»",
            text: "Покроковий графічний план дій для самостійних письмових завдань на уроках. Допомагає дитині з розладом спектру аутизму та дефіциту уваги самостійно структурувати хід виконання завдань.",
            buttonText: "Отримати PDF",
            downloadTitle: "📥 Завантаження чек-листів",
            downloadBody: "Чек-листи «Checklists_To_Do_Done.pdf» успішно завантажені та готові до інтеграції на робочі парти учнів."
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
                {materials.map((mat, idx) => (
                    <Card key={idx} interactive glowColor="var(--colors-brand-primary-light)">
                        <div className={cardContent}>
                            <div className={iconStyle}>{mat.icon}</div>
                            <h3 className={materialTitle}>{mat.title}</h3>
                            <p className={materialText}>{mat.text}</p>
                            <Button
                                variant="primary"
                                fullWidth
                                onClick={() => setDownloadInfo({ title: mat.downloadTitle, body: mat.downloadBody })}
                            >
                                {mat.buttonText}
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Notification Dialog */}
            <Dialog
                isOpen={downloadInfo !== null}
                onClose={() => setDownloadInfo(null)}
                title={downloadInfo?.title || ''}
            >
                <div className={css({ textAlign: 'center', padding: '16px 0' })}>
                    <div className={css({ fontSize: '3.5rem', marginBottom: '16px' })}>🎉</div>
                    <p className={css({ color: 'var(--colors-brand-text-main)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 20px 0' })}>
                        {downloadInfo?.body}
                    </p>
                    <Button variant="secondary" onClick={() => setDownloadInfo(null)}>
                        Зрозуміло
                    </Button>
                </div>
            </Dialog>
        </div>
    );
};
