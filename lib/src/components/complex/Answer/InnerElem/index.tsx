import React from 'react';
import { getComponentConstructor, ComponentConstructor } from '../../../../helpers/componentConstructors';
import { Answer, ColorScheme } from '../../../../models';
import styled, { StyledComponent } from '@emotion/styled';
import { TagProps } from '../../../basic/Tag';

export type AnswerElemProps = {
    /** the answer to render to the user */
    answer: Answer;

    /** whether this answer is already in a selected state */
    isSelected: boolean;

    /** the action to call when this answer has been selected */
    onSelect: () => void;

    /** what color to use for this answer */
    colorScheme?: ColorScheme;

    /**
     * whether the user has completionism mode on; if they do, we should show
     * indications about whether this answer has more to explore
     */
    completionismOn: boolean;

    /** whether this answer should display with subtle colors */
    subtle?: boolean;

    /** true if this answer leads directly to a question / result that the user hasn't seen */
    hasUnviewedChild?: boolean;

    /** true if this answer leads to a question that in turn has descendents that the user hasn't seen */
    hasUnviewedDescendent?: boolean;
};

export const AnswerElem: React.FC<AnswerElemProps> = ({
    answer,
    isSelected,
    onSelect,
    completionismOn,
    subtle,
    colorScheme = 'primary',
    hasUnviewedChild,
    hasUnviewedDescendent,
    ...props
}) => {
    const ToggleButton = getComponentConstructor('ToggleButton');
    const Tag = getComponentConstructor('Tag');
    if (!StyledTag) {
        generateStyledTag(Tag);
    }
    const FlexRow = getComponentConstructor('FlexRow');

    let tag = <React.Fragment />;

    let hasTag = false;
    if (completionismOn && subtle) {
        hasTag = true;

        if (hasUnviewedChild) {
            tag = <StyledTag colorScheme='secondary'>New</StyledTag>;
        } else if (hasUnviewedDescendent) {
            tag = <StyledTag colorScheme='tertiary'>More to Explore</StyledTag>;
        } else {
            tag = <StyledTag colorScheme='subtle'>Fully Explored</StyledTag>
        }
    }

    return (
        <ToggleButton
            selected={isSelected}
            onClick={onSelect}
            colorScheme={colorScheme}
            invert={subtle}
            subtle={subtle}
            {...props}
        >
            <FlexRow>
                <AnswerText hasTag={hasTag}>{answer.answerText}</AnswerText>
                {tag}
            </FlexRow>
        </ToggleButton>
    );
};

const AnswerText = styled.span<{ hasTag: boolean }>`
    flex-grow: 1;
    text-align: ${(p) => (p.hasTag ? 'left' : 'center')};
`;

let StyledTag: StyledComponent<any, TagProps, any>;
const generateStyledTag = (as: ComponentConstructor<TagProps>) => {
    StyledTag = styled(as)`
        flex-shrink: 0;
    `;
    return generateStyledTag;
};