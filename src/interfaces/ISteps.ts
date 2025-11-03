interface ISteps {
    number?: number;
    tip?: string;
    icon?: string | React.ReactElement;
    title: string;
    description: string;
    details?: string[];
    button?: string;
    existButton?: boolean;
    url?: string
    buttonColor?: boolean;
    link?: true;
}

export default ISteps;