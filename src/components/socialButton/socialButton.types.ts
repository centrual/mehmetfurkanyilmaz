enum SocialType {
    EMAIL = 'email',
    LINKEDIN = 'linkedin',
    GITHUB = 'github',
    INSTAGRAM = 'instagram',
}

interface SocialButtonProps {
    type?: SocialType;
    className?: string;
}

export { SocialType };
export type { SocialButtonProps };
