import ProgressBar from 'react-customizable-progressbar'

interface IProps {
    progress: number,
}

export default function ({
    progress = 60
}: IProps) {
    return (
        <div style={{ position: "relative" , marginRight: -20}}>
            <ProgressBar
                progress={progress}
                radius={20}
                strokeWidth={6}
                strokeColor='#16C60C'
                trackStrokeWidth={6}
                trackStrokeColor="#EAEBED"
                initialAnimation={true}
            />
            <p style={{
                color: "#16C60C",
                position: "absolute",
                top: 30,
                left: 30,
                fontSize: 12,
                fontWeight: 600
            }}>
                {progress}%
            </p>
        </div>
    );
};