import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectNextQuestion, selectFinalResult } from '../selectors';

export const ScrollHelper: React.FC = () => {
    const nextQuestion = useSelector(selectNextQuestion);
    const nextResult = useSelector(selectFinalResult);
    
    useEffect(() => {
        window.setTimeout(() => {
            let elem: HTMLElement | null = null;
            if (nextResult) {
                elem = document.getElementById(`result-${nextResult.id}`);
            } else if (nextQuestion) {
                elem = document.getElementById(`question-${nextQuestion.id}`)
            }

            if (!elem) { return ; }
            elem.scrollIntoView({ behavior: 'smooth' })

        }, 10)
    }, [nextQuestion, nextResult])

    return null;
}