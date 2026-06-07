import React from 'react';
import { Card } from '../components/Card';
import { css } from '../../styled-system/css';

export const Library: React.FC = () => {

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

    const centerGrid = css({
        display: 'flex',
        justifyContent: 'center',
    });

    const cardContent = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'space-between',
        maxWidth: '400px',
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

    const downloadBtn = css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '8px',
        fontWeight: '700',
        fontSize: '0.95rem',
        padding: '12px 24px',
        borderRadius: 'button',
        cursor: 'pointer',
        border: 'none',
        color: 'white',
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))',
        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.25)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none',

        _hover: {
            boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.35)',
            transform: 'translateY(-1px)',
        }
    });

    return (
        <div className={containerStyle}>
            <div>
                <h2 className={pageTitle}>Методична Скарбничка Дидактичних Матеріалів</h2>
                <p className={css({ color: 'var(--colors-brand-text-muted)', marginTop: '-12px', marginBottom: '24px' })}>
                    Готові до друку та використання дидактичні засоби на інклюзивних уроках англійської мови:
                </p>
            </div>

            <div className={centerGrid}>
                <Card interactive glowColor="var(--colors-brand-primary-light)">
                    <div className={cardContent}>
                        <div className={iconStyle}>🃏</div>
                        <h3 className={materialTitle}>Флешкартки "Professions"</h3>
                        <p className={materialText}>
                            Універсальні невербальні картки для полегшення комунікації та вивчення лексики.
                        </p>
                        <a
                            href={import.meta.env.BASE_URL + 'flashcards-professions.zip'}
                            download="flashcards-professions.zip"
                            className={downloadBtn}
                        >
                            📥 Завантажити
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
};
