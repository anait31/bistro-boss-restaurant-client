
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-3 mb-3">
            <p className="text-yellow-600">---- {subHeading} ----</p>
            <h3 className="text-2xl uppercase border-y-2 w-fit mx-auto py-1">{heading}</h3>
        </div>
    );
};

export default SectionTitle;