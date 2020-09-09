import React, { useCallback } from 'react';
import { Answer, QuestionId } from '../../../models/answer';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestionAction } from '../../../actions/answerQuestion';
import { selectIsAnswerSelected } from '../../../selectors/answerChain';
import { Store, ColorScheme } from '../../../models';
import { selectCompletionistMode } from '../../../selectors';
import { selectHasUnvisitedQuestion, selectHasUnvisitedDescendents } from '../../../selectors/visitedQuestions';

export type AnswerStateProps = {
    questionId: QuestionId;
    idx: number;
    answer: Answer;
    subtle: boolean;
    colorScheme?: ColorScheme;
};

export const AnswerState: React.FC<AnswerStateProps> = ({ answer, idx, questionId, ...props }) => {
    const dispatch = useDispatch();
    const isSelected = useSelector((s: Store) => selectIsAnswerSelected(s, questionId, idx))
    const completionismOn = useSelector(selectCompletionistMode);

    const hasUnviewedChild = useSelector((s: Store) => selectHasUnvisitedQuestion(s, answer.next));
    const hasUnviewedDescendent = useSelector((s: Store) => selectHasUnvisitedDescendents(s, answer.next))

    const onClick = useCallback(() => {
        dispatch(answerQuestionAction(questionId, idx))
    }, [idx, questionId])

    const AnswerElem = getComponentConstructor('Answer');

    return (
        <AnswerElem
            answer={answer}
            isSelected={isSelected}
            onSelect={onClick}
            completionismOn={!!completionismOn}
            hasUnviewedChild={hasUnviewedChild}
            hasUnviewedDescendent={hasUnviewedDescendent}
            {...props}
        />
    );
};

export * from './InnerElem';
