import { useState, useEffect } from "react";

export default function Question(){
    const[category, setCategory] = useState();
    const[question, setQuestion] = useState();
    const[answer, setAnswer] = useState();
    const[revealed, setRevealed] = useState(false);

    useEffect(() => {
        const getQuestion = async () => {
            let response = await fetch(
                "https://opentdb.com/api.php?amount=1&type=boolean",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            if(data.results && data.results.length > 0){
                setCategory(data.results[0].category);
                setQuestion(data.results[0].question);
                setAnswer(data.results[0].correct_answer);
            }
        }
        getQuestion();
    }, []);
    const ButtonClick = () => {
        setRevealed(true);
    };

    let revealAnswer = (revealed) ? `${answer}` : "";
    return (
        <div id="question">
            <div className="cat">{category}</div>
            <h3>{question}</h3>
            <div id = "answer">{revealAnswer}</div>
            <button type="button" onClick={ButtonClick}>Reveal answer</button>
        </div>
    );
}