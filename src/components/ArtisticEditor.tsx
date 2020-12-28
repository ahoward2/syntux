

const ArtisticEditor = () => {

    return (
        <>
        <div className="container">
            <div className="vertical-bar"></div>
            <div className="horizontal-bar-wrapper">
                <div className="row-wrapper">
                    <div className="horizontal-bar first-row block-column-1 green-block"></div>
                    <div className="horizontal-bar first-row block-column-2 blue-block"></div>
                </div>
                <div className="row-wrapper">
                    <div className="horizontal-bar second-row block-column-3 lightgreen-block"></div>
                    <div className="horizontal-bar second-row block-column-4 green-block"></div>
                    <div className="horizontal-bar second-row block-column-11 lightblue-block"></div>
                </div>
                <div className="row-wrapper">
                    <div className="horizontal-bar third-row block-column-5 darkblue-block"></div>
                    <div className="horizontal-bar third-row block-column-6 blue-block"></div>
                </div>
                <div className="row-wrapper">
                    <div className="horizontal-bar fourth-row block-column-7 blue-block"></div>
                    <div className="horizontal-bar fourth-row block-column-8 green-block"></div>
                </div>
                <div className="row-wrapper">
                    <div className="horizontal-bar fifth-row block-column-9 green-block"></div>
                    <div className="horizontal-bar fifth-row block-column-10 lightblue-block"></div>
                    <div className="horizontal-bar fifth-row block-column-12 lightgreen-block"></div>
                    <div className="horizontal-bar fifth-row block-column-13 darkblue-block"></div>
                </div>
            </div>
        </div>

        <style jsx>{`
        .container{
            display: flex;
            flex-direction: row;
            justify-between: space-between;
        }
        .horizontal-bar-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 1.0em;
            margin-bottom: 1.0em;
        }
        .vertical-bar {
            border-radius: 25px;
            background-color: #024873;
            opacity: 75%; 
            height: 8em;
            width: 0.75em;
            margin-right: 0.5em;
        }
        .horizontal-bar {
            border-radius: 25px;
            opacity: 75%; 
            height: 0.75em;
        }
        .row-wrapper{
            display: flex;
        }
        .block-column-1 {
            margin-right: 0.5em;
            width: 40%;
        }
        .block-column-2 {
            margin-right: 0.5em;
            width: 20%;
        }
        .block-column-3 {
            margin-right: 0.5em;
            width: 35%;
        }
        .block-column-4 {
            margin-right: 0.5em;
            width: 10%;
        }
        .block-column-5 {
            margin-right: 0.5em;
            width: 15%;
        }
        .block-column-6 {
            margin-right: 0.5em;
            width: 15%;
        }
        .block-column-7 {
            margin-right: 0.5em;
            width: 50%;
        }
        .block-column-8 {
            margin-right: 0.5em;
            width: 45%;
        }
        .block-column-9 {
            margin-right: 0.5em;
            width: 39%;
        }
        .block-column-10 {
            margin-right: 0.5em;
            width: 26%;
        }
        .block-column-11 {
            margin-right: 0.5em;
            width: 38%;
        }
        .block-column-12 {
            margin-right: 0.5em;
            width: 20%;
        }
        .block-column-13 {
            margin-right: 0.5em;
            width: 10em;
        }
        .blue-block {
            background-color: #0B9ED9;
        }
        .green-block {
            background-color: #025959;
        }
        .lightgreen-block {
            background-color: #027368;
        }
        .darkblue-block {
            background-color: #024873;
        }
        .lightblue-block {
            background-color: #8E9EBF;
        }
        
        `}</style>
        </>
    );
}

export default ArtisticEditor;