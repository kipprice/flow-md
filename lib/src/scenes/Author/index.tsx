import React from 'react';
import { useSelector } from 'react-redux';
import { selectContent } from '../../selectors';
import { selectMode } from '../../selectors/options';
import { getComponentConstructor } from '../../helpers/componentConstructors';

export type AuthorSceneProps = {
    
};

export const AuthorScene: React.FC<AuthorSceneProps> = ({  }) => {
    const content = useSelector(selectContent);
    const mode = useSelector(selectMode);

    const FlexColumn = getComponentConstructor('FlexColumn');

    if (!content || (mode !== 'author')) { return null; }

    return(
        <FlexColumn horizontal='center' vertical='center'>
            TODO
        </FlexColumn>
    );
};

