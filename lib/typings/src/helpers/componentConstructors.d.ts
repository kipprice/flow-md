/// <reference types="react" />
import { AnswerElemProps } from '../components/complex/Answer';
import { CardProps } from '../components/basic/Card';
import { ResultElemProps } from '../components/complex/Result';
import { TextProps } from '../components/basic/Text';
import { HeadingProps } from '../components/basic/Heading';
import { QuestionElemProps } from '../components/complex/Question';
import { ButtonProps } from '../components/basic/Button';
import { FlexProps } from '../components/basic/Flex';
declare type Component<P> = React.FC<P>;
declare type ComponentTypeProps = {
    Text: Component<TextProps>;
    Heading: Component<HeadingProps>;
    Card: Component<CardProps>;
    Button: Component<ButtonProps>;
    FlexRow: Component<FlexProps>;
    FlexColumn: Component<FlexProps>;
    Result: Component<ResultElemProps>;
    Question: Component<QuestionElemProps>;
    Answer: Component<AnswerElemProps>;
};
export declare type ComponentConstructors = Partial<ComponentTypeProps>;
export declare const getComponentConstructor: <K extends "Text" | "Heading" | "Card" | "Button" | "FlexRow" | "FlexColumn" | "Result" | "Question" | "Answer">(type: K) => ComponentTypeProps[K];
export {};
