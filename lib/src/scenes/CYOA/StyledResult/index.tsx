import React, { useEffect } from 'react';
import { ResultElemProps } from '../../../components';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../models';
import { selectIsVisited } from '../../../selectors';
import { visitedAction } from '../../../actions';

export type StyledResultProps = ResultElemProps & {
    
};

export const StyledResult: React.FC<StyledResultProps> = ({ result }) => {
    const isViewed = useSelector((s: Store) => selectIsVisited(s, result.id))
    const dispatch = useDispatch();
    
    const ResultElem = getComponentConstructor('Result');

    const StyledResult = styled(ResultElem)`
        width: 60vw;
    `;

    useEffect(() => {
        console.log('viewing result');
        if (isViewed) { return; }
        window.setTimeout(() => dispatch(visitedAction(result.id)), 0);
    }, [isViewed, result])

    return(
        <StyledResult result={result} />
    );
};
