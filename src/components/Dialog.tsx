import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '../../styled-system/css';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children,
}) => {
    const overlayStyle = css({
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(8px)',
        zIndex: 9998,
    });

    const wrapperStyle = css({
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '24px',
    });

    const contentStyle = css({
        background: 'var(--colors-brand-bg-card)',
        width: '100%',
        maxWidth: '750px',
        maxHeight: '90vh',
        borderRadius: 'card',
        boxShadow: 'dialog',
        border: '1px solid var(--colors-brand-border-light)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        outline: 'none',
        overflow: 'hidden',
    });

    const headerStyle = css({
        padding: '24px',
        borderBottom: '1px solid',
        borderColor: 'var(--colors-brand-border-light)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        background: 'var(--colors-brand-bg-main)',
    });

    const titleStyle = css({
        fontSize: '1.3rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        margin: '0',
    });

    const descStyle = css({
        fontSize: '0.875rem',
        color: 'var(--colors-brand-text-muted)',
        marginTop: '1',
    });

    const closeBtnStyle = css({
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#ef4444',
        border: 'none',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        transition: 'all 0.2s',
        lineHeight: '1',

        _hover: {
            background: '#ef4444',
            color: 'white',
            transform: 'scale(1.05)',
        }
    });

    const bodyStyle = css({
        padding: '24px',
        overflowY: 'auto',
    });

    return (
        <RadixDialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <AnimatePresence>
                {isOpen && (
                    <RadixDialog.Portal forceMount>
                        {/* Overlay */}
                        <RadixDialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className={overlayStyle}
                            />
                        </RadixDialog.Overlay>

                        {/* Centered Wrapper */}
                        <div className={wrapperStyle}>
                            <RadixDialog.Content asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                                    className={contentStyle}
                                >
                                    {/* Modal Header */}
                                    <div className={headerStyle}>
                                        <div>
                                            {title && <RadixDialog.Title className={titleStyle}>{title}</RadixDialog.Title>}
                                            {description && <RadixDialog.Description className={descStyle}>{description}</RadixDialog.Description>}
                                        </div>
                                        <RadixDialog.Close className={closeBtnStyle}>
                                            ✕
                                        </RadixDialog.Close>
                                    </div>

                                    {/* Modal Body */}
                                    <div className={bodyStyle}>
                                        {children}
                                    </div>
                                </motion.div>
                            </RadixDialog.Content>
                        </div>
                    </RadixDialog.Portal>
                )}
            </AnimatePresence>
        </RadixDialog.Root>
    );
};
