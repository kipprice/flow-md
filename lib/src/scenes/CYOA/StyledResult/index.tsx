import React, { useEffect } from 'react';
import { ResultStateProps, ResultStateElem } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../models';
import { selectIsVisited } from '../../../selectors';
import { visitedAction } from '../../../actions';

export type StyledResultProps = ResultStateProps & {};

export const StyledResult: React.FC<StyledResultProps> = ({ result }) => {
    const isViewed = useSelector((s: Store) => selectIsVisited(s, result.id))
    const dispatch = useDispatch();

    useEffect(() => {
        if (isViewed) { return; }
        window.setTimeout(() => dispatch(visitedAction(result.id)), 0);
    }, [isViewed, result])

    return(
        <ResultStateElem id={`result-${result.id}`} result={result} />
    );
};
