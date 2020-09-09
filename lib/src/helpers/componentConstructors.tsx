import { AnswerElem, AnswerElemProps } from '../components/complex/Answer';
import { Card, CardProps } from '../components/basic/Card';
import { ResultElem, ResultElemProps } from '../components/complex/Result';
import { Text, TextProps } from '../components/basic/Text';
import { HeadingProps, Heading } from '../components/basic/Heading';
import { QuestionElemProps, QuestionElem } from '../components/complex/Question';
import { ButtonProps, Button } from '../components/basic/Button';
import { FlexProps, FlexRow, FlexColumn } from '../components/basic/Flex';
import { ToggleButtonProps, ToggleButton } from '../components/basic/ToggleButton';
import { GridProps, Grid, TagProps, Tag, SpacingProps, Spacing } from '../components';

type Component<P> = React.FC<P>;

type ComponentTypeProps = {
    Text: Component<TextProps>;
    Heading: Component<HeadingProps>;
    Card: Component<CardProps>;
    Button: Component<ButtonProps>;
    Grid: Component<GridProps>;
    ToggleButton: Component<ToggleButtonProps>;
    FlexRow: Component<FlexProps>;
    FlexColumn: Component<FlexProps>;
    Tag: Component<TagProps>;
    Spacing: Component<SpacingProps>;

    Result: Component<ResultElemProps>;
    Question: Component<QuestionElemProps>;
    Answer: Component<AnswerElemProps>;
}

export type ComponentConstructors = Partial<ComponentTypeProps>

const defaultFactory: ComponentTypeProps = {
    Text,
    Heading,
    Card,
    Button,
    Grid,
    ToggleButton,
    FlexRow,
    FlexColumn,
    Tag,
    Spacing,

    Result: ResultElem,
    Question: QuestionElem,
    Answer: AnswerElem
}

let userFactory: ComponentConstructors;

export const getComponentConstructor = <K extends keyof ComponentTypeProps>(type: K): ComponentTypeProps[K] => {
    let out;
    if (userFactory) { out = userFactory[type] as ComponentTypeProps[K] }
    if (out) { return out; }
    return defaultFactory[type];
}

export const updateUserFactory = (uf: ComponentConstructors) => {
    userFactory = uf;
}