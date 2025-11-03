interface H2Props {
    children: React.ReactNode;
}

const H2 = ({children}: H2Props) => {
    return ( 
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            {children}
        </h2>
     );
}
 
export default H2;