interface IParagraph {
    children: React.ReactNode;
}

export const Paragraph= ({ children }: IParagraph) => {
    return <p className="text-muted-foreground mb-3 text-lg">
        {children}
    </p>;
};
