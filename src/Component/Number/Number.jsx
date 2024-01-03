const Number = ({ value, isSelected, onClick }) => {
    return (
        <div>
            <h1
                className={`text-5xl text-center border-2 md:m-2 m-1 w-14 h-14 num cursor-pointer ${isSelected ? "border-yellow-300" : "border-white text-white"
                    }`}
                onClick={onClick}
            >
                {value}
            </h1>
        </div>
    );
};

export default Number;
