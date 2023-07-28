type Props = {
    bigText: string;
    smallText: string;
}

const DisplayDate = (props: Props) => {
    return(    
    <div className="flex items-end">
        <div className="w-[63px] rounded-[25px] text-[37px] bg-cyan-100 text-center">
            {props.bigText}
        </div>
        <div className="text-2xl flex text-end">
            {props.smallText}
        </div>
    </div>
    );
};

export default DisplayDate;