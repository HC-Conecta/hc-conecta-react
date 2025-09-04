interface LiFooter {
    children: React.ReactNode;
    onClick: () => void;
}

export const LiFooter = ({ children, onClick }: LiFooter) => {
    return (
        <li>
            <button onClick={onClick} className="text-white/90 transition-colors text-lg hover:underline active:underline text-start">
                {children}
            </button>
        </li>
    );
}